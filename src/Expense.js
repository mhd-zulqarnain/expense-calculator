import './App.css'

function Expense(props) {
    let isExpense = props.expense.value <-1
    let border =`${isExpense? 'expense':'income'}`
    return (
      <div className={border}>
        Balance={props.expense.value}
      <br/>  Name: {props.expense.name}
        </div>
        
    );
  }

  export default Expense