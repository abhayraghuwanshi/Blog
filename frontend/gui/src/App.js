import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom'
import CustomLayout from './containers/layout'
import BaseRouter from './components/routes'

function App() {
  return (
 
    <div className="App">
         <Router>
      <CustomLayout>
        <BaseRouter/>
      </CustomLayout>
      </Router>
    </div>
  
  );
}

export default App;
