import React from "react";
import './Header.css'

const Header = () => {
    return(
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            {/* <img src="./logo.png" alt="logo" width={100}/> */}
            <p>DAVIS TECH</p>
            {/* <div className="flexCenter h-menu">
            <a href="">tab1</a>
            <a href="">tab2</a>
            <a href="">tab3</a>  
            <button className="button">
            <a href="">tab4</a>
            </button>
            </div>
          */}
        </div>
    </section>
    )
}

export default Header