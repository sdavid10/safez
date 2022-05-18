import * as React from 'react';
import '../UI/LandingPage.css';

const LandingPage = () => {

    return (
        <div className="header">
            <a href="#default" className="logo">CompanyLogo</a>
            <div className="header-right">
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    );
}
export default LandingPage;