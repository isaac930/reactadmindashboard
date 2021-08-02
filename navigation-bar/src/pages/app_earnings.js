import React from 'react';
import Footer from '../components/Footer';

const App_earnings = () => {
 
  return (
<div>
<div class="card">
   <div class="card-header">
<div class="page-content-wrapper">
<div class="content">
<div class="brand inline" style={{width: 'auto;'}}>

<strong><marquee>APP EARNINGS REPORTS</marquee>
</strong>
</div>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12">
<div class="card-body">

<iframe id="customerframe" src="https://metabase.uberforall.com/embed/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjEwM30sInBhcmFtcyI6e30sImlhdCI6MTYyNDY1OTY2Nn0.AzRaf5ZTCKP_VnZ9Z2ICXHF0Z-ndA2bWozZWocN7EVQ#bordered=true&titled=false" width="1000px;" height="900px;"></iframe>
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
  
export default App_earnings;