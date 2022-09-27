import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ElaborationTable from "../../components/elaborationTable/ElaborationTable";
import Pagination from "../../components/pagination/Pagination";
import { getElaboration } from "../../redux/actions/productionAction";

const ElaborationPage = ({ status }) => {
  const dispatch = useDispatch()
  const elaboration = useSelector(state => {
    const { productionReducer } = state
    return productionReducer.elaboration
  })

  useEffect(() => {
    dispatch(getElaboration())
  }, [])

  return (
    <div className={status ? "container" : "container__move"}>
      <div className="content__header">
        <h1 className="headers">Выработка</h1>
        <button>Добавить</button>
      </div>
      <div className="content__body">
        <ElaborationTable data={elaboration} />
        <Pagination total={elaboration.length} perPage={10} />
      </div>
    </div>
  )
}

export default ElaborationPage;