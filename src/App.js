import Navbar from "./Components/js/Navbar";
import Fcontainer from "./Components/js/Fcontainer";
import Container from "./Components/js/Container";

import Searchbar from  "./Components/js/Searchbar";
import Footer from  "./Components/js/Footer";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Searchbar/>
      <Router>
      <Switch>
        <Route path="/" exact component={Container} />
        <Route path="/f" exact component={Fcontainer} />

      </Switch>
    </Router>
      
      
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
