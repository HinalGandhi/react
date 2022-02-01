import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from "./container/home";
import Feature  from "./container/feature";
import About  from "./container/about";
import Contact  from "./container/contact";
import Intro from "./container/intro"

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Routes>
        <Route exact path="/" element={<Intro/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path="/feature" element={<Feature/>} />
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
