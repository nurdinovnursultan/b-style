import React, { useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { getStockItem } from '../../redux/actions/productionAction';

const StockItem = () => {
    const dispatch = useDispatch()
    const stockItem = useSelector(state => {
        const { productionReducer } = state
        return productionReducer.stockItem
    })

    const catalog = useSelector(state => {
        const { productionReducer } = state
        return productionReducer.catalog
    })

    const { id } = useParams()

    useEffect(() => {
        dispatch(getStockItem(id))
    }, [id])

    return (
        <div className="modal">
            <div className="modal__body">
                <select name="catalog">
                    {
                        catalog.length ? (
                            catalog.map(item => <option key={item.id} value={item.id}>{item.model}</option>)
                        ) : null
                    }
                </select>
                <input type="number" name="quantity" value={stockItem.quantity} />
                <input type="date" name="date" value={stockItem.date} />
                <div className="modal__save-delete">
                    <button>Сохранить</button>
                    <button>Удалить</button>
                </div>
            </div>
            <div className="modal__close">
                <Link to="/stock">
                    <IconButton>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
};

export default StockItem;