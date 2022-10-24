import logo from './logo.svg';
import './App.css';

import {Routes,Route,BrowserRouter} from 'react-router-dom'

import DashboardSide from './components/DashboardSide';
import Dashboard from './components/Dashboard';
import PersonManager from './views/personsDashboard';
import AddPerson from './views/addPerson';
import TaskManager from './views/tasksDashboard';
import AddTask from './views/addtask';

function App() {
  return (
   
      <BrowserRouter>
          <Routes>
            <Route path='/nav' element={<DashboardSide></DashboardSide>}></Route>
         
            <Route path='/dash' element={<Dashboard></Dashboard>}></Route>
            <Route path='/Persons' element={<PersonManager></PersonManager>}></Route>
            <Route path='/create_Person' element={<AddPerson ></AddPerson >}></Route>
            <Route path='/Taskts' element={<TaskManager></TaskManager>}></Route>
            <Route path='/create_Task' element={<AddTask></AddTask>}></Route>
   
          </Routes>
      </BrowserRouter>
   
  );
}

export default App;
