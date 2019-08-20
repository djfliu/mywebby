import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MastHead from '../components/landing-page/masthead';
import Sidebar from '../components/sidebar';

export default function HomePage() {
    return (
        <body id="page-top">
            <Sidebar/>
            <MastHead/>
        </body>
    )
}