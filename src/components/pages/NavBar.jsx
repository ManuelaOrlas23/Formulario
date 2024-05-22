import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-pink-500 p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <span className="text-white text-lg font-semibold">Formulario Registro Proveedores</span>
                    <div>
                        <ul className="flex space-x-4">
                            <li>
                                <Link to='/registroProveedor' className="text-pink-100 hover:text-white">Registrar un proveedor</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
