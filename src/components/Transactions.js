import React, { useContext } from 'react';
import { ACTIONS } from '../context/AppReducer'
import { ExpenseContext } from '../context/TransactionProvider';

const Transactions = ({ transaction, dispatch }) => {
    const transactions = useContext(ExpenseContext)

    return (
        <div>

            {transactions.map(item => {
                return <h1>{item.amount}</h1>
            })}

        </div>);
}


export default Transactions;