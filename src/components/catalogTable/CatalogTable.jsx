import React from 'react';
import { getCatalogId } from '../../redux/actions/productionAction';
import { useDispatch, useSelector } from 'react-redux';

const CatalogTable = ({ data , setShow, setEdit}) => {

    const dispatch = useDispatch()

    const getCatalogAndOpen = (id) => {
        setShow(true)
        dispatch(getCatalogId(id))
    }

    const on = (id) => {
        getCatalogAndOpen(id); setEdit(false)
    }

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
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.model}</td>
                            <td>{item.color}</td>
                            <td><img src={item.picture} alt="#" /></td>
                            <td>{item.size_from}-{item.size_to}</td>
                            <td>{item.articul}</td>
                            <td onClick={() => {on(item.id)}}>----</td>
                        </tr>
                    )) : null
                }
            </tbody>
        </table>
    );
};

export default CatalogTable;