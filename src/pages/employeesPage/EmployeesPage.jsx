import React, { useEffect } from 'react';
import Pagination from "../../components/pagination/Pagination";
import EmployeesTable from '../../components/employeesTable/EmployeesTable';
import { useDispatch, useSelector } from 'react-redux';
import { getWorkers } from '../../redux/actions/staffAction';

const EmployeesPage = () => {
  const dispatch = useDispatch()
  const workers = useSelector(state => {
    const { workersReducer } = state
    return workersReducer.workers
  })

  useEffect(() => {
    dispatch(getWorkers())
  }, [])

  return (
    <div className="container">
      <div className="content__header">
        <h1 className="headers">Сотрудники</h1>
        <button>Добавить</button>
      </div>
      <div className="content__body">
        <EmployeesTable data={workers.results} />
        <Pagination />
      </div>
    </div>
  )
};

export default EmployeesPage;