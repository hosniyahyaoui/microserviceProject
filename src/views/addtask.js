import { useState } from "react";
import DashboardSide from "../components/DashboardSide";
import axios from "axios"
export default function AddTask()
{
 
    const [title,settitle]=useState("")
    const [date,setdate]=useState("")
    const [deadline,setdeadline]=useState("")
    const [personal,setpersonal]=useState("")
    const [state,setstate]=useState("")
  
    const handleChange = event => {
        settitle({title:event.target.value})
      }
      const handleChange1 = event => {
        setdate({date:event.target.value})
    }
    const handleChange2 = event => {
        setdeadline({deadline:event.target.value}) 
    }
    const handleChange3 = event => {
        setpersonal({personal:event.target.value}) 
  
    }
    const handleChange4 = event => {
        setstate({state:event.target.value}) 
  
    }
    const handleSubmit = event => {
        event.preventDefault()
        const Task= {
            title: title.title,
            date: date.date,
            deadline: deadline.deadline,
            personal: personal.personal,
            state: state.state,
    
        };
    console.log({Task})
 
    const formData = new FormData();
   
    
     
      axios.post("http://localhost:8082/add-task",Task).then((res)=>{console.log(res)})

  
    
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
                                <h3 class="card-title">Create Tasks</h3>
                            </div>
            <div class="card-body">
                                <div class="input-group mb-3">
                                   <span class="input-group-text">
                         choose Tasks title
                         </span>
                                    <input type="text" class="form-control" onChange={handleChange} placeholder="Task_title"></input>
                                </div>
                                <div class="input-group mb-3">
                                    
                                   <span class="input-group-text">
                         choose Tasks date
                         </span>
                                    <input type="date" class="form-control" onChange={handleChange1} placeholder="Task_date"></input>
                                </div>
                                <div class="input-group mb-3">
                                   <span class="input-group-text">
                         choose Tasks deadline
                         </span>
                                    <input type="date" class="form-control" onChange={handleChange2} placeholder="Task_deadline"></input>
                                </div>
                                <div class="input-group mb-3">
                                   <span class="input-group-text">
                         choose Tasks personal
                         </span>
                                    <input type="text" class="form-control" onChange={handleChange3} placeholder="Task_personal"></input>
                                </div>
                                <div class="input-group mb-3">
                                   <span class="input-group-text">
                         choose Tasks state
                         </span>
                                    <input type="text" class="form-control" onChange={handleChange4} placeholder="Task_state"></input>
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