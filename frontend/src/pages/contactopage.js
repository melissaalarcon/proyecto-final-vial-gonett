import React, {useState, useEffect} from 'react';
import '../styles/components/pages/contactopage.css'
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre:'',
        apellido: '',
        telefono: '',
        email: '',
        mensaje: '',
        provincia: '',
        municipio: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);
    const [provincias, setProvincias] = useState([]);
    const [municipios, setMunicipios] = useState([]);

    useEffect(() => {
        fetchProvincias();
    }, []);

    const fetchProvincias = async () => {
        try {
            const response = await axios.get('https://apis.datos.gob.ar/georef/api/provincias');
            setProvincias(response.data.provincias);
            var provinciaActual = response.data.provincias[0].id.toString()
            setFormData((oldData) => ({
                ...oldData,
                provincia: provinciaActual,
            }));
            fetchMunicipios(provinciaActual);

        } catch (error) {
            console.error('Error al cargar las provincias', error);
        }
    }
    const fetchMunicipios = async (provincia) => {
        try {
            const response = await axios.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}&max=100`);
            setMunicipios(response.data.municipios);
        } catch (error) {
            console.error('Error al cargar las municipios', error);
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
        if (name === 'provincia') {
            fetchMunicipios(value);
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="h04">
            <div className="container-formulario text-center p-4">
                <div className="plantilla-contacto">
                    <h4>¿Te interesa contratar nuestros servicios?</h4>
                    <h5>Dejanos tu información para ponernos en contacto.</h5>

                <form class="row g-3" onSubmit={handleSubmit}>
                    <div class="col-md-6">
                        <label for="First name" class="form-label">Nombre</label>
                        <input type="text" name='nombre' value={formData.nombre} onChange={handleChange} class="form-control" placeholder="Nombre" aria-label="First name"/>
                    </div>
                    <div class="col-md-6">
                        <label for="Last name" class="form-label">Apellido</label>
                        <input type="text" name='apellido' value={formData.apellido} onChange={handleChange} class="form-control" placeholder="Apellido" aria-label="Last name"/>
                    </div>
                    <div class="col-md-4">
                        <label for="phoneNumber" class="form-label">Número de teléfono</label>
                        <input type="tel" name='telefono' value={formData.telefono} onChange={handleChange} class="form-control" id="phoneNumber" placeholder="+ Código de área"/>
                    </div>
                    <div class="col-md-4">
                        <label for="inputCity" class="form-label">Provincia</label>
                        <select id="inputState" name="provincia" value={formData.provincia} onChange={handleChange} className="form-select">
                            <option value="" disabled>Elegí...</option>
                                {provincias.map((provincia) => (
                                <option key={provincia.id} value={provincia.id.toString()}>
                                    {provincia.nombre}</option>
                                ))}
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">Municipio</label>
                        <select id="inputState" class="form-select" name="municipio" value={formData.municipio} onChange={handleChange}>
                            <option value="" disabled>Elegí...</option>
                                {municipios.map((municipio) => (
                                <option key={municipio.id} value={municipio.id.toString()}>
                                    {municipio.nombre}</option>
                                ))}
                        </select>
                    </div>
                    <div class="col-12">
                        <label for="mailAddress" class="form-label">Email</label>
                        <input type="text" name='email' value={formData.email} onChange={handleChange} class="form-control" id="mailAdress" placeholder="@gmail.com"/>
                    </div>
                    <div class="col-12">
                        <div class="col-md-12">
                            <label class="form-label">Comentario</label>
                            <textarea class="form-control" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </div>
                    </div>

                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}

                    <div class="col-12">
                        <button type="submit" class="btn btn-outline-light">Enviar</button></div>
                </form>
                </div>

                <div class="info-contacto">
                    <h4>VIAL GONETT</h4>
                    <ul class="empresa">
                        <li><i class="fa fa-mobile">+54 9 11 3626-6745</i></li>
                        <li><i class="fa fa-phone">2053-9783</i></li>
                        <li><i class="fa fa-envelope">vialgonett@gmail.com</i></li>
                    </ul>
                </div>

            </div>
        </main>
    );
}

export default ContactoPage;