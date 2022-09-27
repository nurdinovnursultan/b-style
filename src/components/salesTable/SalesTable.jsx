import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalog } from '../../redux/actions/productionAction';
import { getWorkers } from '../../redux/actions/staffAction';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const SalesTable = ({ data }) => {
    const dispatch = useDispatch()
    const employees = useSelector(state => {
        const { workersReducer } = state
        return workersReducer.workers
    })

    const catalog = useSelector(state => {
        const { productionReducer } = state
        return productionReducer.catalog
    })

    useEffect(() => {
        dispatch(getWorkers())
        dispatch(getCatalog())
        console.log(data);
    }, [])

    const getEmployeesNames = (id) => {
        let currentName = employees.filter(item => item.id === id)
        return currentName[0].full_name
    }

    const getCatalogModel = (id) => {
        let currentModel = catalog.filter(item => item.id === id)
        return currentModel[0].model
    }

    return (
        <table>
            <thead>
                <tr>
                    <td>№</td>
                    <td>Сотрудник</td>
                    <td>Каталог</td>
                    <td>Количество пар</td>
                    <td>Цена</td>
                    <td>Итого</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.length ? (
                        data.map((item, index) =>
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{employees.length ? getEmployeesNames(item.worker) : ''}</td>
                                <td>{catalog.length ? getCatalogModel(item.catalog[0]) : ''}</td>
                                <td>{item.pairs_shoes}</td>
                                <td>{item.price}</td>
                                <td>{item.sum_of_price}</td>
                                <td align="center">
                                    <Link to={`/sales/${item.id}`}>
                                        <ArrowForwardIcon fontSize="small" />
                                    </Link>
                                </td>
                            </tr>)
                    ) : null
                }
            </tbody>
        </table>
    );
};

export default SalesTable;