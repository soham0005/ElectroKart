import "./App.css";
import PreNavbar from "./components/PreNavbar";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./components/AllRoutes.jsx";
import ScrollToTop from "./components/Scrolltotop.jsx";
function App() {
  return (
    <Router>
      <PreNavbar />
      <ScrollToTop />
      <AllRoutes />
    </Router>
  );
}

export default App;
