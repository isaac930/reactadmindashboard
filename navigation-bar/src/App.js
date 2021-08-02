import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Menu from './components/Menu';
import Customer from "./pages/customer";
import Provider from "./pages/provider";
import Revenue_received from "./pages/revenue_received";
import Payment_gateway from "./pages/payment_gateway";
import Provider_earnings from "./pages/provider_earnings";
import App_earnings from "./pages/app_earnings";
import Bookings from "./pages/bookings";
import Metadata from "./pages/metadata";
import Appversions from "./pages/appversions";
import Bidquestions from "./pages/bidquestions";
import Helptext from "./pages/helptext";
import Cancellations from "./pages/cancellations";
import Privacypolicy from "./pages/privacypolicy";
import Cities from "./pages/cities";
import Businessgroups from "./pages/businessgroups";
import Trending from "./pages/trending";
import Category from "./pages/category";
import Subcategory from "./pages/subcategory";
import Services from "./pages/services";
import Provideracceptance from "./pages/provideracceptance";
import Providerplans from "./pages/providerplans";
import Businessprovider from "./pages/businessprovider";
import Businesslist from "./pages/businesslist";
import Logs from "./pages/logs";
import Sms from "./pages/sms";
import Email from "./pages/email";
import Notifications from "./pages/notifications";
import Appconfig from "./pages/appconfig";
import Goodwill from "./pages/goodwill";
import Centraldispaches from "./pages/centraldispaches";
import Cart from "./pages/cart";
import Dispatchlogs from "./pages/dispatchlogs";
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
   <Router>
     <Navbar/>
   <Menu/>
    <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route  path="/pages/customer" component={Customer}/>
            <Route  path="/pages/provider" component={Provider}/>
            <Route  path="/pages/revenue_received" component={Revenue_received}/>
            <Route  path="/pages/payment_gateway" component={Payment_gateway}/>
            <Route  path="/pages/provider_earnings" component={Provider_earnings}/>
            <Route  path="/pages/app_earnings" component={App_earnings}/>
            <Route  path="/pages/bookings" component={Bookings}/>
            <Route  path="/pages/metadata" component={Metadata}/>
            <Route  path="/pages/appversions" component={Appversions}/>
            <Route  path="/pages/bidquestions" component={Bidquestions}/>
            <Route  path="/pages/helptext" component={Helptext}/>
            <Route  path="/pages/cancellations" component={Cancellations}/>
            <Route  path="/pages/privacypolicy" component={Privacypolicy}/>
            <Route  path="/pages/cities" component={Cities}/>
            <Route  path="/pages/businessgroups" component={Businessgroups}/>
            <Route  path="/pages/trending" component={Trending}/>
            <Route  path="/pages/category" component={Category}/>
            <Route  path="/pages/subcategory" component={Subcategory}/>
            <Route  path="/pages/services" component={Services}/>
            <Route  path="/pages/provider" component={Provider}/>
            <Route  path="/pages/providerplans" component={Providerplans}/>
            <Route  path="/pages/provideracceptance" component={Provideracceptance}/>
            <Route  path="/pages/businesslist" component={Businesslist}/>
            <Route  path="/pages/businessprovider" component={Businessprovider}/>
            <Route  path="/pages/logs" component={Logs}/>
            <Route  path="/pages/sms" component={Sms}/>
            <Route  path="/pages/email" component={Email}/>
            <Route  path="/pages/notification" component={Notifications}/>
            <Route  path="/pages/appconfig" component={Appconfig}/>
            <Route  path="/pages/goodwill" component={Goodwill}/>
            <Route  path="/pages/centraldispaches" component={Centraldispaches}/>
            <Route  path="/pages/cart" component={Cart}/>
            <Route  path="/pages/dispatchlogs" component={Dispatchlogs}/>
           </Switch>
 
</Router>
 
</>
  );
}
  
export default App;