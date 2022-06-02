import React, { useContext } from 'react';


export const ExpenseContext = React.createContext()


export const ExpenseProvider = ({ children }) => {

    const transactions = [
        { id: Date.now(), amount: "as" },
        { id: Date.now(), amount: "asd" }
    ]
    return (<ExpenseContext.Provider value={transactions}  >
        {children}
    </ExpenseContext.Provider>)
}
