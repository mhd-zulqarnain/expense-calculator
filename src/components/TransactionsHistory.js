import React, { useContext } from 'react';
import { ExpenseContext } from '../context/TransactionProvider';
import Transaction from './Transaction';

const TransactionsHistory = () => {
    const transactions = useContext(ExpenseContext)
    const history = Array.from(transactions.transactions) 
    console.log(history)
    return (
        <div>
            {history.map(item => {
                return <Transaction key={item.id} transaction={item} />
            })}
        </div>);
}


export default TransactionsHistory;