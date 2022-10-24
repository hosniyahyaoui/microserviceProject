import logo from './logo.svg';
import './App.css';

import {Routes,Route,BrowserRouter} from 'react-router-dom'
import DashboardPayments from './components/DashboardNav';
import DashboardPaymentsNav from './components/DashboardNav';
import DashboardPaymentsSide from './components/DashboardSide';
import Dashboard from './components/Dashboard';
import ListeMissions from './components/ListeMissions';
import ListeMissionEmployee from './components/ListMissionEmployee';
import ListeConges from './components/ListeConges';
import ListeCongesEnAttente from './components/ListeCongesEnAttente';
import ListeCongesEmployee from './components/ListeCongesEmplyee';
import DemandeConges from './components/DemandeConges';
import ListeAbsences from './components/ListeAbsences';
import ListeAbsenceEmployee from './components/ListeAbsenceEmployee';
import AffectAbsence from './components/AffectAbsence';
import AffectMission from './components/AffectMission';
import UpdateMission from './components/UpdateMission';
function App() {
  return (
   
      <BrowserRouter>
          <Routes>
            <Route path='/nav' element={<DashboardPaymentsNav></DashboardPaymentsNav>}></Route>
            <Route path='/side' element={<DashboardPaymentsSide></DashboardPaymentsSide>}></Route>
            <Route path='/dash' element={<Dashboard></Dashboard>}></Route>
            <Route path='/HR/mission' element={<ListeMissions></ListeMissions>}></Route>
            <Route path='/HR/missionEmployee' element={<ListeMissionEmployee></ListeMissionEmployee>}></Route>
            <Route path='/HR/mission/affect' element={<AffectMission></AffectMission>}></Route>
            <Route path='/HR/mission/update' element={<UpdateMission></UpdateMission>}></Route>
            <Route path='/HR/conges' element={<ListeConges></ListeConges>}></Route>
            <Route path='/HR/conges/EnAttente' element={<ListeCongesEnAttente></ListeCongesEnAttente>}></Route>
            <Route path='/HR/congesEmployee' element={<ListeCongesEmployee></ListeCongesEmployee>}></Route>
            <Route path='/HR/congesEmployee/demand' element={<DemandeConges></DemandeConges>}></Route>
            <Route path='/HR/absence' element={<ListeAbsences></ListeAbsences>}></Route>
            <Route path='/HR/absence/affect' element={<AffectAbsence></AffectAbsence>}></Route>
            <Route path='/HR/absenceEmployee' element={<ListeAbsenceEmployee></ListeAbsenceEmployee>}></Route>
          </Routes>
      </BrowserRouter>
   
  );
}

export default App;
