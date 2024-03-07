import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const {dispatch} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState();

    
    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        })
        setNewCurrency(newCurrency)
    }

    return (
        <div className='alert alert-secondary' id="currency-dd"> Currency {
      <select name="CurrencyDropdown" id="CurrencyDropdown" onChange={event=>changeCurrency(event.target.value)} className="custom-dropdown" >
        <option value="$" >Dollar ($) </option>
        <option value="£" selected="selected">Pound(£)</option>
        <option value="€" >Euro(€)</option>
        <option value="₹" >Rupee(₹)</option>
      </select>	
      }	
    </div>
    );
};


export default CurrencyDropdown;
