import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Grid from "material-ui/Grid";

import { Switch, Route } from "react-router";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/header";

import RegisterPage from "./pages/register";
import SubmissionPage from "./pages/submission";

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <Header />
      <Grid
        style={{ margin: "40px auto", width: "90%", maxWidth: "1600px" }}
        container
        spacing={0}
      >
        <Grid item xs={12}>
          <Switch>
            <Route exact path="/" component={() => <h1>Home</h1>} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/submission" component={SubmissionPage} />
            <Route component={() => <h1>Not Found</h1>} />
          </Switch>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
