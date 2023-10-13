import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    //const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (val) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (val < totalExpenses) {
            alert("You cannot reduce the budget below what is already allocated");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
            <input type="number" step="10" value={budget} onInput={(event) =>handleBudgetChange(event.target.value)}></input>
        </div>
    );
};
export default Budget;