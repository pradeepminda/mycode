import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ProductDetails from "./pages/ProductDetails";
import SingleProduct from "./pages/SingleProduct";
import ProductDetailPage from "./pages/SingleProduct";
import TermsAndConditions from "./pages/TermsAndConditions";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/single-product" element={<ProductDetailPage />} />
           <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
