import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage";
import ModelsProducts from "./pages/modelsProducts/ModelsProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/models"  element={<ModelsProducts />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;