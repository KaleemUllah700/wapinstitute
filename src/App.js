import "font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/shared/layout";

const App = ()=>{
  return (
      <Router>
        <Routes>
          <Route path="/"  element={<Layout />} />
        </Routes>
      </Router>
  )
}

export default App;
