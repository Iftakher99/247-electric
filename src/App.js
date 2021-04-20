import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Dashboard from "./components/DashBoard/Dashboard/Dashboard";
import AllClients from "./components/AllClients/AllClients";
import Login from "./components/Login/Login/Login";
import AdminDashboard from "./components/DashBoard/Admin/AdminDashboard/AdminDashboard";
import MainDashboard from "./components/DashBoard/MainDashboard/MainDashboard";
import AddElectrician from "./components/AddElectrician/AddElectrician";
import Review from "./components/DashBoard/Review/Review";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/appointment'>
            <Appointment />
          </PrivateRoute>
          <PrivateRoute path='/dashboard/appointment'>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path='/dashboard/allClients'>
            <AllClients />
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <MainDashboard />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/admin'>
            <AdminDashboard />
          </PrivateRoute>
          <PrivateRoute path='/addAElectrician'>
            <AddElectrician />
          </PrivateRoute>

          <PrivateRoute path='/review'>
            <Review />
          </PrivateRoute>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
