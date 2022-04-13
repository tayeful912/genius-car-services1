import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear()
    const time = today.toLocaleTimeString()
    return (
        <div>

            <p>The Car Doctor @ {year} {time}</p>

        </div>
    );
};

export default Footer;