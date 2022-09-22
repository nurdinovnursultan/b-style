import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "../../components/pagination/Pagination";
import StockTable from '../../components/stockTable/StockTable';
import { getStock } from '../../redux/actions/productionAction';

const StockPage = ({ status }) => {
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
        <button>Добавить</button>
      </div>
      <div className="content__body">
        <StockTable data={stock.results} />
        <Pagination total={stock.count} perPage={limit} />
      </div>
    </div>
  );
};

export default StockPage;