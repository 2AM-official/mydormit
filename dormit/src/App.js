import Login from "./components/Login";

function App() {
  const addLogin = (task) => {
    console.log(task)
  }
  
  return (
    <div className="container">
      <div className="left-half">
      </div>
      <div className="right-half">
        <h1>Welcome!</h1>
        <Login onAdd={addLogin}/>
        <h5>Already have a Dormit Account?</h5>
      </div>
    </div>
  );
}

export default App;
