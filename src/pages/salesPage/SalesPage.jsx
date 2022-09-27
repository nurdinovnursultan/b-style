import React, { useEffect, useState } from 'react';
import SalesTable from '../../components/salesTable/SalesTable';
import Pagination from '../../components/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getSalesJournal } from '../../redux/actions/staffAction';
import { Outlet, useLocation } from 'react-router-dom';
import Modal from '../../components/modal/Modal';

const SalesPage = ({ status }) => {
    const [modal, setModal] = useState(false);
    const location = useLocation()

    const dispatch = useDispatch()
    const sales = useSelector(state => {
        const { workersReducer } = state
        return workersReducer.sales
    })

    useEffect(() => {
        dispatch(getSalesJournal())
    }, [])

    return (
        <div className={status ? "container" : "container__move"}>
            <div className="content__header">
                <h1 className="headers">Журнал продаж</h1>
                <button onClick={() => setModal(true)}>Добавить</button>
            </div>
            <div className="content__body">
                <SalesTable data={sales} />
                <Pagination total={sales.length} perPage={10} />
            </div>
            {modal ? <Modal close={setModal} path={location.pathname} /> : null}
            <Outlet />
        </div>
    );
};

export default SalesPage;