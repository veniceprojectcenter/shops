import React from 'react';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import '../css/siteLayout.css';
import SiteHeader from './components/SiteHeader';
import MapPage from './pages/mapPage';
import NotFoundPage from './pages/notFoundPage';

/**
 *                                               Venice Shops Application 
 * App()
 * All site direction handled here using React Router.
 * All displayed pages handled by their respective component pages.
 * 
 */
function App() {
  return(
    <div className="content">
      <SiteHeader />
      <Router>
        <Switch>
          <Route exact path="/" component={MapPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
  
}
export default App;
