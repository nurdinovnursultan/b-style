import React, { useEffect } from "react";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getSemiFinished } from "../../redux/actions/productionAction";
import SemiFinishedTable from "../../components/semiFinishedTable/SemiFinishedTable";

const SemiFinishedPage = ({ status }) => {
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
        <button>Добавить</button>
      </div>
      <div className="content__body">
        <SemiFinishedTable data={semiFinished.results} />
        <Pagination total={semiFinished.count} perPage={10} />
      </div>
    </div>
  );
};

export default SemiFinishedPage;
