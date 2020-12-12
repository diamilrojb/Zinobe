import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdmUsuarios from '../containers/AdmUsuarios';
import Usuario from '../containers/Usuario';
import Puntos from '../components/Puntos';
import Gamification from '../components/Gamification';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={AdmUsuarios} />
      <Route exact path='/Usuario' component={Usuario} />
      <Route exact path='/Puntos' component={Puntos} />
      <Route exact path='/Gamification' component={Gamification} />
    </Switch>
  </BrowserRouter>
);

export default App;
