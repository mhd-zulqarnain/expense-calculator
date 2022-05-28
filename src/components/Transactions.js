import React from 'react';
import { ACTIONS } from '../context/AppReducer'
const Transactions = ({ transaction, dispatch }) => {
    const amount = () => {
        // if (transaction.amount === null)
        //     " "
        // else
        //     transaction.amount
    }
    return <div>
        <h1>{"amount"}</h1>
        <button
            onClick={(e) => dispatch({ type: ACTIONS.REMOVE, payload: transaction.id })}
        >delete</button>
    </div>;
}


export default Transactions;