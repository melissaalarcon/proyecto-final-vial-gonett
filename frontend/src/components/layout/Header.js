import React from "react";

const Header = (props) => {
    return (
        <header>
            <div class="container-fluid">
                <div class="header-logo d-flex">
                    <img src="img/backhoe.svg" id="backhoe-img" alt="backhoe loader icon" height="120px"/>
                    <h1>VIAL GONETT</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;