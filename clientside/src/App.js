import './App.css';
import SigninSignup from './pages/SigninSignup/SigninSignup';
import Calendar from './pages/Calendar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/SigninSignup/Signup';
import Login from './pages/SigninSignup/Login';

function App() {

  return (
    <Router>
                <Routes >
                    <Route
                        exact
                        path="/"
                        element={<Calendar/>}
                    />
 
                    <Route
                        exact
                        path="/Signup"
                        element={<Signup/>}
                    />
                    <Route
                        exact
                        path="/Login"
                        element={<Login/>}
                    />
                </Routes >
            </Router>
  );
}

export default App;
