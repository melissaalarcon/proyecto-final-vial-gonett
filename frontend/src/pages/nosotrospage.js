import React from "react";
import '../styles/components/pages/nosotrospage.css';

const NosotrosPage = (props) => {
    return (
        <main className="container h02">

            <div className="slider" id="slider">
                <h2>¿Por qué <i>elegirnos?</i></h2>
            </div>


            <section id="about-us">
                <div className="text-center" id="col-father">
                    <div className="row align-items-center" id="columnas">
                        <div className="col-4">
                            <h3>01.</h3>
                            <h5>Expeciencia probada</h5>
                            <p>Con años de experiencia en el sector, tenemos un historial sólido de entregas exitosas.</p>
                        </div>
                        <div className="col-4">
                            <h3>02.</h3>
                            <h5>Profesionalismo</h5>
                            <p>Nuestro equipo está formado por expertos altamente capacitados y comprometidos con la calidad y la seguridad.</p>
                        </div>
                        <div className="col-4">
                            <h3>03.</h3>
                            <h5>Comprimiso con el cliente</h5>
                            <p>Valoramos a nuestros clientes y trabajamos estrechamente con ellos para satisfacer sus necesidades específicas.</p>
                        </div>
                        <div className="col-4">
                            <h3>04.</h3>
                            <h5>Precios competitivos</h5>
                            <p>Ofrecemos tarifas competitivas imbatibles y sin comprometer nuestra calidad.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default NosotrosPage;