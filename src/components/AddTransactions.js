import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/TransactionProvider';

const AddTransactions = () => {
    const { addTransaction } = useContext(ExpenseContext)
    const [transaction, setTransaction] = useState("")
    const [title, setTitle] = useState("")

    const submitTransaction = (e) => {
        e.preventDefault()
        addTransaction({ id: Date.now(), amount: parseInt(transaction), title: title })
        setTransaction("")
    }

    return <>
        <h1>Add transaction</h1>
        <form onSubmit={submitTransaction}>
            <label>Title</label>
            <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

            <label>Amount</label>
            <input type="number"
                value={transaction}
                onChange={(e) => setTransaction(e.target.value)} />
            <br />
            <input type="submit" value="Submit" />

        </form>
    </>;
}

export default AddTransactions;