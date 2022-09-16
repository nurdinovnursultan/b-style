import React from "react";

const ModelsProducts = () => {

  return(
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
            <tr className="table__tr">
              <td className="table__td">xd3000</td>
              <td className="table__td">3.01.999</td>
            </tr>
            <tr className="table__tr">
              <td className="table__td">xd3000</td>
              <td className="table__td">3.01.999</td>
            </tr>
            <tr className="table__tr">
              <td className="table__td">xd3000</td>
              <td className="table__td">3.01.999</td>
            </tr>
            <tr className="table__tr">
              <td className="table__td">xd3000</td>
              <td className="table__td">3.01.999</td>
            </tr>
            <tr className="table__tr">
              <td className="table__td">xd3000</td>
              <td className="table__td">3.01.999</td>
            </tr>
            <tr className="table__tr">
              <td className="table__td">xffff</td>
              <td className="table__td">3fffff</td>
            </tr>
            <tr className="table__tr">
              <td className="table__td">xffff</td>
              <td className="table__td">3fffff</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  )
}

export default ModelsProducts;