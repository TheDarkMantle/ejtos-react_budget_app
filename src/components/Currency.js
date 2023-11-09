import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext'; 


const Currency = (props) => {
    //const {currency} = useContext(AppContext);
    const {dispatch} = useContext(AppContext);

    const changeCurrency = (props) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: props,
        })
    }

    return (
        <div>
      <select className={`alert alert-success`} name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)}>
        <option value="£">Currency (£ Pound)</option>
        <option value="$">Currency ($ Dollar)</option>
        <option value="€">Currency (€ Euro)</option>
        <option value="₹">Currency (₹ Rupee)</option>
      </select>	
      </div>
	);
};

export default Currency;
