import React from 'react';

const CatalogTable = ({ data }) => {

    return (
        <table>
            <thead>
                <tr>
                    <td>№</td>
                    <td>Модель</td>
                    <td>Цвет</td>
                    <td>Картинка</td>
                    <td>Размер</td>
                    <td>Артикул</td>
                </tr>
            </thead>
            <tbody>
                {
                    data ? (data.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.model}</td>
                            <td>{item.color}</td>
                            <td><img src={item.picture} alt="#" /></td>
                            <td>{item.size_from}-{item.size_to}</td>
                            <td>{item.articul}</td>
                            <td>----</td>
                        </tr>
                    )) : null
                }
            </tbody>
        </table>
    );
};

export default CatalogTable;