import React from 'react';

const SalaryTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Дата</td>
                    <td>Общее количество</td>
                    <td>Сотрудник</td>
                    <td>Всего браков</td>
                    <td>Количество пар ПУ</td>
                    <td>Количество пар ЭВА</td>
                    <td>Цена</td>
                    <td>Брак сотрудника за 1 день</td>
                    <td>Итоговая зарплата</td>
                </tr>
            </thead>
            <tbody>
                {
                    data ? (data.map((item, index) =>
                        <tr key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.total_quantity}</td>
                            <td>{item.worker}</td>
                            <td>{item.total_defect}</td>
                            <td>{item.quantity_of_PU}</td>
                            <td>{item.quantity_of_EVA}</td>
                            <td>{item.price_of_single_mmodel}</td>
                            <td>{item.total_price_of_one_worker}</td>
                            <td>{item.final_salary_with_defect_calculation}</td>
                        </tr>
                    )) : null
                }
            </tbody>
        </table>
    );
};

export default SalaryTable;