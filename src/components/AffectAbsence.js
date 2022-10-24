import axios from 'axios';
import React, { useState } from 'react';
import DashboardPaymentsNav from "./DashboardNav";
import DashboardPaymentsSide from "./DashboardSide";

export default function AffectAbsence() {
    const [dateAbsence,setDateAbsence]= useState("");


    console.log(dateAbsence)
    const AffectAbsenceToEmployee = (e) =>{
        axios.post("http://localhost:8083/absence/api/add-absence", {
            dateAbsence
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
                <h1>Affect absence to employee</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Affect absence</li>
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
                            <h3 className="card-title">Absences management</h3>
                        </div>
                        <div className="card-body">
                            <form>
                      <div className="input-group mb-3">
                        <span className="input-group-text">set absence date</span>
                        <input
                          type="Date"
                          className="form-control"
                          placeholder="Date"
                          name="DateAbsence"
                          onChange={(e)=> setDateAbsence(e.target.value)}
                        ></input>
                      </div>
                            <button className="btn btn-primary" style={{marginLeft: "30em", marginTop: "20px"}}  >
                               <a href="/HR/absence" style={{color: "white"}} onClick={AffectAbsenceToEmployee}>Affect absence</a> 
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
