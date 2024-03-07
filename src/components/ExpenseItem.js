import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: "RED_EXPENSE",
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <button onClick={event=> increaseAllocation(props.name)} style={{border: "none"}}>
                <img width="20px" height="20px" src="https://p7.hiclipart.com/preview/705/885/153/symbol-plus-and-minus-signs-clip-art-plus-symbol.jpg" style={{border: "none"}} alt="Plus"></img>

            </button></td>
        <td>
            <button onClick={event=>decreaseAllocation(props.name)} style={{border: "none"}}>
                <img width="20px" height="20px" src="https://tsc.uk.net/wp-content/uploads/No-entry-tsc616tp.png" style={{border: "none"}} alt="Minus"></img>

            </button>
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
