import React from 'react'; 
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
const Menu = () => {
 
  return (
    <div>

<nav class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
      
      <div class="sidenav-header d-flex align-items-center">
        <a class="navbar-brand" href="#">
          <img src="../../assets/img/brand/blue.png" class="navbar-brand-img" alt="..."/>
        </a>
        <div class="ml-auto">
         
          <div class="sidenav-toggler d-none d-xl-block" data-action="sidenav-unpin" data-target="#sidenav-main">
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-inner">
       
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
        Welcome Matthew
          <br/>
          
          <ul class="navbar-nav">
            <li class="nav-item">
            <Link class="nav-link" to="/" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="navbar-dashboards">
                <i class="ni ni-shop text-primary"></i>
                <span class="nav-link-text">Dashboards</span>
              </Link>
             
            </li>

            <li class="nav-item">
            <a class="nav-link" href="#navbar-examples" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-examples">
                <i class="ni ni-ungroup text-orange"></i>
                <span class="nav-link-text">REPORTS</span>
            </a>

      
            

              <div class="collapse" id="navbar-examples">
      
                <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                <Link to="/pages/customer" class="nav-link">CUSTOMER</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/pages/provider" class="nav-link">PROVIDER</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/pages/revenue_received" class="nav-link">REVENUE RECEIVED</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/pages/payment_gateway" class="nav-link">PAYMENT GATEWAY</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/pages/provider_earnings" class="nav-link">PROVIDER EARNING</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/pages/app_earnings" class="nav-link">APP EARNING</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/pages/bookings" class="nav-link">BOOKING</Link>
                  </li>
                  
                </ul>
                
                
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#navbar-components" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-components">
                <i class="ni ni-ui-04 text-info"></i>
                <span class="nav-link-text">APP SETTING</span>
              </a>

              

              <div class="collapse" id="navbar-components">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                  <Link to="/pages/payment_gateway" class="nav-link">PAYMENT GATWAYS</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/pages/metadata" class="nav-link">METADATA</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/pages/appversions" class="nav-link">APP VERSIONS</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/pages/bidquestions" class="nav-link">BID QUESTIONS</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/pages/helptext" class="nav-link">HELP TEXT</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/pages/cancellations" class="nav-link">CANCELLATIONS</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/pages/privacypolicy" class="nav-link">PRIVACY POLICY</Link>
                 </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">

            
            <li class="nav-item">
              <Link  class="nav-link" to="/pages/cities">
                <i class="ni ni-archive-2 text-green"></i>
                <span class="nav-link-text">CITIES</span>
              </Link>
            </li>

            
            <li class="nav-item">
              <Link class="nav-link" to="/pages/businessgroups">
                <i class="ni ni-archive-2 text-green"></i>
                <span class="nav-link-text">BUSINESS GROUPS</span>
                </Link>
            </li>


            
            <li class="nav-item">
              <Link class="nav-link" to="/pages/trending">
                <i class="ni ni-archive-2 text-green"></i>
                <span class="nav-link-text">TRENDING</span>
                </Link>
            </li>


            
            <li class="nav-item">
              <Link class="nav-link" to="/pages/customer">
                <i class="ni ni-archive-2 text-black"></i>
                <span class="nav-link-text">CUSTOMER</span>
                </Link>
            </li>

            
            <li class="nav-item">
              <Link class="nav-link" to="/pages/category">
                <i class="ni ni-archive-2 text-blue"></i>
                <span class="nav-link-text">CATEGORY</span>
              </Link>
            </li>


           
            <li class="nav-item">
              <Link class="nav-link" to="/pages/subcategory">
                <i class="ni ni-archive-2 text-red"></i>
                <span class="nav-link-text">SUB CATEGORY</span>
                </Link>
            </li>


           
            <li class="nav-item">
              <Link class="nav-link" to="/pages/services">
                <i class="ni ni-archive-2 text-gold"></i>
                <span class="nav-link-text">SERVICES</span>
                </Link>
            </li>
            </li>



            <li class="nav-item">
              <a class="nav-link" href="#navbar-maps" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-maps">
                <i class="ni ni-map-big text-primary"></i>
                <span class="nav-link-text">PROVIDER LIST</span>
              </a>
              <div class="collapse" id="navbar-maps">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
              
                  <Link to="/pages/provider" class="nav-link">PROVIDER</Link>
                  </li>
                  <li class="nav-item">
                  
                  <Link to="/pages/providerplans" class="nav-link">PROVIDER PLANS</Link>
                  </li>

                  <li class="nav-item">
             
                  <Link to="/pages/provideracceptance" class="nav-link">PROVIDER ACCEPTANCE RATE</Link>
                  </li>
                </ul>
              </div>
            </li>







            <li class="nav-item">
              <a class="nav-link" href="#navbar-maps" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-maps">
                <i class="ni ni-map-big text-primary"></i>
                
                <span class="nav-link-text">BUSINESS</span>
              </a>
              <div class="collapse" id="navbar-maps">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                
                  <Link to="/pages/businesslist" class="nav-link">BUSINESS LIST</Link>
                  </li>
                  <li class="nav-item">
                  
                  <Link to="/pages/businessprovider" class="nav-link">BUSINESS PROVIDERS</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
        
              <Link class="nav-link" to="/pages/logs">
                <i class="ni ni-archive-2 text-brown"></i>
                <span class="nav-link-text">LOGS</span>
              </Link>
            </li>

              <li class="nav-item">
            
              <Link class="nav-link" to="/pages/purple">
                <i class="ni ni-archive-2 text-green"></i>
                <span class="nav-link-text">SMS</span>
              </Link>
            </li>

            <li class="nav-item">
            
              <Link class="nav-link" to="/pages/email">
                <i class="ni ni-archive-2 text-orange"></i>
                <span class="nav-link-text">EMAIL</span>
              </Link>
            </li>


           
            <li class="nav-item">
           
              <Link class="nav-link" to="/pages/notifications">
                <i class="ni ni-archive-2 text-pink"></i>
                <span class="nav-link-text">NOTIFICATIONS</span>
              </Link>
            </li>
          </ul>
         
          <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
         
              <Link class="nav-link" to="/pages/appconfig">
                <i class="ni ni-archive-2 text-black"></i>
                <span class="nav-link-text">APP CONFIGURATION</span>
              </Link>
            </li>


            <li class="nav-item">
            
              <Link class="nav-link" to="/pages/goodwill">
                <i class="ni ni-archive-2 text-lime"></i>
                <span class="nav-link-text">GOOD WILL</span>
              </Link>
            </li>


            <li class="nav-item">
            
              <Link class="nav-link" to="/pages/centraldispaches">
                <i class="ni ni-archive-2 text-yellow"></i>
                <span class="nav-link-text">CENTRAL DISPATCHES</span>
              </Link>
            </li>


            <li class="nav-item">
           
              <Link class="nav-link" to="/pages/cart">
                <i class="ni ni-archive-2 text-blue"></i>
                <span class="nav-link-text">CART</span>
              </Link>
            </li>

            <li class="nav-item">
            
              <Link class="nav-link" to="/pages/dispatchlogs">
                <i class="ni ni-archive-2 text-red"></i>
                <span class="nav-link-text">DISPATCH LOGS</span>
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </nav>
 
 
      </div>
  );
};
  
export default Menu;