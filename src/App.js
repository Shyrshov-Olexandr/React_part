import './App.css';
import {ClassComponent} from "./components/ClassComponent";
import {useState} from "react";

function App() {
  const [flag,setFlag] = useState(true);
  return (
    <div className="App">
      {
        flag && <ClassComponent name = {'max'}/>
      }
      <button onClick={() => setFlag(prev => !prev)}>Hide</button>
    </div>
  );
}

export default App;
