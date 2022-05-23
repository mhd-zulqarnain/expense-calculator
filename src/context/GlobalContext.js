import React,{createContext, useState} from 'react'

const initialState = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
];

//Context
const  GlobalContext = useContext(contextValue) = createContext(initialState)

//Provider
export const GlobalContextProvider = ({children})=>{
    const re
    return(
        <GlobalContext.Provider value>
          {children}
        </GlobalContext.Provider>
    )
}