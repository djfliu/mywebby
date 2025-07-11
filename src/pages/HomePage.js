import React from 'react'
import MastHead from '../components/landing-page/masthead';
import Sidebar from '../components/sidebar';
import About from '../components/landing-page/about'
import Footer from '../components/footer';

const HomePage = () => {
    return (
        <div id="page-top" className="page-container">
            <Sidebar/>
            <MastHead/>
            <section id="about">
                <About/>
            </section>
            <Footer/>
        </div>
    )
};

export default React.memo(HomePage);