import React from "react";
import {Link} from "react-router-dom"




const Nav = () => {
    return <nav>
        <Link to="/" className="logo">Home</Link>
        <div className="links">
            <Link to="/about" >A propos</Link>
            <Link to="/blog" >Blog</Link>
        </div>
    </nav>
}




export default Nav;