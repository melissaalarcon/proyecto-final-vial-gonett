import React from "react";


const Nav = (props) => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" id="myNavbar">
                <div className="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-center mb-2 mb-lg-0">
                        <li class="nav-item ps-0" id="nav-click">
                            <a class="nav-link" aria-current="page" href="/">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="nosotros">NOSOTROS</a></li>
                        <li class="nav-item">
                            <a class="nav-link" href="servicios">SERVICIOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contacto">CONTACTANOS</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
    );
}

export default Nav;