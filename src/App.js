import './App.css';
import Transactions from './components/Transactions';
import AddTransactions from './components/AddTransactions';
import { useState, useReducer } from 'react'
import reducer from './context/AppReducer'

function App() {
  const tmp = { id: Date.now(), amount: "as" }
  const arr = [
    tmp, tmp
  ]
  const [transactions, dispatch] = useReducer(reducer, arr)

  console.log(transactions)
  return (
    <div className="App">
      <div className="container">
        {/* <AddTransactions dispatch={dispatch} transactions={transactions} /> */}
        <Transactions transactions={transactions} dispatch={dispatch} />
      </div>
    </div>

  );
}

export default App;
