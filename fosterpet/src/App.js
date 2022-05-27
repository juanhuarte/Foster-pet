import "./App.css";
import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAnimals } from "./redux/action/index";
import Home from "./components/Home/Home";
import axios from "axios";
import User from "./components/User/User";
import NavBar from "./components/NavBar/NavBar";
import { useValidation } from "./components/CustomHooks/useValidation";
import Favorites from "./components/Favorites/Favorites";
import { getFavorites } from "./redux/action/index";
import AnimalDetail from "./components/AnimalDetail/AnimalDetail";
import EditUser from "./components/EditUser/EditUser";

const { REACT_APP_API } = process.env;

function App() {
  const dispatch = useDispatch();
  const validation = useValidation();
  if (validation) dispatch(getFavorites());

  useEffect(() => {
    dispatch(getAnimals());
  }, []);
  axios.defaults.baseURL = REACT_APP_API;
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signin">
        <User />
      </Route>
      <Route exact path="/animal/:id">
        <AnimalDetail />
      </Route>
      {/* {validation && (
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      )} */}
      <Route
        exact
        path="/favorites"
        render={() => (validation ? <Favorites /> : <Redirect to="/signin" />)}
      />
      <Route
        exact
        path="/edituser"
        render={() => (validation ? <EditUser /> : <Redirect to="/signin" />)}
      />
    </div>
  );
}

export default App;
