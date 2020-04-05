import React from 'react';
import './App.css';
import './components/documents';
import Header from "./components/header";
import Documents from "./components/documents";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import DocumentAdd from './components/document.add'
import { ProtectedRoute } from './protected.route'
import LandingPage from './components/landing.page'
import RegistrationPage from './components/registration.page'
import DocumentItem from './components/document.item'

function App() {
  return (
      <Router>
          <Header/>
          <Switch>
          <Route path="/login" exact component={LandingPage}/>
          <Route path="/register" exact component={RegistrationPage}/>
          <ProtectedRoute path="/" exact component={Documents} timestamp ={new Date().toString()} />
          <ProtectedRoute path="/add" component={DocumentAdd}/>
          <ProtectedRoute path="/documents/:id" component={DocumentItem}/>

          </Switch>
      </Router>
  );
}

export default App;
