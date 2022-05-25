import "./App.css";
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./components/Home/Home";
import axios from "axios";
const { REACT_APP_API } = process.env;

function App() {
  axios.defaults.baseURL = REACT_APP_API;
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
