import React from "react";
import "./Navbar.css";

function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="navparagragh">send <small>FREIGHT</small></div>
            <div className="input-icons">
                <input className="input-field" type="text" placeholder="Search"/>
                <i className="fas fa-search"></i>
            </div>
            
            <div>
                <input className="inputs" type="text" placeholder="Request Quote"/>

            </div>

            <div>
                <input className="inputfield" type="text" placeholder="Book Shipment"/>

            </div>


        </div>

        </>

    )
}

export default Navbar;