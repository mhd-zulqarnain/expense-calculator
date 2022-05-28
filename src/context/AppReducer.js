import React from 'react';

export const ACTIONS = {
    ADD: "add",
    REMOVE: "remove",
    UPDATE: "update"
}
export const reducer = (transactions, action) => {
    switch (action.type) {
        case ACTIONS.ADD:
            return [...transactions, action.payload]
        case ACTIONS.REMOVE:
            return transactions.filter(item => item.id !== action.payload)
        case ACTIONS.UPDATE:
            return transactions.filter(item => item.id !== action.payload)
    }
}

const AppReducer = () => {
    return <div></div>;
}

export default AppReducer;