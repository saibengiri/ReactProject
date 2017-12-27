import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './Components/Dashboard';
import LeaveRequest from './Components/LeaveRequest';
import LeaveHistory from './Components/LeaveHistory';
import Holidays from './Components/Holidays';



ReactDOM.render(
<Router>
    <div>
        
        <Route path='/' component={App }></Route>
        <Route path='/home' component={Dashboard}></Route>

        <Route path='/LeaveRequest' component={LeaveRequest}></Route>
        <Route path='/LeaveHistory' component={LeaveHistory}></Route>
        <Route path='/holidays' component={Holidays}></Route>
        {/* <Route path='/' component={}></Route> */}
    </div>
    
</Router>,document.getElementById('root'));

