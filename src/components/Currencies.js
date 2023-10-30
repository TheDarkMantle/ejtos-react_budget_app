import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext'; 
import { Currency } from './Currency';

const Currencies = (props) => {
    const {currencies} = useContext(AppContext);
    const {dispatch} = useContext(AppContext);

    const changeCurrency = (props) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: props,
        })
    }

  <select className="currency-select" onClick={changeCurrency}>
    {currencies.map((currency) => (
        <Currency id={currency.id} name={currency.name} />
    ))}
  </select>
  
}

export default Currencies;
