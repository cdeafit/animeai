import logo from './img/logo.png';
import './App.css';

import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

import Home from './views/home/home'
import Poll from './views/poll/poll'
import ReccomendView from './views/reccomendView/reccomendView';
import Settings from './views/settings/settings';

function App() {
  return (
    <>
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/poll" component={Poll} />
          <PrivateRoute path="/reccomendations" component={ReccomendView} />
          <PrivateRoute exact path="/settings" component={Settings} />
          <Route exact path="/" component={Home} />          
        </Switch>
      </AuthProvider>
    </Router>
    
    <div className="footer">      
        <a href="#"><img draggable="false" src={logo}/></a>
        <p>Lorem ipsum</p>
    </div>
    </>
  );
}

export default App;
