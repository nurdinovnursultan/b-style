import React, { useEffect, useState } from 'react';
import Pagination from "../../components/pagination/Pagination";
import EmployeesTable from '../../components/employeesTable/EmployeesTable';
import { useDispatch, useSelector } from 'react-redux';
import { getWorkers } from '../../redux/actions/staffAction';
import { useLocation } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import ModalEmployess from '../../components/modals/ModalEmployees';

const EmployeesPage = ({ status }) => {
  const [modal, setModal] = useState(false);
  const location = useLocation()

  const dispatch = useDispatch()
  const workers = useSelector(state => {
    const { workersReducer } = state
    return workersReducer.workers
  })

  useEffect(() => {
    dispatch(getWorkers())
  }, [])

  return (
    <div className={status ? "container" : "container__move"}>
      <div className="content__header">
        <h1 className="headers">Сотрудники</h1>
        <button onClick={() => setModal(true)}>Добавить</button>
      </div>
      <div className="content__body">
        <EmployeesTable data={workers} /> 
        <Pagination />
      </div>
      {modal ? <ModalEmployess close={setModal} /> : null}
    </div>
  )
};

export default EmployeesPage;