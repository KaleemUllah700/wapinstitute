import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./components/signup";

const App = ()=>{
  return (
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
  )
}

export default App;
