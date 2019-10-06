import React from 'react'
import MastHead from '../components/landing-page/masthead';
import Sidebar from '../components/sidebar';
import About from '../components/landing-page/about'
import Footer from '../components/footer';

export default function HomePage() {
    return (
        <body id="page-top">
            <Sidebar/>
            <MastHead/>
            <About/>
            <Footer/>
        </body>
    )
}