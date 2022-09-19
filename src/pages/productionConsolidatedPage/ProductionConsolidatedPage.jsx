import React from 'react';
import Pagination from "../../components/pagination/Pagination";

const ProductionConsolidatedPage = () => {
    const totalCount = 50
    const totalPerPage = 10
    const product = [
      {
        name: "ernis",
        salary: "11.1.1.",
        id: 12,
      },
      {
        name: "ernis",
        salary: "11.1.1.",
        id: 5,
      },
      {
        name: "ernis",
        salary: "11.1.1.",
        id:4,
      },
      {
        name: "ernis",
        salary: "11.1.1.",
        id: 1,
      },
      {
        name: "ernis",
        salary: "11.1.1.",
        id: 2,
      },
      {
        name: "ernis",
        salary: "11.1.1.",
        id: 3,
      },
      {
        name: "ernis",
        salary: "11.1.1.",
        id: 1,
      },
    ]
    return (
        <div>
        <div className="heder">
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
        <th className="table__th">№</th>
        <th className="table__th">name</th>
           
            <th className="table__th">salary</th>
        </thead>
        <tbody className="table__body">
          <tr className="table__tr-none"></tr>
          {
            product.map(item => {
              return(
                <tr className="table__tr" key={item.id}>
                     <td className="table__td">{item.id}</td>
                  <td className="table__td">{item.name}</td>
                  <td className="table__td">{item.salary}</td>
                 
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>
      </div>
      <div className="block3">
        <Pagination total={totalCount} perPage={totalPerPage} />
      </div>
    </div>
        </div>
    );
};

export default ProductionConsolidatedPage;