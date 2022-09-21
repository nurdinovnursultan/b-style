import React, { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getSemiFinished } from "../../redux/actions/productionAction";
import SemiFinishedTable from "../../components/semiFinishedTable/SemiFinishedTable";
import Modal from "../../components/modal/Modal";
import { Outlet, useLocation } from "react-router-dom";

const SemiFinishedPage = ({ status }) => {
  const [modal, setModal] = useState(false);
  const location = useLocation()

  const dispatch = useDispatch()
  const semiFinished = useSelector(state => {
    const { productionReducer } = state
    return productionReducer.semiFinished
  })

  useEffect(() => {
    dispatch(getSemiFinished())
  }, [])

  return (
    <div className={status ? "container" : "container__move"}>
      <div className="content__header">
        <h1 className="headers">Склад полуфабрикатов</h1>
        <button onClick={() => setModal(true)}>Добавить</button>
      </div>
      <div className="content__body">
        <SemiFinishedTable data={semiFinished.results} />
        <Pagination total={semiFinished.count} perPage={10} />
      </div>
      {modal ? <Modal close={setModal} path={location.pathname} /> : null}
      <Outlet />
    </div>
  );
};

export default SemiFinishedPage;
