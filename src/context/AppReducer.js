import React from 'react';

export const ACTIONS = {
    ADD: "add",
    REMOVE: "remove",
    UPDATE: "update"
}
export const reducer = (transactions, action) => {
    switch (action.type) {
        case ACTIONS.ADD:{
        console.log( action.payload)
        console.log( action.type)

            return [...transactions, action.payload]
        }
        case ACTIONS.REMOVE:
            return transactions.filter(item => item.id !== action.payload)
        case ACTIONS.UPDATE:
            return transactions.filter(item => item.id !== action.payload)
        default:{
            console.log( action.payload)
            console.log( action.type)  
        }
    }
}

const AppReducer = () => {
    return <div></div>;
}

export default AppReducer;