import './App.css';
import {Form, Cars} from "./components";
import {useSelector} from "react-redux";

const App = () => {
    const {loading} = useSelector(state => state.cars);
  return (
    <div className="App">
        <Form/>
        <hr/>
        {loading && <h1>Loading........</h1>}
        <Cars/>
    </div>
  );
}

export {App};
