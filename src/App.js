import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import LoginPage from "./pages/loginpage/LoginPage";
import SemiFinishedPage from "./pages/semiFinishedPage/SemiFinishedPage";
import ElaborationPage from "./pages/elaborationPage/ElaborationPage";
import CatalogPage from "./pages/catalogPage/CatalogPage";
import CatalogItem from "./components/catalogItem/CatalogItem";
import EmployeesPage from "./pages/employeesPage/EmployeesPage";
import Employee from "./components/employee/Employee";
import StockPage from "./pages/stockPage/StockPage";
import StockItem from "./components/stockItem/StockItem";
import SalaryPage from "./pages/salaryPage/SalaryPage";
import SalesPage from "./pages/salesPage/SalesPage";
import SalesItem from "./components/salesItem/SalesItem";
import SemiFinishedDetails from "./components/semiFinishedDetails/SemiFinishedDetails";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Header status={sidebar} />
        <SideBar status={sidebar} setSidebar={setSidebar} />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="semifinished/*"
            element={<SemiFinishedPage status={sidebar} />}
          >
            <Route path=":id" element={<SemiFinishedDetails />} />
          </Route>
          <Route
            path="elaboration"
            element={<ElaborationPage status={sidebar} />}
          />
          <Route path="catalog/*" element={<CatalogPage status={sidebar} />}>
            <Route path=":id" element={<CatalogItem />} />
          </Route>
          <Route
            path="employees/*"
            element={<EmployeesPage status={sidebar} />}
          >
            <Route path=":id" element={<Employee />} />
          </Route>
          <Route path="stock/*" element={<StockPage status={sidebar} />}>
            <Route path=":id" element={<StockItem />} />
          </Route>
          <Route path="salary" element={<SalaryPage status={sidebar} />} />
          <Route path="sales/*" element={<SalesPage status={sidebar} />}>
            <Route path=":id" element={<SalesItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
