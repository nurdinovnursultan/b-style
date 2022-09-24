import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "../../components/pagination/Pagination";
import SalaryTable from '../../components/salaryTable/SalaryTable';
import { getTabelWorkers } from '../../redux/actions/staffAction';

const SalaryPage = ({ status }) => {
  const dispatch = useDispatch()
  const salary = useSelector(state => {
    const { workersReducer } = state
    return workersReducer.tabelWorkers
  })

  useEffect(() => {
    dispatch(getTabelWorkers())
  }, [])

  return (
    <div className={status ? "container" : "container__move"}>
      <div className="content__header">
        <h1 className="headers">Табель сотрудников</h1>
        <button>Добавить</button>
      </div>
      <div className="content__body">
        <SalaryTable data={salary} />
        <Pagination total={salary.count} perPage={10} />
      </div>
    </div>
  );
};

export default SalaryPage;