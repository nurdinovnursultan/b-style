import React, { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions/productionAction';
import { Link } from 'react-router-dom';

const SemiFinishedTable = ({ data }) => {
    const dispatch = useDispatch()
    const countries = useSelector(state => {
        const { productionReducer } = state
        return productionReducer.countries
    })

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    const getCountriesName = (countryID) => {
        if (countries) {
            let currentCountry = countries.results.filter(item => item.id === countryID)
            return currentCountry[0].title
        } else {
            return
        }
    }

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
                            <td>{getCountriesName(item.country)}</td>
                            <td>{item.date}</td>
                            <td>{item.quantity}</td>
                            <td align="center">
                                <Link to={`/semifinished/${item.id}`}>
                                    <ArrowForwardIcon fontSize="small" />
                                </Link>
                            </td>
                        </tr>)) : null
                }
                <tr>
                    <td colSpan="4" align="right">Итого</td>
                    <td colSpan="2">{data ? getTotalRest() : 0}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default SemiFinishedTable;