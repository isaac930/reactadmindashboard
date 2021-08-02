const Feeds = () => {
  
    return (
        <>
<div class="col-xl-5">
<div class="card">
  <div class="card-header">
    <h5 class="h3 mb-0">Activity feed</h5>
  </div>
  <div class="card-header d-flex align-items-center">
    <div class="d-flex align-items-center">
      <a href="#">
        <img src="../../assets/img/theme/team-1.jpg" class="avatar"/>
      </a>
      <div class="mx-3">
        <a href="#" class="text-dark font-weight-600 text-sm">John Snow</a>
        <small class="d-block text-muted">3 days ago</small>
      </div>
    </div>
    <div class="text-right ml-auto">
      <button type="button" class="btn btn-sm btn-primary btn-icon">
        <span class="btn-inner--icon"><i class="ni ni-fat-add"></i></span>
        <span class="btn-inner--text">Follow</span>
      </button>
    </div>
  </div>
  <div class="card-body">
    <p class="mb-4">
      Personal profiles are the perfect way for you to grab their attention and persuade recruiters to continue reading your CV because you’re telling them from the off ly why they should hire you.
    </p>
    <img alt="Image placeholder" src="../../assets/img/theme/img-1-1000x600.jpg" class="img-fluid rounded"/>
    <div class="row align-items-center my-3 pb-3 border-bottom">
      <div class="col-sm-6">
        <div class="icon-actions">
          <a href="#" class="like active">
            <i class="ni ni-like-2"></i>
            <span class="text-muted">150</span>
          </a>
          <a href="#">
            <i class="ni ni-chat-round"></i>
            <span class="text-muted">36</span>
          </a>
          <a href="#">
            <i class="ni ni-curved-next"></i>
            <span class="text-muted">12</span>
          </a>
        </div>
      </div>
      <div class="col-sm-6 d-none d-sm-block">
        <div class="d-flex align-items-center justify-content-sm-end">
          <div class="avatar-group">
            <a href="#" class="avatar avatar-xs rounded-circle" data-toggle="tooltip" data-original-title="Jessica Rowland">
              <img alt="Image placeholder" src="../../assets/img/theme/team-1.jpg" class=""/>
            </a>
            <a href="#" class="avatar avatar-xs rounded-circle" data-toggle="tooltip" data-original-title="Audrey Love">
              <img alt="Image placeholder" src="../../assets/img/theme/team-2.jpg" class="rounded-circle"/>
            </a>
            <a href="#" class="avatar avatar-xs rounded-circle" data-toggle="tooltip" data-original-title="Michael Lewis">
              <img alt="Image placeholder" src="../../assets/img/theme/team-3.jpg" class="rounded-circle"/>
            </a>
          </div>
          <small class="pl-2 font-weight-bold">and 30+ more</small>
        </div>
      </div>
    </div>
   
    <div class="mb-1">
      <div class="media media-comment">
        <img alt="Image placeholder" class="avatar avatar-lg media-comment-avatar rounded-circle" src="../../assets/img/theme/team-1.jpg"/>
        <div class="media-body">
          <div class="media-comment-text">
            <h6 class="h5 mt-0">Michael Lewis</h6>
            <p class="text-sm lh-160">Cras sit amet nibh libero nulla vel metus scelerisque ante sollicitudin. Cras purus odio vestibulum in vulputate viverra turpis.</p>
            <div class="icon-actions">
              <a href="#" class="like active">
                <i class="ni ni-like-2"></i>
                <span class="text-muted">3 likes</span>
              </a>
              <a href="#">
                <i class="ni ni-curved-next"></i>
                <span class="text-muted">2 shares</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="media media-comment">
        <img alt="Image placeholder" class="avatar avatar-lg media-comment-avatar rounded-circle" src="../../assets/img/theme/team-2.jpg"/>
        <div class="media-body">
          <div class="media-comment-text">
            <h6 class="h5 mt-0">Jessica Stones</h6>
            <p class="text-sm lh-160">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
            <div class="icon-actions">
              <a href="#" class="like active">
                <i class="ni ni-like-2"></i>
                <span class="text-muted">10 likes</span>
              </a>
              <a href="#">
                <i class="ni ni-curved-next"></i>
                <span class="text-muted">1 share</span>
              </a>
            </div>
          </div>
        </div>
      </div>
     
      <div class="media align-items-center">
        <img alt="Image placeholder" class="avatar avatar-lg rounded-circle mr-4" src="../../assets/img/theme/team-3.jpg"/>
        <div class="media-body">
          <form>
            <textarea class="form-control" placeholder="Write your comment" rows="1"></textarea>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-xl-7">
<div class="row">
  <div class="col">
    <div class="card">
     
      <div class="card-header border-0">
        <h3 class="mb-0">Light table</h3>
      </div>
      <div class="table-responsive">
        <table class="table align-items-center table-flush">
          <thead class="thead-light">
            <tr>
              <th scope="col" class="sort" data-sort="name">Project</th>
              <th scope="col" class="sort" data-sort="budget">Budget</th>
              <th scope="col" class="sort" data-sort="status">Status</th>
              <th scope="col">Users</th>
              <th scope="col" class="sort" data-sort="completion">Completion</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="list">
            <tr>
              <th scope="row">
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" src="../../assets/img/theme/bootstrap.jpg"/>
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">Argon Design System</span>
                  </div>
                </div>
              </th>
              <td class="budget">
                $2500 USD
              </td>
              <td>
                <span class="badge badge-dot mr-4">
                  <i class="bg-warning"></i>
                  <span class="status">pending</span>
                </span>
              </td>
              <td>
                <div class="avatar-group">
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-1.jpg"/>
                </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Romina Hadid">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-2.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Alexander Smith">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-3.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jessica Doe">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-4.jpg"/>
                  </a>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="completion mr-2">60%</span>
                  <div>
                    <div class="progress">
                      <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%;"}}></div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-right">
                <div class="dropdown">
                  <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" src="../../assets/img/theme/angular.jpg"/>
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">Angular Now UI Kit PRO</span>
                  </div>
                </div>
              </th>
              <td class="budget">
                $1800 USD
              </td>
              <td>
                <span class="badge badge-dot mr-4">
                  <i class="bg-success"></i>
                  <span class="status">completed</span>
                </span>
              </td>
              <td>
                <div class="avatar-group">
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-1.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Romina Hadid">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-2.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Alexander Smith">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-3.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jessica Doe">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-4.jpg"/>
                  </a>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="completion mr-2">100%</span>
                  <div>
                    <div class="progress">
                      <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%;"}}></div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-right">
                <div class="dropdown">
                  <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" src="../../assets/img/theme/sketch.jpg"/>
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">Black Dashboard</span>
                  </div>
                </div>
              </th>
              <td class="budget">
                $3150 USD
              </td>
              <td>
                <span class="badge badge-dot mr-4">
                  <i class="bg-danger"></i>
                  <span class="status">delayed</span>
                </span>
              </td>
              <td>
                <div class="avatar-group">
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-1.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Romina Hadid">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-2.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Alexander Smith">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-3.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jessica Doe">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-4.jpg"/>
                  </a>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="completion mr-2">72%</span>
                  <div>
                    <div class="progress">
                      <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{width: "72%;"}}></div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-right">
                <div class="dropdown">
                  <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" src="../../assets/img/theme/react.jpg"/>
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">React Material Dashboard</span>
                  </div>
                </div>
              </th>
              <td class="budget">
                $4400 USD
              </td>
              <td>
                <span class="badge badge-dot mr-4">
                  <i class="bg-info"></i>
                  <span class="status">on schedule</span>
                </span>
              </td>
              <td>
                <div class="avatar-group">
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-1.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Romina Hadid">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-2.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Alexander Smith">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-3.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jessica Doe">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-4.jpg"/>
                  </a>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="completion mr-2">90%</span>
                  <div>
                    <div class="progress">
                      <div class="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%;"}}></div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-right">
                <div class="dropdown">
                  <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" src="../../assets/img/theme/vue.jpg"/>
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">Vue Paper UI Kit PRO</span>
                  </div>
                </div>
              </th>
              <td class="budget">
                $2200 USD
              </td>
              <td>
                <span class="badge badge-dot mr-4">
                  <i class="bg-success"></i>
                  <span class="status">completed</span>
                </span>
              </td>
              <td>
                <div class="avatar-group">
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-1.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Romina Hadid">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-2.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Alexander Smith">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-3.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jessica Doe">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-4.jpg"/>
                  </a>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="completion mr-2">100%</span>
                  <div>
                    <div class="progress">
                      <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%;"}}></div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-right">
                <div class="dropdown">
                  <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" src="../../assets/img/theme/bootstrap.jpg"/>
                 </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">Argon Design System</span>
                  </div>
                </div>
              </th>
              <td class="budget">
                $2500 USD
              </td>
              <td>
                <span class="badge badge-dot mr-4">
                  <i class="bg-warning"></i>
                  <span class="status">pending</span>
                </span>
              </td>
              <td>
                <div class="avatar-group">
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-1.jpg"/>
                 </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Romina Hadid">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-2.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Alexander Smith">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-3.jpg"/>
                 </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jessica Doe">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-4.jpg"/>
                  </a>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="completion mr-2">60%</span>
                  <div>
                    <div class="progress">
                      <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%;"}}></div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-right">
                <div class="dropdown">
                  <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" src="../../assets/img/theme/angular.jpg"/>
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">Angular Now UI Kit PRO</span>
                  </div>
                </div>
              </th>
              <td class="budget">
                $1800 USD
              </td>
              <td>
                <span class="badge badge-dot mr-4">
                  <i class="bg-success"></i>
                  <span class="status">completed</span>
                </span>
              </td>
              <td>
                <div class="avatar-group">
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-1.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Romina Hadid">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-2.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Alexander Smith">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-3.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jessica Doe">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-4.jpg"/>
                  </a>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="completion mr-2">100%</span>
                  <div>
                    <div class="progress">
                      <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%;"}}></div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-right">
                <div class="dropdown">
                  <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" src="../../assets/img/theme/sketch.jpg"/>
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">Black Dashboard</span>
                  </div>
                </div>
              </th>
              <td class="budget">
                $3150 USD
              </td>
              <td>
                <span class="badge badge-dot mr-4">
                  <i class="bg-danger"></i>
                  <span class="status">delayed</span>
                </span>
              </td>
              <td>
                <div class="avatar-group">
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-1.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Romina Hadid">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-2.jpg"/>
                 </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Alexander Smith">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-3.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jessica Doe">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-4.jpg"/>
                  </a>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="completion mr-2">72%</span>
                  <div>
                    <div class="progress">
                      <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{width: "72%;"}}></div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-right">
                <div class="dropdown">
                  <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" src="../../assets/img/theme/angular.jpg"/>
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">Angular Now UI Kit PRO</span>
                  </div>
                </div>
              </th>
              <td class="budget">
                $1800 USD
              </td>
              <td>
                <span class="badge badge-dot mr-4">
                  <i class="bg-success"></i>
                  <span class="status">completed</span>
                </span>
              </td>
              <td>
                <div class="avatar-group">
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-1.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Romina Hadid">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-2.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Alexander Smith">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-3.jpg"/>
                  </a>
                  <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jessica Doe">
                    <img alt="Image placeholder" src="../../assets/img/theme/team-4.jpg"/>
                  </a>
                </div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="completion mr-2">100%</span>
                  <div>
                    <div class="progress">
                      <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%;"}}></div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-right">
                <div class="dropdown">
                  <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div class="card-deck">
  <div class="card bg-gradient-default">
    <div class="card-body">
      <div class="mb-2">
        <sup class="text-white">$</sup> <span class="h2 text-white">3,300</span>
        <div class="text-light mt-2 text-sm">Your current balance</div>
        <div>
          <span class="text-success font-weight-600">+ 15%</span> <span class="text-light">($250)</span>
        </div>
      </div>
      <button class="btn btn-sm btn-block btn-neutral">Add credit</button>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <small class="text-light">Orders: 60%</small>
          <div class="progress progress-xs my-2">
            <div class="progress-bar bg-success" style={{width: "60%"}}></div>
          </div>
        </div>
        <div class="col"><small class="text-light">Sales: 40%</small>
          <div class="progress progress-xs my-2">
            <div class="progress-bar bg-warning" style={{width: "40%"}}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="card bg-gradient-danger">
   
    <div class="card-body">
      <div class="row justify-content-between align-items-center">
        <div class="col">
          <img src="../../assets/img/icons/cards/bitcoin.png" alt="Image placeholder" />
        </div>
        <div class="col-auto">
          <span class="badge badge-lg badge-success">Active</span>
        </div>
      </div>
      <div class="my-4">
        <span class="h6 surtitle text-light">
          Username
        </span>
        <div class="h1 text-white">@johnsnow</div>
      </div>
      <div class="row">
        <div class="col">
          <span class="h6 surtitle text-light">Name</span>
          <span class="d-block h3 text-white">John Snow</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</>

);
};

export default Feeds