import React, { useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/productionAction";
import { Link } from "react-router-dom";

const SemiFinishedTable = ({ data }) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => {
    const { productionReducer } = state;
    return productionReducer.countries;
  });

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const getCountriesName = (countryID) => {
    let currentCountry = countries.filter((item) => item.id === countryID);
    return currentCountry[0].title;
  };

  const getTotalRest = () => {
    let total = 0;
    Array.from(data).forEach((item) => (total += item.quantity));
    return total;
  };

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
        {data !== undefined
          ? data.length > 0
            ? data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    {countries.length ? getCountriesName(item.country) : ""}
                  </td>
                  <td>{item.date}</td>
                  <td>{item.quantity}</td>
                  <td align="center">
                    <Link to={`/semifinished/${item.id}`}>
                      <ArrowForwardIcon fontSize="small" />
                    </Link>
                  </td>
                </tr>
              ))
            : null
          : null}
        <tr>
          <td colSpan="4" align="right">
            Итого
          </td>
          {/* <td colSpan="2">{data.length ? getTotalRest() : 0}</td> */}
          <td colSpan="2">
            {data !== undefined ? data.length && getTotalRest() : 0}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SemiFinishedTable;
