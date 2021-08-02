import React from 'react';
import Footer from '../components/Footer';

import Orders from '../components/Cards/Orders';



const Dashboard = () => {
  
  return (

<div class="main-content" id="panel">
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
           <DefaultsNav/>
            </div>
           <NewFilters/>
          </div>
         
          <div class="row">
         <Statistics/>
         </div>
        </div>
      </div>
    </div>
    
    <div class="container-fluid mt--6">
      <div class="row">
        <Sales/>
      </div>
      <div class="row">
       <Team/>
        <Todos/>
        <Orders/>
        
      </div>
      <div class="row">
        <Feeds/>
      </div>
      <div class="row">
        <Pagevists/>
      </div>

     
     <Footer/>
    </div>
  </div>
);
};

export default Dashboard;