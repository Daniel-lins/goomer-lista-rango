import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Error404 } from "../../pages/Error404";
import { RestaurantDetail } from "../../pages/RestaurantDetail";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
