import React from 'react';
import Pagination from "../../components/pagination/Pagination";

const SalaryPage = () => {
    const totalCount = 50
    const totalPerPage = 10
    const product = [
      {
        name: "ernis",
        salary: "11.1.1.",
        id: Math.random(),
      },
      {
        name: "ernis",
        salary: "11.1.1.",
        id: Math.random(),
      },
      {
        name: "ernis",
        salary: "11.1.1.",
        id: Math.random(),
      },
      {
        name: "ernis",
        salary: "11.1.1.",
        id: Math.random(),
      },
      {
        name: "ernis",
        salary: "11.1.1.",
        id: Math.random(),
      },
      {
        name: "ernis",
        salary: "11.1.1.",
        id: Math.random(),
      },
      {
        name: "ernis",
        salary: "11.1.1.",
        id: Math.random(),
      },
    ]
    return (
       <>
        <div className="heder">
      
        
        <div className="block2">
         
          <section>
        <table className="card__table table">
          <thead>
          <th className="table__th">name</th>
             
              <th className="table__th">salary</th>
          </thead>
          <tbody className="table__body">
            <tr className="table__tr-none"></tr>
            {
              product.map(item => {
                return(
                  <tr className="table__tr" key={item.id}>
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
       </>
    );
};

export default SalaryPage;