import axios from 'axios'
export default function DashboardPaymentsSide()
{
   //axios.get("http://localhost:8083/products/list").then((res)=> {console.log(res)}) 
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
        
        <a href="../../index3.html" className="brand-link">
           
            <span className="brand-text font-weight-light">ERP</span>
        </a>

        
        <div className="sidebar">
           
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
               
                </div>
                <div className="info">
                    <a href="#" className="d-block">Alexander Pierce</a>
                </div>
            </div>

           
            <div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"></input>
                    <div className="input-group-append">
                        <button className="btn btn-sidebar">
                            <i className="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>

          
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="left fas fa-gift"></i>
                            <p>
                               
                               
                                Product Management
                            </p>
                        </a>

                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fa fa-" aria-hidden="true"></i>
                            <p>
                               
                                <i className="right far fa-credit-card"></i>
                                <i className="fab fa-paypal"> </i>

                                Payments Management
                            </p>
                        </a>

                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fa fa-" aria-hidden="true"></i>
                            <p>
                               
                                <i className="left fas fa-shopping-cart"></i>
                               
                                
                                Orders Management
                            </p>
                        </a>

                    </li>
                    <li className="nav-item">
                        <a href="../widgets.html" className="nav-link">

                            <i className="fa fa-key"></i>
                            <p>
                                HR:

                            </p>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="/HR/mission" className="nav-link">
                            <i className="nav-icon  fas fa-tasks"></i>
                            <p>
                                Liste des missions
                            </p>
                        </a>

                    </li>
                    <li className="nav-item">
                        <a href="/HR/absence" className="nav-link">
                            <i className="nav-icon  fas fa-list"></i>
                            <p>
                                Liste des absences
                            </p>
                        </a>

                    </li>
                    <li className="nav-item">
                        <a href="/HR/conges" className="nav-link">
                            <i className="nav-icon  fas fa-list"></i>
                            <p>
                                Liste des congés
                            </p>
                        </a>

                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-user"></i>
                            <p>
                                Users
                                <i className="fas fa-angle-left"></i>
                            </p>
                        </a>

                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-map-marker"></i>
                            <p>
                                Projects
                                <i className="fas fa-angle-left "></i>
                            </p>
                        </a>

                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-table"></i>
                            <p>
                                Employees
                                <i className="fas fa-angle-left right"></i>
                            </p>
                        </a>

                    </li>

                </ul>
            </nav>
           
        </div>
       
    </aside>

  
    
  
    <footer className="main-footer">
        <div className="float-right d-none d-sm-block">
            <b>Version</b> 3.2.0
        </div>
        <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
    </footer>

    
    <aside className="control-sidebar control-sidebar-dark">
        
    </aside>
    
</div>

        
    )
}