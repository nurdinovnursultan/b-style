import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getSemiFinishedId } from '../../redux/actions/productionAction';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const SemiFinishedDetails = () => {
    const dispatch = useDispatch()
    const semiFinished = useSelector(state => {
        const { productionReducer } = state
        return productionReducer.semiFinishedID
    })

    const countries = useSelector(state => {
        const { productionReducer } = state
        return productionReducer.countries
    })

    const { id } = useParams()

    useEffect(() => {
        dispatch(getSemiFinishedId(id))
    }, [id])

    return (
        <div className="modal">
            <div className="modal__body">
                <input type="text" name="title" value={semiFinished.title} />
                <input type="number" name="quantity" value={semiFinished.quantity} />
                <select name="country">
                    {
                        countries.results.map(item => <option key={item.id} value={item.id}>{item.title}</option>)
                    }
                </select>
                <div className="modal__save-delete">
                    <button>Сохранить</button>
                    <button>Удалить</button>
                </div>
            </div>
            <div className="modal__close">
                <Link to="/semifinished">
                    <IconButton>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
};

export default SemiFinishedDetails;