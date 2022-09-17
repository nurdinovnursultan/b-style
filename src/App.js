import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage";
import ProductionPage from "./pages/productionPage/ProductionPage";
import ModelPage from "./pages/modelPage/ModelPage";
import ModelTypesPage from "./pages/modelTypesPage/ModelTypesPage";
import EmployeesPage from "./pages/employeesPage/EmployeesPage";
import ProductConsolidatedPage from "./pages/productionConsolidatedPage/ProductionConsolidatedPage";
import SalaryPage from "./pages/salaryPage/SalaryPage";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="production" element={<ProductionPage />} />
          <Route path="models" element={<ModelPage />} />
          <Route path="types" element={<ModelTypesPage />} />
          <Route path="employees" element={<EmployeesPage />} />
          <Route path="consolidated" element={<ProductConsolidatedPage />} />
          <Route path="salary" element={<SalaryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;