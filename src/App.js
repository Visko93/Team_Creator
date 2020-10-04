import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";

import Header from "./components/Navigation/Header";
import Footer from "./components/Footer";

import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <>
      <Header />
      <Router>
        <CssBaseline />
        <Routes />
      </Router>
      <Footer />
      </>
    </div>
  );
}

export default App;
