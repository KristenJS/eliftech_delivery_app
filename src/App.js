import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HistoryPage from "./pages/HistoryPage";
import ShopPage from "./pages/ShopPage";
import CouponPage from "./pages/CouponPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/coupon" element={<CouponPage />} />
    </Routes>
  );
}

export default App;
