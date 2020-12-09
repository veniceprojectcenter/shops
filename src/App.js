import React from 'react';
import MapPage from './pages/mapPage';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import SiteHeader from './components/SiteHeader';
import NotFoundPage from './pages/notFoundPage';

/*All site direction handled here using React Router and displayed pages handled by respective component pages */
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
