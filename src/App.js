import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Header from './template/Header';
import Footer from './template/Footer';
import Routes from './Routes';


export default props => (
    <div className="container">
        <Header/> 
        <Menu/>
        <Routes/>
        <Footer/>
    </div>
    
)

