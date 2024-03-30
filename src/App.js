import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Courses from "./components/courses";
const App = ()=>{
  return (
      <Router>
        <Routes>
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Router>
  )
}

export default App;
