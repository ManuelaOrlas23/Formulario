import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const RegistroProveedor = () => {
    const [proveedores, setProveedores] = useState({
        tipoPersona: '',
        nit: '',
        nombreRazonSocial: '',
        representanteLegal: '',
        telefono: '',
        correo: '',
        ciudad: '',
        pais: '',
        departamento: '',
        direccion: '',
        archivoRut: null
    });

    const handleChange = (e) => {
        setProveedores({
            ...proveedores,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setProveedores({
            ...proveedores,
            archivoRut: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            for (const key in proveedores) {
                formData.append(key, proveedores[key]);
            }
            await axios.post('localhost:8080/demo/v1/proveedor', formData);
            Swal.fire({
                title: "Bienvenido Proveedor!",
                text: "Su registro ha sido exitoso",
                icon: "success",
            });
        } catch (error) {
            Swal.fire({
                title: "Error de registro",
                text: "Hubo un error al registrar el proveedor, revisa tus datos ingresados ",
                icon: "error",
            });
        }
    };

    return (
        <div className="min-h-screen bg-pink-50 flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl font-semibold text-center text-pink-600 mb-6">Registro Proveedores</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="tipoPersona" className="block text-gray-700">Tipo de persona</label>
                        <input type="text" name="tipoPersona" id="tipoPersona" value={proveedores.tipoPersona} onChange={handleChange} className="mt-1 block w-full bg-pink-100 border border-pink-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="nit" className="block text-gray-700">Nit:</label>
                        <input type="text" name="nit" id="nit" value={proveedores.nit} onChange={handleChange} className="mt-1 block w-full bg-pink-100 border border-pink-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="nombreRazonSocial" className="block text-gray-700">Nombre Razon Social:</label>
                        <input type="text" name="nombreRazonSocial" id="nombreRazonSocial" value={proveedores.nombreRazonSocial} onChange={handleChange} className="mt-1 block w-full bg-pink-100 border border-pink-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="representanteLegal" className="block text-gray-700">Nombre Representante Legal:</label>
                        <input type="text" name="representanteLegal" id="representanteLegal" value={proveedores.representanteLegal} onChange={handleChange} className="mt-1 block w-full bg-pink-100 border border-pink-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="telefono" className="block text-gray-700">Teléfono:</label>
                        <input type="text" name="telefono" id="telefono" value={proveedores.telefono} onChange={handleChange} className="mt-1 block w-full bg-pink-100 border border-pink-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="correo" className="block text-gray-700">Correo:</label>
                        <input type="email" name="correo" id="correo" value={proveedores.correo} onChange={handleChange} className="mt-1 block w-full bg-pink-100 border border-pink-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pais" className="block text-gray-700">País:</label>
                        <select name="pais" id="pais" value={proveedores.pais} onChange={handleChange} className="mt-1 block w-full bg-pink-100 border border-pink-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm">
                            <option value="">Seleccione</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Peru">Perú</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ciudad" className="block text-gray-700">Ciudad:</label>
                        <select name="ciudad" id="ciudad" value={proveedores.ciudad} onChange={handleChange} className="mt-1 block w-full bg-pink-100 border border-pink-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm">
                            <option value="">Seleccione</option>
                            <option value="Medellin">Medellín</option>
                            <option value="Arequipa">Arequipa</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="departamento" className="block text-gray-700">Departamento:</label>
                        <select name="departamento" id="departamento" value={proveedores.departamento} onChange={handleChange} className="mt-1 block w-full bg-pink-100 border border-pink-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm">
                            <option value="">Seleccione</option>
                            <option value="Antioquia">Antioquia</option>
                            <option value="Lima">Lima</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="direccion" className="block text-gray-700">Dirección:</label>
                        <input type="text" name="direccion" id="direccion" value={proveedores.direccion} onChange={handleChange} className="mt-1 block w-full bg-pink-100 border border-pink-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="archivoRut" className="block text-gray-700">Cargar RUT (Archivo PDF):</label>
                        <input type="file" id="archivoRut" name="archivoRut" onChange={handleFileChange} className="mt-1 block w-full text-gray-700 bg-pink-100 border border-pink-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"/>
                    </div>
                    <button type="submit" className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">Registrar Proveedor</button>
                </form>
            </div>
        </div>
    );
};

export default RegistroProveedor;
