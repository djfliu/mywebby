import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MastHead from '../components/landing-page/masthead';
import Sidebar from '../components/sidebar';
import About from '../components/landing-page/about'
import Me from '../components/landing-page/me';
import Portfolio from '../components/landing-page/portfolio';
import Footer from '../components/landing-page/footer';

export default function HomePage() {
    return (
        <body id="page-top">
            <Sidebar/>
            <MastHead/>
            <About/>
            <Me/>
            <Portfolio/>
            <Footer/>
        </body>
    )
}