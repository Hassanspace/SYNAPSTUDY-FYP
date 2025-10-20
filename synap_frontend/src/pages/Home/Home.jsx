import React from 'react'
import Navbar from "./Navbar";
import Header from './Header';
import Whychooseus from './Whychooseus';
import SocialSection from './SocialSection';
import HowItWorks from './HowItWorks';
import SubscriptionSection from './SubscriptionSection';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <Header/>
    <Whychooseus/>
    <SocialSection/>
    <HowItWorks/>
    <SubscriptionSection/>
    <TestimonialsSection/>
    <Footer/>

    </>
  )
}

export default Home