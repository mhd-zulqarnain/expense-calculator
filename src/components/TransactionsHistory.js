import React, { useContext } from 'react';
import { ExpenseContext } from '../context/TransactionProvider';
import Transaction from './Transaction';

const TransactionsHistory = () => {
    const transactions = useContext(ExpenseContext)
    const history = Array.from(transactions.transactions)
    const transactionAvailable = history.length > 1
    return (
        <div>
            <h2>Transaction history</h2>
            {
                transactionAvailable ?
                    history.map(item => {
                        return <Transaction key={item.id} transaction={item} />
                    }) :
                    <h3>No transaction avaliable</h3>
            }
        </div>);
}


export default TransactionsHistory;