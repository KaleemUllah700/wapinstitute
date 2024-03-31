import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './components/homepage'
import Courses from './components/courses'
import ContactUs from './components/contact-us'

const App = ()=>{
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/software-engineering" element={<Homepage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
  )
}

export default App;
