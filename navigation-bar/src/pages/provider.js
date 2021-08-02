import React from 'react';
import Footer from '../components/Footer';

const Provider = () => {
 
  return (
<div>
<div class="card">
   <div class="card-header">
<div class="page-content-wrapper">
<div class="content">
<div class="brand inline" style={{width: 'auto;'}}>

<strong><marquee>PROVIDERS REPORTS</marquee>
</strong>
</div>
<div class="row">
<div class="col-md-12 col-sm-12 col-xs-12">
<div class="card-body">
<iframe id="customerframe" src="https://metabase.uberforall.com/embed/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjEwMn0sInBhcmFtcyI6e30sImlhdCI6MTYyNDY1NjkzNX0.dv2jGFiVze3vr69mE5z4ztF422UWeiri0HRGOy9WAes#bordered=true&titled=false" width="1000px;" height="900px;"></iframe>
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
  
export default Provider;