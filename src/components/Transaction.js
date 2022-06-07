import React, { useContext } from 'react';
import { ExpenseContext } from '../context/TransactionProvider';

const Transaction = ({ transaction }) => {
    const { delTransaction } = useContext(ExpenseContext)
    const removeTransaction = () => {
        delTransaction(transaction)
    }
    const sign = (transaction.amount) > 0 ? "" : "-"
    return (
        <div>
            <br /> 
            <b>{transaction.title}</b> {sign}${Math.abs(transaction.amount)} <button onClick={removeTransaction}>delete</button>
        </div>);
}


export default Transaction;