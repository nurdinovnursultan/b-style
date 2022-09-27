import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

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
                    <td>Должность</td>
                    <td>Дата поступления</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.length ? (
                        data.map((item, index) =>
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.full_name}</td>
                                <td><img src={item.photo} alt="#" /></td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.job_title}</td>
                                <td>{item.date_joined}</td>
                                <td align="center">
                                    <Link to={`/employees/${item.id}`}>
                                        <ArrowForwardIcon fontSize="small" />
                                    </Link>
                                </td>

                            </tr>)
                    ) : null
                }
            </tbody>
        </table>
    );
};

export default EmployeesTable;