import axios from 'axios';
import React, { useState } from 'react';
import DashboardPaymentsNav from "./DashboardNav";
import DashboardPaymentsSide from "./DashboardSide";


export default function DemandeConges() {

    const [motif,setMotif]= useState("");
    const [dateDebut,setDateDebut]= useState("");
    const [nbr_jours,setNbr_jours]= useState("");

    console.log(motif)
    console.log(dateDebut)
    console.log(nbr_jours)
    const SendCongesPermission = (e) =>{
        axios.post("http://localhost:8082/conges/api/add-conges", {
            motif,
            dateDebut,
            nbr_jours
        })
        e.preventdefault()
       
    }
  return (
    <div>
    <DashboardPaymentsNav></DashboardPaymentsNav>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Demand a leave permission</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Demand a leave permission</li>
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
                            <h3 className="card-title">Leave management</h3>
                        </div>
                        <div className="card-body">
                            <form>
                        <div className="input-group mb-3">
                        <span className="input-group-text">choose motif</span>
                        <input
                          type="text"
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
                          className="form-control"
                          placeholder="Date"
                          name="DateDebut"
                          onChange={(e)=> setDateDebut(e.target.value)}
                        ></input>
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">set end date</span>
                        <input
                          type="Number"
                          className="form-control"
                          placeholder="number"
                          name="Nbr_jours"
                          onChange={(e)=> setNbr_jours(e.target.value)}
                        ></input>
                      </div>
                            <button className="btn btn-primary" style={{marginLeft: "30em", marginTop: "20px"}}  >
                               <a href="/HR/congesEmployee" style={{color: "white"}} onClick={SendCongesPermission}>Send</a> 
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
