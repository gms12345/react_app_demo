import { render } from "@testing-library/react";
//import  ReactDOM  from "react";

import App from './App';
import './css/main_style.css';
import Header from './components/header';
import Footer from './components/footer';
import Banner from './components/banner';

render(
    <>
    <App/>
    <Header/>
    <Banner/>
    <Footer/>
    </>




,document.getElementById('root'));