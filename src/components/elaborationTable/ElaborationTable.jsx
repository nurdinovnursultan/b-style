import React from 'react';

const ElaborationTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>№</td>
                    <td>Полуфабрикаты</td>
                    <td>Количество пар</td>
                    <td>Количество упаковок</td>
                    <td>Каталог</td>
                    <td>Количество полуфабрикатов</td>
                    <td>Рабочий брак</td>
                    <td>Брак ЭВА</td>
                    <td>Брак ПУ</td>
                    <td>Дата</td>
                    <td>Итого</td>
                </tr>
            </thead>
            <tbody>
                {
                    data ? (data.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.semifinished}</td>
                            <td>{item.quantity_of_pairs}</td>
                            <td>{item.quantity_of_packages}</td>
                            <td>{item.catalog}</td>
                            <td>{item.semifinished_quantity}</td>
                            <td>{item.defect_working}</td>
                            <td>{item.defect_EVA}</td>
                            <td>{item.defect_PU}</td>
                            <td>{item.date}</td>
                            <td>{item.total_quantity}</td>
                        </tr>
                    )) : null
                }
            </tbody>
        </table>
    );
};

export default ElaborationTable;