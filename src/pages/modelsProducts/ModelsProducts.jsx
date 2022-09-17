import React from "react";
import Header from '../../components/header/Header';
import SideBar from '../../components/sidebar/SideBar';



const ModelsProducts = () => {

  const product = [
    {
      model: "zzzz",
      data: "11.1.1.",
      id: Math.random(),
    },
    {
      model: "zzzz",
      data: "11.1.1.",
      id: Math.random(),
    },
    {
      model: "zzzz",
      data: "11.1.1.",
      id: Math.random(),
    },
    {
      model: "zzzz",
      data: "11.1.1.",
      id: Math.random(),
    },
    {
      model: "zzzz",
      data: "11.1.1.",
      id: Math.random(),
    },
    {
      model: "zzzz",
      data: "11.1.1.",
      id: Math.random(),
    },
    {
      model: "zzzz",
      data: "11.1.1.",
      id: Math.random(),
    },
  ]

  return(
    <>
    <Header />
    <SideBar />
    <article className="card">
      <section className="card__header">
        <h1 className="card__title">Продукты</h1>
        <button className="card__button">Создать</button>
      </section>
      <section className="card__body">
        <table className="card__table table">
          <thead>
            <th className="table__th">Model</th>
            <th className="table__th">Date</th>
          </thead>
          <tbody className="table__body">
            <tr className="table__tr-none"></tr>
            {
              product.map(item => {
                return(
                  <tr className="table__tr" key={item.id}>
                    <td className="table__td">{item.model}</td>
                    <td className="table__td">{item.data}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </section>
    </article>
    </>
  )
}

export default ModelsProducts;