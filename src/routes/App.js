import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import AdmUsuarios from '../containers/AdmUsuarios';
import Usuario from '../containers/Usuario';
import Puntos from '../components/Puntos';
import Gamification from '../components/Gamification';
import Login from '../containers/Login';
import Registro from '../containers/Registro';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={AdmUsuarios} />
        <Route exact path='/Usuario' component={Usuario} />
        <Route exact path='/Puntos' component={Puntos} />
        <Route exact path='/Gamification' component={Gamification} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Registro' component={Registro} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
