import Topbar from "./Components/topbar/Topbar.js";
import Homepage from "./Pages/HomePage/Homepage.js";
import { BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
      <Topbar/>
      <Homepage/>
      </Router>
    </div>
  );
}

export default App;
