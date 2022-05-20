import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const addLogin = (task) => {
    console.log(task)
  }
  
  return (
    <div className="container">
      <div className="left-half">
      </div>
      <div className="right-half">
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup/>} onAdd={addLogin}/>
            <Route path="/login" element={<Login/>} />
          </Routes>
        </Router>    
      </div>
    </div>
  );
}

export default App;
