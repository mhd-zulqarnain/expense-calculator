import React, { useReducer,useState } from 'react';
import { ACTIONS, reducer } from './AppReducer'

const initState = []
export const ExpenseContext = React.createContext(initState)

export const SummeryContext = React.createContext()

export const ExpenseProvider = ({ children }) => {

    const [transactions, dispatch] = useReducer(reducer, initState)
    const [saving, setSaving] = useState(0)
    const [expense, setExpense] = useState(0)


    const addTransaction = (transaction) => {
        let amount = transaction.amount
        if (amount > 0){
            let tmp = saving + (transaction.amount)
            setSaving(tmp)
        }
        // else
        //     expense -= (Math.abs(amount))
        dispatch({ type: ACTIONS.ADD, payload: transaction })

    }

    const delTransaction = (transaction) => {
        dispatch({ type: ACTIONS.REMOVE, payload: transaction })
    }


    return (<ExpenseContext.Provider value={
        {
            "transactions": transactions,
            addTransaction,
            delTransaction,

        }
    }>
        <SummeryContext.Provider value={
            {
                "expense": expense,
                "saving": saving
            }
        }>
            {children}
        </SummeryContext.Provider>
    </ExpenseContext.Provider >)
}
