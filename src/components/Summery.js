import React, { useContext } from 'react';
import { SummeryContext } from '../context/TransactionProvider';

const Summery = ({ transaction }) => {
    const summery = useContext(SummeryContext)
    return (
        <div>
            <h1>Summery</h1>
            <h5>Expense: {summery.expense}</h5>
            <h5>Saving: {summery.saving}</h5>
        </div>);
}


export default Summery;