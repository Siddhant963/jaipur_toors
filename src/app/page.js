"use client";

import React, { useState } from 'react';
import Carausal from '@/Components/Carausal';
import LoginForm from '@/Components/LoginForm';
import Navbar from '@/Components/Navbar';
import Booknow from '@/Components/Booknow';
import Pakages from '@/Components/Pakages';
import Services from '@/Components/Services';
import Gallery from '@/Components/Gallery';
import Review from '@/Components/Review';
import Contact from '@/Components/Contact';
import Brand from '@/Components/Brand';
import Footer from '@/Components/Footer';

const Page = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const handleLoginClick = () => {
    console.log(isLoginFormOpen); 
    setIsLoginFormOpen(!isLoginFormOpen); // Toggle the login form visibility
  };

  const handleCloseLoginForm = () => {
    setIsLoginFormOpen(false); // Close the login form
  };

  return (
    <>
      <Navbar onLoginClick={handleLoginClick} />
      <Carausal />
      {isLoginFormOpen && <LoginForm onClose={handleCloseLoginForm} />}
      <Booknow/>
      <Pakages/>
      <Services/>
      <Gallery/>
      <Review/>
      <Contact/>
      <Brand/>
      <Footer/>
    </>
  );
};

export default Page;