import React from "react";
import '../styles/components/pages/homepage.css';

const HomePage = (props) => {
    return (

        <main className="h01">

            <div className="contenedor-carousel">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="carousel/1.png" class="d-block w-100" alt="movimiento de suelos"/>
                    </div>
                    <div className="carousel-item">
                        <img src="carousel/2.png" class="d-block w-100" alt="venta de tierra"/>
                    </div>
                    <div className="carousel-item">
                        <img src="carousel/3.png" class="d-block w-100" alt="canchas de polo"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span classname="visually-hidden"></span>
                </button>
                </div>
            </div>
    
            <div id="welcomeBox">
                <h2><b>¡Bienvenidos!</b></h2>
                <p>En Vial Gonett, estamos dedicados a brindar trabajos y soluciones integrales en movimiento de suelos para proyectos de construcción y desarrollo urbano. Con más de 30 años de experiencia en la industria, nos enorgullece ser una de las empresa de tradición y excelencia. Nuestra misión es simple pero poderosa: ofrecer servicios de movimiento de suelos de la más alta calidad, que cumplan con los estándares más exigentes de la industria. Estamos comprometidos con la excelencia en cada proyecto que emprendemos, y nuestra pasión por lo que hacemos se refleja en los resultados finales.</p>
            </div>

        </main>

    );
}

export default HomePage;