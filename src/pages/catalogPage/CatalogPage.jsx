import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogTable from '../../components/catalogTable/CatalogTable';
import Pagination from '../../components/pagination/Pagination';
import { getCatalog } from '../../redux/actions/productionAction';
import Modal from '../../components/modal/Modal';
import { Outlet, useLocation } from 'react-router-dom';

const CatalogPage = ({ status }) => {
  const dispatch = useDispatch()
  const catalog = useSelector(state => {
    const { productionReducer } = state
    return productionReducer.catalog
  })

  useEffect(() => {
    dispatch(getCatalog())
  }, [])

  const [modal, setModal] = useState(false);
  const location = useLocation()

  return (
    <div className={status ? "container" : "container__move"}>
      <div className="content__header">
        <h1 className="headers">Каталог продукции</h1>
        <button onClick={() => setModal(true)}>Добавить</button>
      </div>
      <div className="content__body">
        <CatalogTable data={catalog} />
        <Pagination total={catalog.length} perPage={10} />
      </div>
      {modal ? (<Modal close={setModal} path={location.pathname} />) : null}
      <Outlet />
    </div>
  )

};

export default CatalogPage;