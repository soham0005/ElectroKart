import './App.css';
import PreNavbar from './components/PreNavbar';
import {BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './components/AllRoutes.jsx';
import Heading from './components/Heading.jsx';
import AccessoriesMenu from './components/AccessoriesMenu.jsx';

function App() {
  return (
    
    <Router>
      <PreNavbar/>
    <AllRoutes/>
    </Router>
  );
}

export default App;