import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import AffectEmp from "./users/AffectEmp";
import AddTasks from "./users/AddTasks";
import ProjectTasks from "./users/ProjectTasks";
import EditTask from "./users/EditTask";
import React, { useEffect, useState } from "react";
function App() {




  useEffect(()=>{

//new
(function(d, m){
  var kommunicateSettings = 
      {"appId":"3062073f7646338dc83b3ef433ab2fa4d","popupWidget":true,"automaticChatOpenOnNavigation":true,"automaticChatOpenOnNavigation":true,
      "voiceOutput":true,"voiceInput":true,"emojilibrary":true,
      "voiceName":"Microsoft David Desktop - English (United States)", // Replace Google Deutsch with the voiceName or an array of voiceNames from the below mentioned table list
      "voiceRate":0,"locShare":true,};
  var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
  window.kommunicate = m; m._globals = kommunicateSettings;
})(document, window.kommunicate || {});

},[])
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/affectemp/:id" element={<AffectEmp />} />
          <Route exact path="/addtasks/:id" element={<AddTasks />} />
          <Route exact path="/projecttasks" element={<ProjectTasks />} />
          <Route exact path="/edittask/:id" element={<EditTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
