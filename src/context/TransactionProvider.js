import React, { useReducer } from 'react';
import { ACTIONS, reducer } from './AppReducer'

const initState = []
export const ExpenseContext = React.createContext(initState)


export const ExpenseProvider = ({ children }) => {

    const [transactions, dispatch] = useReducer(reducer, initState)


    const addTransaction = (transaction) => {
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
        {children}
    </ExpenseContext.Provider >)
}
