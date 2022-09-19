import React from 'react';

const StockTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>№</td>
                    <td>Каталог</td>
                    <td>Количество</td>
                    <td>Дата</td>
                </tr>
            </thead>
            <tbody>
                {
                    data ? (data.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.catalog}</td>
                            <td>{item.quantity}</td>
                            <td>{item.date}</td>
                        </tr>)) : null
                }
            </tbody>
        </table>
    );
};

export default StockTable;