import React from 'react';
import Pagination from "../../components/pagination/Pagination";
import EastIcon from '@mui/icons-material/East';  

const EmployeesPage = () => {
  const employees = [
    {
      name: "Маликов Азат",
      workers: "Швея",
      number: "+963557851696",
      data: '1 августа 2022 г.',
      salary: '500',
      id: 5,
    },
    {
      name: "Маликов Азат",
      workers: "Швея",
      number: "+963557851696",
      data: '1 августа 2022 г.',
      salary: '500',
      id: 6,
    },
    {
      name: "Маликов Азат",
      workers: "Швея",
      number: "+963557851696",
      data: '1 августа 2022 г.',
      salary: '500',
      id: 7,
    },
    {
      name: "Маликов Азат",
      workers: "Швея",
      number: "+963557851696",
      data: '1 августа 2022 г.',
      salary: '500',
      id: 8,
    },
    {
      name: "Маликов Азат",
      workers: "Швея",
      number: "+963557851696",
      data: '1 августа 2022 г.',
      salary: '500',
      id: 9,
    },
    {
      name: "Маликов Азат",
      workers: "Швея",
      number: "+963557851696",
      data: '1 августа 2022 г.',
      salary: '500',
      id: 10,
    },
  ]

  return(
    <>
    <article className="card">
      <section className="card__header">
        <h1 className="card__title">Сотрудники</h1>
        <button className="card__button">Добавить +</button>
      </section>
      <section className="card__body">
        <table className="card__table table">
          <thead>
            <th className="table__th">№</th>
            <th className="table__th">ФИО</th>
            <th className="table__th">Должность</th>
            <th className="table__th">Телефон</th>
            <th className="table__th">Дата начала работы</th>
            <th className="table__th">Зарплата</th>
          </thead>
          <tbody className="table__body">
            <tr className="table__tr-none"></tr>
            {
              employees.map(item => {
                return(
                  <tr className="table__tr" key={item.id}>
                    <td width="10px" className="table__td table__td-id"><b>{item.id}</b></td>
                    <td className="table__td">{item.name}</td>
                    <td className="table__td">{item.workers}</td>
                    <td className="table__td">{item.number}</td>
                    <td className="table__td">{item.data}</td>

                    <td className="table__td">{item.salary}</td>
                    <td><EastIcon color='primary' /></td>
                  </tr>
                )
              })
            }
          </tbody>
        <Pagination total={employees.length} perPage={2} />
        </table>
      </section>
    </article>
    </>
  )
};

export default EmployeesPage;