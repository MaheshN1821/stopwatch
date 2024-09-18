import "./App.css";
import Stopwatch from "./components/stopWatch";

function App() {
  return (
    <div className="container">
      <h1 className="logotxt">StopWatch</h1>
      <div className="backgroundImg">
        <Stopwatch />
      </div>
    </div>
  );
}

export default App;
