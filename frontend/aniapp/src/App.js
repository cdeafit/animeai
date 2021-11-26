import logo from './img/logo.png';
import './App.css';

import { ContextProvider } from './context/Context'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

import Home from './views/home/home'
import Poll from './views/poll/poll'
import RecommendView from './views/recommendView/recommendView';
import Settings from './views/settings/settings';
import MyList from './views/myList/myList'

function App() {
  return (
    <>
    <Router>
      <ContextProvider>
        <Switch>
          <Route exact path="/poll" component={Poll} />
          <PrivateRoute path="/recommendations" component={RecommendView} />
          <PrivateRoute exact path="/settings" component={Settings} />
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/mylist" component={MyList}/>     
        </Switch>
      </ContextProvider>
    </Router>
    
    <div className="footer">      
        <a href="#"><img draggable="false" src={logo}/></a>
        <p>Lorem ipsum</p>
    </div>
    </>
  );
}

export default App;
