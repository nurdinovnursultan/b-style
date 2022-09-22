import React from 'react';

const EmployeesTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>№</td>
                    <td>ФИО</td>
                    <td>Фото</td>
                    <td>Телефон</td>
                    <td>E-mail</td>
                    <td>Дата поступления</td>
                </tr>
            </thead>
            <tbody>
                {
                    data ? (data.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.full_name}</td>
                            <td>{item.photo}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.date_joined}</td>
                        </tr>
                    )) : null
                }
            </tbody>
        </table>
    );
};

export default EmployeesTable;