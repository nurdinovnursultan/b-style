import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

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
                    data !== undefined ?
                    (data.length > 0 ? (data.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.model}</td>
                            <td>{item.color}</td>
                            <td><img src={item.picture} alt="#" /></td>
                            <td>{item.size_from}-{item.size_to}</td>
                            <td>{item.articul_title}</td>
                            <td align="center">
                                <Link to={`/catalog/${item.id}`}>
                                    <ArrowForwardIcon fontSize="small" />
                                </Link>
                            </td>
                        </tr>
                    )) : null) : null

                }
            </tbody>
        </table>
    );
};

export default CatalogTable;