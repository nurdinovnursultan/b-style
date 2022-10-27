import React from "react";
import { useSelector } from "react-redux";

const ElaborationTable = ({ data }) => {
  const semiFinished = useSelector((state) => {
    const { productionReducer } = state;
    return productionReducer.semiFinished;
  });

  const getSemiFinishedName = (semiFinishedID) => {
    if (semiFinished.lenght) {
      let currentSemiFinished = semiFinished.filter(
        (item) => item.id === semiFinishedID
      );
      return currentSemiFinished[0].title;
    } else {
      return;
    }
  };
  return (
    <table>
      <thead>
        <tr>
          <td>№</td>
          <td>Полуфабрикаты</td>
          <td>Количество полуфабрикатов</td>
          <td>Количество пар</td>
          <td>Количество упаковок</td>
          <td>Каталог</td>
          <td>Рабочий брак</td>
          <td>Брак ЭВА</td>
          <td>Брак ПУ</td>
          <td>Дата</td>
          <td>Итого</td>
        </tr>
      </thead>
      <tbody>
        {data.length
          ? data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{getSemiFinishedName(item.semifinished)}</td>
                <td>{item.semifinished_quantity}</td>
                <td>{item.quantity_of_pairs}</td>
                <td>{item.quantity_of_packages}</td>
                <td>{item.catalog}</td>
                <td>{item.defect_working}</td>
                <td>{item.defect_EVA}</td>
                <td>{item.defect_PU}</td>
                <td>{item.date}</td>
                <td>{item.total_defect}</td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default ElaborationTable;
