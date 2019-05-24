
import React from 'react';
import './styles/App.css';
import { Link, Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import All from './components/All';
import Entertainment from './components/Entertainment';
import Lifestyle from './components/Lifestyle';
import Technology from './components/Technology';
import World from './components/World';
import SocMed from './components/SocMed';
import Main from "./components/Main";
import Header from "./components/Header";



function App() {
  return (
    <div className="main__page">
      <div className='sideBar'>
        <SideBar />
        <div className="margin--left">
          <Header />
          <Main />
        </div>
      </div>
      <Switch>
        <Route path='/' exact component={All} />
        <Route path='/all' exact component={All} />
        <Route path='/entertainment' component={Entertainment} />
        <Route path='/lifestyle' component={Lifestyle} />
        <Route path='/technology' component={Technology} />
        <Route path='/world' component={World} />
        <Route path='/socmed' component={SocMed} />
      </Switch>


    </div>
  );
}

export default App;
