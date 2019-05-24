import React from 'react';
import './styles/App.css';
import { Link, Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';



function App() {
  return (
    <div className="main__page">
      <div className='sideBar'>
        <SideBar />
      </div>
      <Switch>
        <Route path='/' exact component={Page1} />
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
        <Route path='/page3' component={Page3} />
      </Switch>

      {/* <div className="relevant__page">relevant page</div> */}

    </div>
  );
}

export default App;
