import React, { useContext } from 'react';
import { ExpenseContext } from '../context/TransactionProvider';

const Transaction = ({ transaction }) => {
    const { delTransaction } = useContext(ExpenseContext)
    const removeTransaction = () => {
        delTransaction(transaction)
    }
    return (
        <div>
            <p>{transaction.amount}</p>
            <button onClick={removeTransaction}>delete</button>
        </div>);
}


export default Transaction;