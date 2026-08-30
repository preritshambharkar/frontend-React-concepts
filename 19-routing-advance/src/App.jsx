import React from 'react';
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer from './components/Footer';
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Product from './pages/Product';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Mens from './pages/Mens';
import Women from './pages/Women';
import About1 from './pages/About1';
import Courses from './pages/Courses';
import CoursesDetails from './pages/CoursesDetails';
import About2 from './pages/About2';

const App = () => {
  return (
    <div className='h-screen bg-lime-950 text-white'>
     <Navbar/>
     <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/product/mens' element={<Mens/>} />
        <Route path='/product/womens' element={<Women/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courses/:id' element={<CoursesDetails/>}/>
        <Route path='/about' element={<About/>}>
          <Route path='about1' element={<About1/>}/>
          <Route path='about2' element={<About2/>}/>
        </Route>
        <Route/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;