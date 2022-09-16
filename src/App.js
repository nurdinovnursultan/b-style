import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage";
import ProductPage from "./pages/productpage/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;