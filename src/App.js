import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ContactUs from "./components/contact-us";

const App = ()=>{
  return (
      <Router>
        <Routes>
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
  )
}

export default App;
