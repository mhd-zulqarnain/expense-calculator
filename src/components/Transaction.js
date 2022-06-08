import React, { useContext } from 'react';
import { ExpenseContext } from '../context/TransactionProvider';

const Transaction = ({ transaction }) => {
    const { delTransaction } = useContext(ExpenseContext)
    const removeTransaction = () => {
        delTransaction(transaction)
    }
    const sign = (transaction.amount) > 0 ? "" : "-"
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <div className="card-body">
                <h2 className="card-title">{transaction.title}</h2>
                <p className="card-text">Transaction Amount :{sign}${Math.abs(transaction.amount)}</p>
                <button onClick={removeTransaction} className="btn btn-primary" >Delete Transaction</button>
            </div>
        </div>
    );
}

export default Transaction;
