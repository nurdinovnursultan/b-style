import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import ModalStock from '../../components/modals/ModalStock';
import Pagination from "../../components/pagination/Pagination";
import StockTable from '../../components/stockTable/StockTable';
import { getStock } from '../../redux/actions/productionAction';

const StockPage = ({ status }) => {
  const [modal, setModal] = useState(false);
  const location = useLocation()

  const dispatch = useDispatch()
  const stock = useSelector(state => {
    const { productionReducer } = state
    return productionReducer.stock
  })

  const limit = 10

  useEffect(() => {
    dispatch(getStock())
  }, [])

  return (
    <div className={status ? "container" : "container__move"}>
      <div className="content__header">
        <h1 className="headers">Склад продукции</h1>
        <button onClick={() => setModal(true)}>Добавить</button>
      </div>
      <div className="content__body">
        <StockTable data={stock} />
        <Pagination total={stock.length} perPage={limit} />
      </div>
      {modal ? <Modal close={setModal} path={location.pathname} /> : null}
      <Outlet />
    </div>
  );
};

export default StockPage;