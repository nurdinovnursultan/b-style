import React, { useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogId } from '../../redux/actions/productionAction';

const CatalogItem = () => {
    const dispatch = useDispatch()
    const catalogItem = useSelector(state => {
        const { productionReducer } = state
        return productionReducer.catalogID
    })

    const { id } = useParams()

    useEffect(() => {
        dispatch(getCatalogId(id))
    }, [id])

    return (
        <div className="modal">
            <div className="modal__body">
                <input type="text" name="model" value={catalogItem.model} />
                <input type="text" name="color" value={catalogItem.color} />
                <input type="number" name="size_from" value={catalogItem.size_from} />
                <input type="number" name="size_to" value={catalogItem.size_to} />
                <div className="modal__save-delete">
                    <button>Сохранить</button>
                    <button>Удалить</button>
                </div>
            </div>
            <div className="modal__close">
                <Link to="/catalog">
                    <IconButton>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
};

export default CatalogItem;