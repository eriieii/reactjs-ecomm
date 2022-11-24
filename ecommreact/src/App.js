import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Master from './layouts/dashboard/Master';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/dashboard/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          {/* <Route path="/dashboard" name="Dashboard" render={(props) => <Master {...props} /> } />    */}
          <Route path='/dashboard' element={<Master />}/>         

          <Route exact path='/dashboard/index' element={<Dashboard />} />
          <Route exact path='/dashboard/profile' element={<Profile />} />
        </Routes>  
      </Router>  
      
    </div>
  );
}

export default App;