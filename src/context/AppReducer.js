
export const ACTIONS = {
    ADD: "add",
    REMOVE: "remove",
    UPDATE: "update"
}
export const reducer = (transactions, action) => {
    switch (action.type) {
        case ACTIONS.ADD: {
            return [...transactions, action.payload]
        }
        case ACTIONS.REMOVE: {
            let id = action.payload.id
            return transactions.filter(item => item.id !== id)
        }
        case ACTIONS.UPDATE:
            return transactions.filter(item => item.id !== action.payload)
        default: {
            return transactions
        }
    }
}
