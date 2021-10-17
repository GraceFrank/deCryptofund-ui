import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import DonatePage from "./Pages/Donation/DonationPage";
import AccountProvider from "./context/AccountContext";
import DashboardPage from "./Pages/Dashboard/DashboardPage";

export default function App() {
  return (
    <AccountProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/donate" component={DonatePage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </Router>
    </AccountProvider>
  );
}
