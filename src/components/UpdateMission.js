import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DashboardPaymentsNav from "./DashboardNav";
import DashboardPaymentsSide from "./DashboardSide";


export default function UpdateMission() {
    const [idMission,setIdMission]= useState(null);
    const [motif,setMotif]= useState("");
    const [dateDebut,setDateDebut]= useState("");
    const [dateFinPrevu,setDateFinPrevu]= useState("");

    const UpdateMission = (e) =>{
        axios.put("http://localhost:8082/mission/api/modify-mission", {
            idMission,
            motif,
            dateDebut,
            dateFinPrevu
        })
        e.preventdefault();
       
    }
    useEffect(()=>{
        setIdMission(localStorage.getItem("idMission"))
        setMotif(localStorage.getItem("motif"))
        setDateDebut(localStorage.getItem("dateDebut"))
        setDateFinPrevu(localStorage.getItem("dateFinPrevu"))
    },[])
  return (
    <div>
    <DashboardPaymentsNav></DashboardPaymentsNav>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Update mission</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Update mission</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Missions management</h3>
                        </div>
                        <div className="card-body">
                            <form>
                            <div className="input-group mb-3">
                        <span className="input-group-text">ID</span>
                        <input
                          type="Number"
                          value={idMission}
                          className="form-control"
                          placeholder="id"
                          name="IdMission"
                          onChange={(e)=> setIdMission(e.target.value)}
                        ></input>
                      </div>
                        <div className="input-group mb-3">
                        <span className="input-group-text">choose motif</span>
                        <input
                          type="text"
                          value={motif}
                          className="form-control"
                          placeholder="Description"
                          name="Motif"
                          onChange={(e)=> setMotif(e.target.value)}
                        ></input>
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">set start date</span>
                        <input
                          type="Date"
                          value={dateDebut}
                          className="form-control"
                          placeholder="Date"
                          name="DateDebut"
                          onChange={(e)=> setDateDebut(e.target.value)}
                        ></input>
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">set end date</span>
                        <input
                          type="Date"
                          value={dateFinPrevu}
                          className="form-control"
                          placeholder="Date"
                          name="DateFinPrevu"
                          onChange={(e)=> setDateFinPrevu(e.target.value)}
                        ></input>
                      </div>
                            <button className="btn btn-primary" style={{marginLeft: "30em", marginTop: "20px"}}  >
                               <a href="/HR/mission" style={{color: "white"}} onClick={UpdateMission}>Update mission</a> 
                                </button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>
      <DashboardPaymentsSide></DashboardPaymentsSide>
</div>
  );
}
