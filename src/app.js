import React, { Component } from "react";
import Navbar from './components/Navbar/index';
import Sidebar from './components/sidebar/index';

import './app.css'

import {BrowserRouter  as  Router, Switch, Route} from 'react-router-dom';
import Home from "./pages";

function App(){
    
        return(
            
            <div>
                <Router>
                   <Home/>
                </Router>
                 {/* <Cover />  */}
                {/* <header>Header</header> */}
               
            </div>
        );
    
}
export default App;