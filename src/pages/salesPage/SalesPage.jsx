import React, { useEffect } from 'react';
import SalesTable from '../../components/salesTable/SalesTable';
import Pagination from '../../components/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyDiary } from '../../redux/actions/staffAction';

const SalesPage = ({ status }) => {
    const dispatch = useDispatch()
    const dailys = useSelector(state => {
        const { workersReducer } = state
        return workersReducer.dailyDiary
    })

    useEffect(() => {
        dispatch(getDailyDiary())
        console.log(dailys);
    }, [])

    return (
        <div className={status ? "container" : "container__move"}>
            <div className="content__header">
                <h1 className="headers">Журнал продаж</h1>
                <button>Добавить</button>
            </div>
            <div className="content__body">
                <SalesTable />
                <Pagination />
            </div>
        </div>
    );
};

export default SalesPage;