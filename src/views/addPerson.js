import { useState } from "react";
import DashboardSide from "../components/DashboardSide";
import axios from "axios"
export default function AddPerson()
{
 
    const [full_name,setfull_name]=useState("")
    const [gender,setgender]=useState("")
    const [Email,setEmail]=useState("")
  
  
    const handleChange = event => {
        setfull_name({full_name:event.target.value})
      }
      const handleChange1 = event => {
        setgender({gender:event.target.value})
    }
    const handleChange2 = event => {
        setEmail({Email:event.target.value}) 
    }

    const handleSubmit = event => {
        event.preventDefault()
        const Person= {
            full_name: full_name.full_name,
            gender: gender.gender,
            Email: Email.Email,
           
    
        };
    console.log({Person})
 
    const formData = new FormData();
   
    
     
      axios.post("http://localhost:8082/add-person",Person).then((res)=>{console.log(res)})

  
    
      }

    return (
        <div>
        
      
    <div class="content-wrapper">
        
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>General Form</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">General Form</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <form >        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card card-info">
                            <div class="card-header">
                                <h3 class="card-title">Create Persons</h3>
                            </div>
            <div class="card-body">
                                <div class="input-group mb-3">
                                   <span class="input-group-text">
                         choose Persons full_name
                         </span>
                                    <input type="text" class="form-control" onChange={handleChange} placeholder="Task_full_name"></input>
                                </div>
                                <div class="input-group mb-3">
                                    
                                   <span class="input-group-text">
                         choose Persons gender
                         </span>
                                    <input type="text" class="form-control" onChange={handleChange1} placeholder="Task_gender"></input>
                                </div>
                                <div class="input-group mb-3">
                                   <span class="input-group-text">
                         choose Persons Email
                         </span>
                                    <input type="email" class="form-control" onChange={handleChange2} placeholder="Task_Email"></input>
                                </div>
                               
                                <div class="input-group">
                                  
                                 
                      

        
                      
                    
                    <button type="submit" onClick={handleSubmit}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                            </div>  
                        </div>
        </section></form>
        </div>
        <DashboardSide></DashboardSide>
                </div>
    )
}