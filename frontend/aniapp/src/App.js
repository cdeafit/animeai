import logo from './logo.svg';
import './App.css';
import Home from './views/home/home.js'
import {AuthProvider} from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
