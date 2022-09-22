import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "../../components/pagination/Pagination";

const ProductionPage = () => {
  const totalCount = 50;
  const totalPerPage = 10;
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
    },]
  return (
    <div>
      <div className="heder">
        <div className="block1">
          <div>
            <h1 className="h1 card__title">Выработка</h1>
            <input className="input_block1" type="text" />
            <SearchIcon className="BiSearch" />
          </div>
          <button className="button_block1">Создать</button>
        </div>
        <div className="input_date">
          <div>
            <p className="input_date_p">Дата начала</p>
            <input
              className="input"
              type="date"
              id="start"
              name="trip-start"
              min="2018-01-01"
              max="202222-12-31"
            />
          </div>
          <div>
            <p className="input_date_p">Дата окончанияp</p>
            <input
              className="input"
              type="date"
              id="start"
              name="trip-start"
              min="2018-01-01"
              max="202222-12-31"
            />
          </div>
        </div>

        <div className="block2">
          <section>
            <table className="card__table table">
              <thead>
                <th className="table__th">Модель</th>
                <th className="table__th">Вид моделей</th>
                <th className="table__th">Упаковка</th>
                <th className="table__th">Количество пар</th>
                <th className="table__th">В мешках</th>
                <th className="table__th">Датa</th>
              </thead>
              <tbody className="table__body">
                <tr className="table__tr-none"></tr>
                {product.map((item) => {
                  return (
                    <tr className="table__tr" key={item.id}>
                      <td className="table__td">{item.model}</td>
                      <td className="table__td">{item.data}</td>
                      <td className="table__td">{item.data}</td>
                      <td className="table__td">{item.data}</td>
                      <td className="table__td">{item.data}</td>
                      <td className="table__td">{item.data}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </div>
        <p></p>
        <div className="block3">
          <Pagination total={totalCount} perPage={totalPerPage} />
        </div>
      </div>
    </div>
  );
};

export default ProductionPage;
