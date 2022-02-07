import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Form from "./Form";
import Mess from "./Mess"
import ListOfMess from "./ListOfMess"
import { BrowserRouter } from "react-router-dom";
import { Route , Switch } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Form} />
    <Route path="/mess" component={Mess} />
    <Route path="/messes/:id" component={ListOfMess} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);



