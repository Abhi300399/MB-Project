import {Route,Routes} from "react-router-dom";
import DeafaultHOC from "./HOC/Default.HOC";
import Temp from "./components/temp";

function App() {
  return (
    <>
    <h1 className="text-2xl">Hello</h1>
    
    <DeafaultHOC path="/" exact element={<Temp/>} /> 
    
    </>
  );
}

export default App;
