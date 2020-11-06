import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom"
import TvShowDetailedComponent from "./app/components/tvShowDetailed/tvShowDetailed";
import TvShowListUI from "./app/container/tvShowList/tvShowList";
import HeaderComponent from "./app/components/header/header";
import FooterComponent from "./app/components/footer/footer";
import PageNotFound from "./app/container/pageNotFound/PageNotFound"
import "./assets/scss/style.scss"

const App = (rest: any) => (
  <Router>
    <main className="container-fluid ml-0 px-0">
      <HeaderComponent {...rest} />
      <Switch>
      <Route exact={true} path='/'  component={TvShowListUI} />/
        <Route exact={true}
          path="/tvshow-list"
          component={TvShowListUI}
        />
        <Route exact
          path="/tvshow-detailed/:id"
          component={TvShowDetailedComponent}
        />
       <Route path='*' exact={true} component={PageNotFound} />
      </Switch>
      <FooterComponent />
    </main>
  </Router>
);
export default App;