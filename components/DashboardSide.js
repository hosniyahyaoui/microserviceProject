import axios from 'axios'
export default function DashboardSide()
{
   //axios.get("http://localhost:8083/products/list").then((res)=> {console.log(res)}) 
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
        
        <a href="../../index3.html" class="brand-link">
           
            <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        
        <div class="sidebar">
           
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
               
                </div>
                <div class="info">
                    <a href="#" class="d-block">Alexander Pierce</a>
                </div>
            </div>

           
            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"></input>
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
                            <i class="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>

          
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    
                    <li class="nav-item">
                        <a href="/Taskts" class="nav-link">
                        <i class="left fas fa-gift" ></i>
                            <p>
                            Tasks Manager
                                
                            </p>
                        </a>

                    </li>
         
                    <li class="nav-item">
                        <a href="/Persons" class="nav-link">
                            <i class="fa fa-" aria-hidden="true"></i>
                            <p>
                               
                                <i class="nav-icon fas fa-user"></i>
                               
                                
                                Persons Manager
                            </p>
                        </a>

                    </li>

                    <li class="nav-item">
                        <a href="../widgets.html" class="nav-link">

                            <i class="fa fa-key"></i>
                            <p>
                                HR

                            </p>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon  fas fa-handshake"></i>
                            <p>
                                CRM
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>

                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-user"></i>
                            <p>
                                Users
                                <i class="fas fa-angle-left"></i>
                            </p>
                        </a>

                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-map-marker"></i>
                            <p>
                                Projects
                                <i class="fas fa-angle-left "></i>
                            </p>
                        </a>

                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-table"></i>
                            <p>
                                Employees
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>

                    </li>

                </ul>
            </nav>
           
        </div>
       
    </aside>

  
    <div class="content-wrapper">
       
        
      
      
    </div>
  
   
    
</div>

        
    )
}