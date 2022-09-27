import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { postCatalog, getCatalog } from '../../redux/actions/productionAction';

const ModalCatalog = ({ close}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCatalog())
    }, [])

    const  [catalogValue, setCatalogValue] = useState({
        model: "string",
        color: "string",
        size_from: 0,
        size_to: 0,
        articul: 0
        })

        const btnPush = () => {
            dispatch(postCatalog(catalogValue))
            close(false)
            dispatch(getCatalog())
        }

    return (
        <div className="modal">
            <div className="modal__body">
                <input type="text" name="model" placeholder="Введите модель" onChange={(e) => setCatalogValue({...catalogValue, model: e.target.value})}/>
                <input type="text" name="color" placeholder="Введите цвет"  onChange={(e) => setCatalogValue({...catalogValue, color: e.target.value})}/>
                <input type="number" name="size_from" placeholder="Введите размер от"  onChange={(e) => setCatalogValue({...catalogValue, size_from: e.target.value})}/>
                <input type="number" name="size_to" placeholder="Введите размер до"  onChange={(e) => setCatalogValue({...catalogValue, size_to: e.target.value})}/>
                <input type="text" name="articul" placeholder="Введите артикул"  onChange={(e) => setCatalogValue({...catalogValue, articul: e.target.value})}/>
                {
                    catalogValue.articul == 0 ?
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

export default ModalCatalog;