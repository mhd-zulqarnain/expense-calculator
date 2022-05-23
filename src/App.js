import './App.css';
import { Header } from './components/Header';
import { Expenses } from './components/Expenses';
import { Balance } from './components/Balance';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Balance/>
        <Expenses/>
        <TransactionList/>
        <AddTransaction/>
      </div> 
    </div>

  );
}

export default App;
