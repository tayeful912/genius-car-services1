/**
 * 
 * 
 * 
 * How to use dynamik route
 * 
 * 1) 1st create a compontent (ex. Name ServiceDetail) 
 * 2)App js ar modde ekta route creact korte hobe. 
 * <Route path='/service/:serviceId'></Route>  colon ekta dekta dynamik id likhte hobe. jemon :serviceId 
 * 
 * 
 * 3) service component a useNavigate use korte hobe. nagivate ar modde qunie kono kichu pass korte hobe.
 * 
 * 
 * 4)usePeram use koe konta perameter route ache oira check kora jay
 * const { serviceId } = useParams()
 * usepraram() theke disstruter kore app.js modde jei na ta use kora hoichilo oi ta use korte hobe  :serviceId  tai usepearams theke serviceId nite hobe jei value ta dekha no jabe
 * 
 * 
 * 
 * 
 * */ 