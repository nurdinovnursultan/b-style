import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import SemiFinishedPage from "./pages/semiFinishedPage/SemiFinishedPage";
import ElaborationPage from "./pages/elaborationPage/ElaborationPage";
import CatalogPage from "./pages/catalogPage/CatalogPage";
import EmployeesPage from "./pages/employeesPage/EmployeesPage";
import StockPage from "./pages/stockPage/StockPage";
import SalaryPage from "./pages/salaryPage/SalaryPage";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(true)

  return (
    <div className="App">
      <BrowserRouter>
        <Header status={sidebar} />
        <SideBar status={sidebar} setSidebar={setSidebar} />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="semifinished" element={<SemiFinishedPage status={sidebar} />} />
          <Route path="elaboration" element={<ElaborationPage status={sidebar} />} />
          <Route path="catalog" element={<CatalogPage status={sidebar} />} />
          <Route path="employees" element={<EmployeesPage status={sidebar} />} />
          <Route path="stock" element={<StockPage status={sidebar} />} />
          <Route path="salary" element={<SalaryPage status={sidebar} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;