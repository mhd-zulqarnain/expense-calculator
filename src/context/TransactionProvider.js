import React, { useReducer } from 'react';
import {ACTIONS ,reducer} from './AppReducer'

const initState = [{ id: Date.now(), amount: "transaction" }]
export const ExpenseContext = React.createContext(initState)

export const ExpenseProvider = ({ children }) => {

    const [transactions, dispatch] = useReducer(reducer, initState)

    const addTransaction = (expense) => {
        dispatch({ type: ACTIONS.ADD, payload: { id: Date.now(), amount: "transaction" } })

        // dispatch({ type: ACTIONS.ADD, payload: expense })
    }


    return (<ExpenseContext.Provider value={
        {
            "transactions": transactions,
            addTransaction
        }
    }>
        {children}
    </ExpenseContext.Provider >)
}
