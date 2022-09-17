import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage";
import ProductPage from "./pages/productpage/ProductPage";
import ModelsProducts from "./pages/modelsProducts/ModelsProducts";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/models"  element={<ModelsProducts />}/>
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;