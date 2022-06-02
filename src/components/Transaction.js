import React from 'react';

const Transaction = ({transaction}) => {
    return (
        <div>
            <h1>{transaction.amount}</h1>
        </div>);
}


export default Transaction;