import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Dashboard from "./components/DashBoard/Dashboard/Dashboard";
import AllClients from "./components/AllClients/AllClients";
import Login from "./components/Login/Login/Login";

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
          <Route path='/login'>
            <Login></Login>
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
