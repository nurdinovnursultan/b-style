import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const StockTable = ({ data }) => {
    const getTotalRest = () => {
        let total = 0;
        data.forEach(item => total += item.quantity)
        return total
    }

    return (
        <table>
            <thead>
                <tr>
                    <td>№</td>
                    <td>Каталог</td>
                    <td>Дата</td>
                    <td>Количество</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.length ? (data.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.catalog}</td>
                            <td>{item.date}</td>
                            <td>{item.quantity}</td>
                            <td align="center">
                                <Link to={`/stock/${item.id}`}>
                                    <ArrowForwardIcon fontSize="small" />
                                </Link>
                            </td>
                        </tr>)) : null
                }
                <tr>
                    <td colSpan="3" align="right">Итого</td>
                    <td colSpan="2">{data.length ? getTotalRest() : 0}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default StockTable;