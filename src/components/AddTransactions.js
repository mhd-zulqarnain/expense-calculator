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
        setTitle("")
    }

    return <>
        <h1>Add transaction</h1>
        <form onSubmit={submitTransaction}
            className="form-group"
            novalidate>
            <label htmlFor="validationtitle">Title</label>
            <input type="text"
                value={title}
                id="validationtitle"
                required
                onChange={(e) => setTitle(e.target.value)} />

            <div className="invalid-feedback">
                Please provide a valid title.
            </div>
            <label htmlFor="validateAmount">Amount</label>
            <input type="number"
                value={transaction}
                required
                id="validateAmount"
                onChange={(e) => setTransaction(e.target.value)} />
            <div className="invalid-feedback">
                Please provide a valid amount.
            </div>

            <button type="submit" className="btn btn-default">Submit</button>

        </form>
    </>;
}

export default AddTransactions;