import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Admin/Products";
import Orders from "./pages/Admin/Orders";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
}

export default App;
