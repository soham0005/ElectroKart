import './App.css';
import PreNavbar from './components/PreNavbar';
import {BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './components/AllRoutes.jsx';

function App() {
  return (
    <div className='main'>
      <Router>
        <PreNavbar/>
        <AllRoutes/>
      </Router>
    </div>
    
  );
}

export default App;