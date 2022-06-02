import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/TransactionProvider';

const AddTransactions = () => {
    const {addTransaction} = useContext(ExpenseContext)
    const [transaction, setTransaction] = useState("")

    const submitTransaction = (e) => {
        e.preventDefault()
        addTransaction( { id: Date.now(), amount: transaction } )
        // dispatch({ type: ACTIONS.ADD, payload: { id: Date.now(), amount: transaction } })
        setTransaction("")
    }

    return <>
        <h1>Add transaction</h1>
        <form onSubmit={submitTransaction}>
            <input type="text"
                value={transaction}
                onChange={(e) => setTransaction(e.target.value)} />
        </form>
    </>;
}

export default AddTransactions;