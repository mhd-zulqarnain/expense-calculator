import './App.css';
import TransactionsHistory from './components/TransactionsHistory';
import AddTransactions from './components/AddTransactions';
import { ExpenseProvider } from './context/TransactionProvider';
import Summery from './components/Summery';

function App() {

  return (
    <div className="App">
      <ExpenseProvider>
        <Summery/>
        <AddTransactions />
        <TransactionsHistory />
      </ExpenseProvider>

    </div>

  );
}

export default App;


{/* <div className="container">
        <AddTransactions dispatch={dispatch} transactions={transactions} />
        {transactions.map(item=>{
          return <Transactions  transactions={transactions} />
        })}
      </div> */}