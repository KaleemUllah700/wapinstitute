import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './components/homepage'
import Courses from './components/courses'
import ContactUs from './components/contact-us'
import Verification from './components/verification'
import Login from "./components/login";
import SignUp from "./components/signup";
import Privacy from "./components/privacy";
import RefundPolicy from "./components/refund-policy";

const App = ()=>{
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/software-engineering" element={<Homepage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/verified" element={<Verification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </Router>
  )
}

export default App;
