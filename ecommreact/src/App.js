import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Master from './layouts/dashboard/Master';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Master/>}/>  
        </Routes>  
      </Router>  
      
    </div>
  );
}

export default App;