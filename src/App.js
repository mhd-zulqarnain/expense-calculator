import './App.css';
import Summery from './summery/Summery'
import {useState} from "react";
import ValueContext from "./ValueContext";
function App() {
  let balance = useState(0)
  return (
    <ValueContext.Provider value ={balance}>
    <div className="App">
      <header className="App-header">
        <Summery/>
      </header>
    </div>
    </ValueContext.Provider>

  );
}

export default App;
