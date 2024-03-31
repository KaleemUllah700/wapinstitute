import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Verfication from "./components/verification";

const App = ()=>{
  return (
      <Router>
        <Routes>
          <Route path="verified" element={<Verfication />} />
        </Routes>
      </Router>
  )
}

export default App;
