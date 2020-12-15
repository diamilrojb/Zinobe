import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../containers/Login';
import AdmUsuarios from '../containers/AdmUsuarios';
import Usuario from '../containers/Usuario';
import Puntos from '../components/Puntos';
import Gamification from '../components/Gamification';
import Registro from '../containers/Registro';
import Equipos from '../components/Equipos';
import Seniorities from '../components/Seniorities';
import NotFound from '../containers/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/AdmUsuarios' component={AdmUsuarios} />
        <Route exact path='/Usuario' component={Usuario} />
        <Route exact path='/Puntos' component={Puntos} />
        <Route exact path='/Gamification' component={Gamification} />
        <Route exact path='/Registro' component={Registro} />
        <Route exact path='/Equipos' component={Equipos} />
        <Route exact path='/Seniorities' component={Seniorities} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
