import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { getWorkers, postWorkers } from '../../redux/actions/staffAction';

const ModalEmployess = ({ close}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWorkers())
    }, [])

    const  [employessValue, setEmployessValue] = useState({
      full_name: "string",
      phone: "string",
      email: "",
      date_joined: "string",
        })

        const btnPush = () => {
          dispatch(postWorkers(employessValue))
          close(false)
          dispatch(getWorkers())
        }

    return (
        <div className="modal">
            <div className="modal__body">
                <input type="text" name="full_name" placeholder="Введите ФИО" onChange={(e) => {setEmployessValue({...employessValue, full_name: e.target.value})}}/>
                <input type="number" name="phone" placeholder="Введите телефон" onChange={(e) => {setEmployessValue({...employessValue, phone: e.target.value})}}/>
                <input type="email" name="email" placeholder="Введите почту" onChange={(e) => {setEmployessValue({...employessValue, email: e.target.value})}}/>
                <input type="date" name="date_joined" placeholder="Введите дату" onChange={(e) => {setEmployessValue({...employessValue, date_joined: e.target.value})}}/>
                {
                    employessValue.date_joined == 0 ?
                    <button className='btn-bush'>Отправить</button> :
                    <button onClick={() => btnPush()}>Отправить</button>
                }
            </div>
            <div className='modal__close'>
                <IconButton onClick={() => close(false)}>
                    <CloseIcon fontSize='large' />
                </IconButton>
            </div>
        </div>
    )
};

export default ModalEmployess;