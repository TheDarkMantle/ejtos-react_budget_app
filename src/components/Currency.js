import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {currencies} = useContext(AppContext);

  <select className="currency-select">
    {currencies.map((currency) => (
        <option value={currency.symbol}>{currency.symbol} {currency.name}</option>
    ))}
  </select>
  
}

export default Currency;
