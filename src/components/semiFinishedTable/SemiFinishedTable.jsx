import React from 'react';

const SemiFinishedTable = ({ data }) => {
    const getTotalRest = () => {
        let total = 0
        data.forEach(item => total += item.quantity)
        return total
    }

    return (
        <table>
            <thead>
                <tr>
                    <td>№</td>
                    <td>Название</td>
                    <td>Страна</td>
                    <td>Дата поступления</td>
                    <td>Количество</td>
                </tr>
            </thead>
            <tbody>
                {
                    data ? (data.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.country}</td>
                            <td>{item.date}</td>
                            <td>{item.quantity}</td>
                        </tr>)) : null
                }
                <tr>
                    <th>Итого</th>
                    <th>{data ? getTotalRest() : 0}</th>
                </tr>
            </tbody>
        </table>
    );
};

export default SemiFinishedTable;