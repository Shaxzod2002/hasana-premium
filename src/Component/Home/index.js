import React from 'react'
import Navbar from '../../Pages/Navbar'
import Header from '../../Pages/Header';
import About from '../../Pages/About/index';
import Benefits from '../../Pages/Benefits/index';
import Thoughts from '../../Pages/Thoughts';
import Partners from '../../Pages/Partners';
import Connect from '../../Pages/Connect/index';
import Footer from '../../Pages/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Benefits />
            <Thoughts />
            <Partners />
            <Connect />
            <Footer />
        </>
    )
}
