import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogTable from '../../components/catalogTable/CatalogTable';
import Pagination from '../../components/pagination/Pagination';
import { getCatalog } from '../../redux/actions/productionAction';

const CatalogPage = ({ status }) => {
  const dispatch = useDispatch()
  const catalog = useSelector(state => {
    const { productionReducer } = state
    return productionReducer.catalog
  })

  useEffect(() => {
    dispatch(getCatalog())
  }, [])

  return (
    <div className={status ? "container" : "container__move"}>
      <div className="content__header">
        <h1 className="headers">Каталог продукции</h1>
        <button>Добавить</button>
      </div>
      <div className="content__body">
        <CatalogTable data={catalog.results} />
        <Pagination total={catalog.count} perPage={10} />
      </div>
    </div>
  )

};

export default CatalogPage;