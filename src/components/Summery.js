import React, { useContext } from 'react';
import { ExpenseContext } from '../context/TransactionProvider';

const Summery = () => {
    
    const transactions = useContext(ExpenseContext)

    const transactionAmounts =  Array.from(transactions.transactions).map(transaction => transaction.amount);

    const income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)

   const expense = transactionAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)


    console.log("-----")
    console.log(transactionAmounts)
    console.log("-----")
    return (
        <div>
            <h1>Summery</h1>
            <h5>Expense: ${Math.abs(expense)}</h5>
            <h5>Income:  ${income}</h5>
        </div>);
}


export default Summery;