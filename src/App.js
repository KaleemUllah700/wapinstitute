import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TermsConditions from "./components/terms-conditions";

const App = ()=>{
  return (
      <Router>
        <Routes>
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
      </Router>
  )
}

export default App;
