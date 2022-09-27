import React, { useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { getSalesItem } from '../../redux/actions/staffAction';

const SalesItem = () => {
    const dispatch = useDispatch()
    const salesItem = useSelector(state => {
        const { workersReducer } = state
        return workersReducer.salesItem
    })

    const { id } = useParams()

    useEffect(() => {
        dispatch(getSalesItem(id))
    }, [id])

    return (
        <div className="modal">
            <div className="modal__body">
                <select name="catalog">
                </select>
                <input type="number" name="pairs_shoes" value={salesItem.pairs_shoes} />
                <input type="number" name="price" value={salesItem.price} />
                <div className="modal__save-delete">
                    <button>Сохранить</button>
                    <button>Удалить</button>
                </div>
            </div>
            <div className="modal__close">
                <Link to="/sales">
                    <IconButton>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
};

export default SalesItem;