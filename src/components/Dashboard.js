import DashboardPaymentsNav from "./DashboardNav";
import DashboardPaymentsSide from "./DashboardSide";

export default function Dashboard()
{
    return (
        <div>
        <DashboardPaymentsNav></DashboardPaymentsNav>
        <div className="content-wrapper">
       
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>management Dashboard</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

      
      
    </div>
        <DashboardPaymentsSide></DashboardPaymentsSide>
        </div>
    )
}