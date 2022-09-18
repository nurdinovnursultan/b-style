import React from 'react';
import Pagination from "../../components/pagination/Pagination";
import EastIcon from '@mui/icons-material/East';

const ModelTypesPage = () => {
  const modelTypes = [
    {
      model: "zzzz",
      data: Math.random(),
      id: Math.random(),
    },
    {
      model: "zzzz",
      data: Math.random(),
      id: Math.random(),
    },
    {
      model: "zzzz",
      data: Math.random(),
      id: Math.random(),
    },
    {
      model: "zzzz",
      data: Math.random(),
      id: Math.random(),
    },
    {
      model: "zzzz",
      data: Math.random(),
      id: Math.random(),
    },
    {
      model: "zzzz",
      data: Math.random(),
      id: Math.random(),
    },
    {
      model: "zzzz",
      data: Math.random(),
      id: Math.random(),
    },
  ]

  return(
    <>
    <article className="card">
      <section className="card__header">
        <h1 className="card__title">Тип Модели Продуктов</h1>
        <button className="card__button">Создать</button>
      </section>
      <section className="card__body">
        <table className="card__table table">
          <thead>
            <th className="table__th">Виды Модели</th>
            <th className="table__th">Дата</th>
            <th className=''></th>
          </thead>
          <tbody className="table__body">
            <tr className="table__tr-none"></tr>
            {
              modelTypes.map(item => {
                return(
                  <tr className="table__tr" key={item.id}>
                    <td className="table__td">{item.model}</td>
                    <td className="table__td">{item.data}</td>
                    <td> <EastIcon color='primary' /></td>
                  </tr>
                )
              })
            }
          </tbody>
        <Pagination total={modelTypes.length} perPage={2} />
        </table>
      </section>
    </article>
  </>
)

};

export default ModelTypesPage;