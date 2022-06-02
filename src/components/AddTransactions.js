import React from 'react';
import { useState } from 'react'
import { ACTIONS } from '../context/AppReducer'
const AddTransactions = ({ dispatch, transactions }) => {

    const [transaction, setTransaction] = useState("")

    const submitTransaction = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD, payload: { id: Date.now(), amount: transaction } })
        setTransaction("")
        console.log(transactions)
    }

    console.log(transactions)

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