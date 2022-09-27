import React, { useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { getWorker } from '../../redux/actions/staffAction';

const Employee = () => {
    const dispatch = useDispatch()
    const employee = useSelector(state => {
        const { workersReducer } = state
        return workersReducer.worker
    })

    const { id } = useParams()

    useEffect(() => {
        dispatch(getWorker(id))
    }, [id])

    return (
        <div className="modal">
            <div className="modal__body">
                <input type="text" name="full_name" value={employee.full_name} />
                <input type="text" name="phone" value={employee.phone} />
                <input type="email" name="email" value={employee.email} />
                <input type="text" name="job_title" value={employee.job_title} />
                <input type="date" name="date_joined" value={employee.date_joined} />
                <div className="modal__save-delete">
                    <button>Сохранить</button>
                    <button>Удалить</button>
                </div>
            </div>
            <div className="modal__close">
                <Link to="/employees">
                    <IconButton>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
};

export default Employee;