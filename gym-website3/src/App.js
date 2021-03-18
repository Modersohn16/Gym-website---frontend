import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignUp2 from './components/pages/SignUp2';
import Gyms from './components/pages/GymList';
import Pricing from './components/pages/Pricing';
import Classes from './components/pages/Classes';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gyms' component={Gyms} />
          <Route path='/classes' component={Classes} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
