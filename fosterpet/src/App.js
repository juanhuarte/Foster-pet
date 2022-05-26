import "./App.css";
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAnimals } from "./redux/action/index";
import Home from "./components/Home/Home";
import axios from "axios";
import Register from "./components/Register/Register";
const { REACT_APP_API } = process.env;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnimals());
  }, []);
  axios.defaults.baseURL = REACT_APP_API;
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signin">
        <Register />
      </Route>
    </div>
  );
}

export default App;
