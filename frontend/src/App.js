import './App.css';
import PreNavbar from './components/PreNavbar';
import {BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './components/AllRoutes.jsx';

function App() {
  return (
    <Router>
      <PreNavbar/>
    <AllRoutes/>
    </Router>
  );
}

export default App;
