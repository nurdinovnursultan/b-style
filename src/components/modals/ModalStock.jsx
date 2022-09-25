import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { getStock, postStock } from '../../redux/actions/productionAction';

const ModalStock = ({ close}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStock())
    }, [])

    const  [stockValue, setStockValue] = useState({
        quantity: "string",
        date: "string",
        catalog: "",
    
        })

        const btnPush = () => {
          dispatch(postStock(stockValue))
          close(false)
          dispatch(getStock())
        }

    return (
        <div className="modal">
            <div className="modal__body">
                <input type="date" name="date" placeholder="Введите дату" onChange={(e) => {setStockValue({...stockValue, date: e.target.value})}}/>
                <input type="quantity" name="quantity" placeholder="Введите дату" onChange={(e) => {setStockValue({...stockValue, quantity: e.target.value})}}/>
                <input type="number" name="quantity" placeholder="Введите количество" />,
                <input type="date" name="date" />,
                {
                    stockValue.date_joined == 0 ?
                    <button className='btn-bush'>Отправить</button> :
                    <button onClick={() => btnPush()}>Отправить</button>
                }
            </div>
            <div className='modal__close'>
                <IconButton onClick={() => close(false)}>
                    <CloseIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
};

export default ModalStock;