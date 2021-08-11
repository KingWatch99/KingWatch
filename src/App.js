import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import {WatchList} from "./components/WatchList";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import { Home } from "./components/Home";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";
import {Watch} from "./components/Watch";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/KingWatch">
            <Home />
          </Route>
          <Route exact path="/watchList">
            <WatchList />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/watch/:id/:movieName">
            <Watch />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
