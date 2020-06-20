import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Phones from './pages/Phones';
import SinglePhone from './pages/SinglePhone';
import Contact from './pages/Contact';
import Basket from './pages/Basket';
import Home from './pages/Home';
import Modal from './components/Modal';

function App() {
  return (
    <>

      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/phones" component={Phones} />
        <Route exact path="/phones/details" component={SinglePhone} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/basket" component={Basket} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
