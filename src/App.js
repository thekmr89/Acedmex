import { React, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import './assets/sass/style.css';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { PageNotFound } from './Pages/PageNotFound';
import { ThankYou } from './Pages/ThankYou';
import { Blogs } from './Pages/Blogs';
import { BlogCategory } from './Pages/BlogCategory';
import { BlogDetail } from './Pages/BlogDetail';
import { Pricing } from './Pages/Pricing';
import { Instructor } from './Pages/Instructor';
import { Footer } from './components/Footer';
import { Overlay } from './components/Overlay';
import { Hampop } from './components/Hampop';
import { Videopop } from './components/VideoPop';
import { Inquirypop } from './components/Inquirypop';
import { Cartpop } from './components/Cart';
import { CartProvider } from './components/Modelscontext';

function App() {

  useEffect(() => {
    document.documentElement.style.setProperty('--headerheight', window.getComputedStyle(document.querySelector("header")).height);
    document.documentElement.style.setProperty('--footerheight', window.getComputedStyle(document.querySelector("footer")).height);
  }, []);

  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/instructors" element={<Instructor />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:blogcategory" element={<BlogCategory />} />
          <Route path="/blog/:blogcategory/:blogname" element={<BlogDetail />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <Hampop />
        <Inquirypop />
        <Cartpop />
        <Videopop />
        <Overlay />
      </CartProvider>
    </Router>

  );
}

export default App;

