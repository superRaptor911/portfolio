import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Switch} from 'react-router';

import Home from './pages/Desktop/Home';
import HomeMob from './pages/Mobile/HomeMob';
import useDeviceType from './hooks/deviceType';

const About = lazy(() => import('./pages/Desktop/About'));
const Works = lazy(() => import('./pages/Desktop/Works'));
const Services = lazy(() => import('./pages/Desktop/Services'));
const Contact = lazy(() => import('./pages/Desktop/Contact'));
const WorksMob = lazy(() => import('./pages/Mobile/WorksMob'));
const NavBar = lazy(() => import('./pages/Mobile/NavBar'));
const ServicesMob = lazy(() => import('./pages/Mobile/ServicesMob'));
const ContactMob = lazy(() => import('./pages/Mobile/ContactMob'));
const AboutMob = lazy(() => import('./pages/Mobile/AboutMob'));

function App() {
  const deviceType = useDeviceType();
  if (deviceType === 'mobile') {
    return (
      <BrowserRouter>
        <div className="app">
          <Suspense fallback={<div>Loading...</div>}>
            <NavBar />
          </Suspense>
          <Switch>
            <Route path="/" exact>
              <HomeMob />
            </Route>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/works" component={WorksMob} exact></Route>
              <Route path="/services" component={ServicesMob} exact></Route>
              <Route path="/contact" component={ContactMob} exact></Route>
              <Route path="/about" component={AboutMob} exact></Route>
            </Suspense>
          </Switch>
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/" id="home" exact>
              <Home />
            </Route>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/works" component={Works}></Route>
              <Route path="/services" component={Services}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/about" component={About}></Route>
            </Suspense>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
