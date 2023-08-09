import React from "react";
import "./Header.css";

const Header: React.FC = () => {
    return (
        <div className="header">
            <img src={process.env.PUBLIC_URL + "/image.png"} alt="Website Logo" className="logo" />
            Elevate Your Build
        </div>
    );
};

export default Header;