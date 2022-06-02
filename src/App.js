import './App.css';
import TransactionsHistory from './components/TransactionsHistory';
import AddTransactions from './components/AddTransactions';
import { ExpenseProvider } from './context/TransactionProvider';

function App() {
  
  return (
    <div className="App">
        <ExpenseProvider>
          <TransactionsHistory/>
          <AddTransactions/>
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