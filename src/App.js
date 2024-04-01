import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Privacy from "./components/privacy";

const App = ()=>{
  return (
      <Router>
        <Routes>
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
  )
}

export default App;
