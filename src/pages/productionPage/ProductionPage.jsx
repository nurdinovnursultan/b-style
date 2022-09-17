import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Pagination from "../../components/pagination/Pagination";

const ProductionPage = () => {
  const totalCount = 50
  const totalPerPage = 10
  return (
    <div>
      <div className="heder">
        <div className="block1">
          <div>
            <h1 className="h1">Выработка</h1>
            <input className="input_block1" type="text" />
            <SearchIcon className="BiSearch" />
          </div>
          <button className="button_block1">Создать</button>
        </div>
        <div className="block2">
          <table className="block_menu">
            <tr>
              <th className="th">Модель</th>
              <th className="th">Вид моделей</th>
              <th className="th">Упаковка</th>
              <th className="th">Количество пар</th>
              <th className="th">В мешках</th>
              <th className="th">Датa</th>
            </tr>
            <tr>
              <td>34,5</td>
              <td>34,5</td>
              <td>3,5</td>
              <td>36</td>
              <td>23</td>
              <td>34,5</td>
            </tr>
          </table>

        </div>
        <div className="block3">
          <Pagination total={totalCount} perPage={totalPerPage} />
        </div>
      </div>
    </div>
  );
}

export default ProductionPage;