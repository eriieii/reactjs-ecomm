import React from 'react';
import {BrowserRouter as Routes, Route} from 'react-router-dom';


import Main from './layouts/dashboard/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        

          <Route path="/dashboard" component={Main} />

        
      </Routes>
    </div>
  );
}

export default App;