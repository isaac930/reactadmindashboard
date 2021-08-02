import React from 'react';
import Footer from '../components/Footer';

const Payment_gateway = () => {
 
  return (
<div>
<div class="card">
   <div class="card-header">
<div class="page-content-wrapper">
<div class="content">
<div class="brand inline" style={{width: 'auto;'}}>

<strong><marquee>PAYMENT GATEWAY REPORTS</marquee>
</strong>
</div>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12">
<div class="card-body">

<iframe id="customerframe" src="https://metabase.uberforall.com/embed/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjEwNX0sInBhcmFtcyI6e30sImlhdCI6MTYyNDY1OTI5Nn0.4UXW9ibmBxRJ1UQqoH4XoQJlOK1eI85HN_7n1Y1iyqg#bordered=true&titled=false" width="1000px;" height="900px;"></iframe>
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
  
export default Payment_gateway;