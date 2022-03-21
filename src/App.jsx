import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ProductsPage } from "./Components/ProductsPage";
// import { Routes } from "./Components/Routes";

function App() {
  return (
    <div className="App">
        {<Routes>
          <Route path="/products" element={<ProductsPage/>}/>
        </Routes>}
    </div>
  );
}

export default App;
