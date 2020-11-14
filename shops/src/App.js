import React from 'react';
import MapPage from './pages/mapPage';
import ReportsAndStatsPage from './pages/reportsStatsPage';
import { BrowserRouter as Router, Switch,Route,Redirect} from "react-router-dom";
import SiteHeader from './components/SiteHeader';
import NotFoundPage from './pages/notFoundPage';

function App() {
  return(
    <div className="content">
      <SiteHeader />
      <Router>
        <Switch>
          <Route exact path="/" component={MapPage}/>
          <Route exact path="/reportsandstats" component={ReportsAndStatsPage}/>
          <Route exact path="/404"component={NotFoundPage}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    </div>
  );
  
}
export default App;
