import './App.css';
import Summery from './summery/Summery'
import Notes from './notes/Notes'
import {useState} from "react";
import GlobalContext from "./ValueContext";
function App() {
  let intialExpense = 0
  let intialBalance = 1000

  let balance = {expense: intialExpense , balance: intialBalance}

  let state = useState(balance)
  let list = useState([])
  return (
    <GlobalContext.Provider value ={{summery:state , data:list}}>
    <div className="App">
      <header className="App-header">
        <Summery/>
        <Notes/>
      </header>
    </div>
    </GlobalContext.Provider>

  );
}

export default App;
