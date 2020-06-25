import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ApplicationFormPage from "./ApplicationFormPage";
import LoginPage from "./LoginPage";
import CreateTripPage from "./CreateTripPage";
import ListTripsPage from "./ListTripsPage";
import TripDetailsPage from "./TripDetailsPage ";
import DashBoardPage from "./DashBoardPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/application-form">
          <ApplicationFormPage></ApplicationFormPage>
        </Route>
        <Route exact path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route exact path="/dashboard">
          <DashBoardPage></DashBoardPage>
        </Route>
        <Route exact path="/dashboard/create">
          <CreateTripPage></CreateTripPage>
        </Route>
        <Route exact path="/dashboard/list">
          <ListTripsPage></ListTripsPage>
        </Route>
        <Route exact path="/dashboard/details">
          <TripDetailsPage></TripDetailsPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
