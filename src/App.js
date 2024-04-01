import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/login";
const App = ()=>{
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  )
}

export default App;
