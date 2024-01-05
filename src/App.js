import { Box, Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import ProductRoute from "./component/ProductCategory/ProductRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
