import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAnimals } from "./redux/action/index";
import Home from "./components/Home/Home";
import axios from "axios";
import User from "./components/User/User";
import NavBar from "./components/NavBar/NavBar";
import { useValidation } from "./components/CustomHooks/useValidation";
import Favorites from "./components/Favorites/Favorites";
import { getFavorites, getAdoptions } from "./redux/action/index";
import AnimalDetail from "./components/AnimalDetail/AnimalDetail";
import EditUser from "./components/EditUser/EditUser";
import Adoptions from "./components/Adoptions/Adoptions";
import RescueAnimal from "./components/RescueAnimal/RescueAnimal";

const { REACT_APP_API } = process.env;

function App() {
  const dispatch = useDispatch();
  const validation = useValidation();
  if (validation) {
    dispatch(getFavorites());
    dispatch(getAdoptions());
  }

  useEffect(() => {
    dispatch(getAnimals());
  }, []);
  axios.defaults.baseURL = REACT_APP_API;
  const routes = validation ? (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/favorites" element={<Favorites />} />
      <Route exact path="/edituser" element={<EditUser />} />
      <Route exact path="/adoptions" element={<Adoptions />} />
      <Route exact path="/rescue" element={<RescueAnimal />} />
      <Route exact path="/animal/:id" element={<AnimalDetail />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<User />} />
      <Route exact path="/animal/:id" element={<AnimalDetail />} />
      <Route path="*" element={<Navigate to="/signin" />} />
    </Routes>
  );

  return (
    <div className="App">
      <NavBar />
      <div>{routes}</div>
      {/* <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signin">
        <User />
      </Route>
      <Route exact path="/animal/:id">
        <AnimalDetail />
      </Route>
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
      <Route
        exact
        path="/adoptions"
        render={() => (validation ? <Adoptions /> : <Redirect to="/signin" />)}
      />
      <Route
        exact
        path="/rescue"
        render={() =>
          validation ? <RescueAnimal /> : <Redirect to="/signin" />
        }
      /> */}
    </div>
  );
}

export default App;
