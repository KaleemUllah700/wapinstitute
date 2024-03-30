import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './components/homepage'
import Courses from './components/courses'

const App = ()=>{
  return (
      <Router>
        <Routes>
          <Route path="homepage" element={<Homepage />} />
        </Routes>
      </Router>
  )
}

export default App;
