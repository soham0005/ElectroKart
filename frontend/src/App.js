import './App.css';
import PreNavbar from './components/PreNavbar';
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AllRoutes from './components/AllRoutes.jsx';
import SignupForm from './components/User/Signup.jsx';
import SignInPage from './components/User/Login.jsx';

function App() {
  return (
    <Router>
      <PreNavbar/>
    <AllRoutes/>
    <Routes>
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/signup" element={<SignupForm/>} />
      <Route path="/login" element={<SignInPage/>} />
    </Routes>
    </Router>
  );
}

export default App;
