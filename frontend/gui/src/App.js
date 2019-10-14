import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom'
import CustomLayout from './containers/layout'
import BaseRouter from './components/routes'
import accountSetting from './components/accountSetting';

function App() {
  return (
 
      <div className="App">
        <Router>
         
            <CustomLayout>
            <accountSetting/>
              <BaseRouter/>
            </CustomLayout>
        </Router>
        </div>
  
  );
}

export default App;
