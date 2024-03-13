import React from 'react';
import css from "./Header.module.css"
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
            <div>
                <h1>Cars</h1>
            </div>
            <div className={css.tools}>
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Register</Link>
            </div>

        </div>
    );
};

export default Header;