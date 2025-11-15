

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';
import Courses from './pages/Courses';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import OrderFormPage from './pages/OrderFormPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Product />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
  <Route path="/order" element={<OrderFormPage />} />
      </Routes>
  
  <Footer />
    </Router>
  );
}

export default App;
