import React from 'react';
import Footer from '../components/Footer';

const Customer = () => {
 
  return (
<div>
<div class="card">
   <div class="card-header">
<div class="page-content-wrapper">
<div class="content">
<div class="brand inline" style={{width: 'auto;'}}>

<strong><marquee>CUSTOMER REPORTS</marquee>
</strong>
</div>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12">
<div class="card-body">
<iframe id="customerframe" src="https://metabase.uberforall.com/embed/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjEwMX0sInBhcmFtcyI6e30sImlhdCI6MTYyNDYzMzc3Nn0.F2sTvHYhtfmy6C3rWjdxTag9kaHDGR76B4i10gjQkrU#bordered=true&titled=true" width="1000px;" height="900px;"></iframe>
</div>
</div>
</div>
</div>
</div>
 </div>
</div>
<Footer/>
</div>

  );
};
  
export default Customer;