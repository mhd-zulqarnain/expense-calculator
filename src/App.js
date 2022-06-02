import './App.css';
import Transactions from './components/Transactions';
import AddTransactions from './components/AddTransactions';
import { useState, useReducer } from 'react'
import reducer from './context/AppReducer'

function App() {
  const tmp = { id: Date.now(), amount: "as" }
  const arr = [
    { id: Date.now(), amount: "as" },  { id: Date.now(), amount: "asd" }
  ]
  const [transactions, dispatch] = useReducer(reducer, arr)

  return (
    <div className="App">
      <div className="container">
        <AddTransactions dispatch={dispatch} transactions={transactions} />
        {transactions.map(item=>{
          return <Transactions  transactions={transactions} />
        })}
      </div>
    </div>

  );
}

export default App;
