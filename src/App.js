import Home from "./pages/home.js";
import Contact from "./pages/contact.js";
import About from "./pages/about.js";
import FAQ from "./pages/faq.js";
import Product from "./pages/product.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 
  console.log("App")
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home pageName="home" />} />
        <Route path="contact" element={<Contact pageName="contact" />} />
        <Route path="about" element={<About pageName="about"  />} />
        <Route path="faq" element={<FAQ pageName="faq" />} />
        <Route path="product" element={<Product pageName="product" />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;










 
 