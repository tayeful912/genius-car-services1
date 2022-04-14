import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div>

            <h1>Welcome to service detail {serviceId.slice(0, 10)}</h1>

        </div>
    );
};

export default ServiceDetail;