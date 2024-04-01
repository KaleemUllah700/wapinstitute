import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RefundPolicy from "./components/refund-policy";

const App = ()=>{
  return (
      <Router>
        <Routes>
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </Router>
  )
}

export default App;
