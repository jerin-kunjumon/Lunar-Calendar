import './App.css';
import SigninSignup from './pages/SigninSignup/SigninSignup';
import Calendar from './pages/Calendar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
                        path="/signinSignup"
                        element={<SigninSignup/>}
                    />
                </Routes >
            </Router>
  );
}

export default App;
