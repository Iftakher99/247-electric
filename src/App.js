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

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <Route path='/dashboard/appointment'>
            <Dashboard />
          </Route>
          <Route path='/dashboard/allClients'>
            <AllClients></AllClients>
          </Route>
          <Route path='/dashboard'>
            <MainDashboard />
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/admin'>
            <AdminDashboard />
          </Route>
          <Route path='/addAElectrician'>
            <AddElectrician />
          </Route>
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
