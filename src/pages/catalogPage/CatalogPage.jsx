import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogTable from '../../components/catalogTable/CatalogTable';
import Pagination from '../../components/pagination/Pagination';
import { getCatalog } from '../../redux/actions/productionAction';
import Modal from './catalogModal';

const CatalogPage = ({ status }) => {
  const [ show, setShow] = useState(false);
  const [edit, setEdit] = useState(true)


  const dispatch = useDispatch()
  const catalog = useSelector(state => {
    const { productionReducer } = state
    return productionReducer.catalog
  })

  const on = () => {
    setShow(true); setEdit(true)
  }

  useEffect(() => {
    dispatch(getCatalog())
  }, [])

  return (
    <div className={status ? "container" : "container__move"}>
      <div className="content__header">
        <h1 className="headers">Каталог продукции</h1>
        <button onClick={() => {on()}}>Добавить</button>
      </div>
      <div className="content__body">
        <CatalogTable edit={edit} setEdit={setEdit} setShow={setShow} data={catalog.results} />
        <Pagination total={catalog.count} perPage={10} />
      </div>
      <Modal show={show} setShow={setShow} edit={edit} setEdit={setEdit}/>
    </div>
  )

};

export default CatalogPage;