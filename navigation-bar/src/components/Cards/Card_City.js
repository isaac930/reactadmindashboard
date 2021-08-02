import React from 'react';

const Card_City = () => {
 
  return (
<>
<div class="page-content-wrapper">
   
    <div class="content">
        <div class="brand inline" style={{width: 'auto;'}}>
            <strong>CITIES</strong>
        </div>
        <div class="row">
            <ul class="nav nav-tabs nav-tabs-fillup  new_class bg-white" style={{margin: '1% 0.8%;padding: 0.5% 2% 0% 1%'}}>
                <div class="pull-right m-t-10 cls110">
                    <a href="https://admin.service-genie.xyz/index.php?/city/addnewcity"> 
                        <button class="btn btn-primary btn-cons" style={{width: '115%;float: right;'}}>Create</button>
                    </a>
                </div>
            </ul>

            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="panel panel-transparent ">
                    <br/>
                    <div class="container-fluid container-fixed-lg bg-white">
                        
                        <div class="panel panel-transparent">
                            <div class="panel-heading">
                                <div class="col-sm-8">
                                    <div class="cs-loader">
                                        <div class="cs-loader-inner" >
                                            <label class="loaderPoint" style={{color:'#10cfbd;'}}>●</label>
                                            <label class="loaderPoint" style={{color:'red;'}}>●</label>
                                            <label class="loaderPoint" style={{color:'#FFD119;'}}>●</label>
                                            <label class="loaderPoint" style={{color:'#4d90fe;'}}>●</label>
                                            <label class="loaderPoint" style={{color:'palevioletred;'}}>●</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="pull-right">
                                        <input type="text" style={{width:'130px;border-radius:30px;'}} id="search-table" class="form-control pull-right"  placeholder="Search "/> 
                                    </div>
                                </div>
                                <br/>
                            </div>
                            <div class="panel-body" style={{padding: '0px; margin-top: 2%;'}}>
  
  </div>                              <table id="big_table" class="table table-hover demo-table-search">
<thead>
<tr role="row">
<th>CITY</th><th>STATE</th><th>COUNTRY</th><th>CURRENCY</th><th>DISTANCE METRIC</th><th>PAYMENT TYPES</th></tr>
</thead>
</table>                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
</>


);
};
  
export default Card_City;