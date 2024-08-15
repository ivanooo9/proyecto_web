import React from 'react';
import { Link } from 'react-router-dom';

const Citas = () => {
    return (
        <div className="min-h-screen bg-gray-200 py-16 mt-16">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <div className="relative z-10">
                    <h1
                        id="tituloo"
                        className="text-4xl sm:text-5xl mb-14 text-center font-extrabold tracking-tight leading-none text-black relative"
                    >
                        Recordatorio de vacunas y revisiones
                    </h1>
                    <span className="absolute inset-0 bg-[#46509c] opacity-30 blur-md rounded-lg -z-10"></span>
                    <span className="absolute inset-0 bg-[#46509c] opacity-40 blur-md rounded-lg scale-105 transform -z-20"></span>
                </div>

                <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-xl font-bold text-black">Vacuna Antirrábica</h2>
                            <span className="text-sm text-red-600">Vencido hace 2 días</span>
                        </div>
                        <p className="text-gray-600">Fecha programada: 12/08/2024</p>
                        <p className="text-gray-600">Estado: No administrada</p>
                        <div className="mt-4 text-right">
                            <button className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700">Actualizar</button>
                        </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-xl font-bold text-black">Revisión General</h2>
                            <span className="text-sm text-yellow-500">Próximo en 3 días</span>
                        </div>
                        <p className="text-gray-600">Fecha programada: 20/08/2024</p>
                        <p className="text-gray-600">Estado: Pendiente</p>
                        <div className="mt-4 text-right">
                            <button className="py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">Actualizar</button>
                        </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-xl font-bold text-black">Vacuna Triple</h2>
                            <span className="text-sm text-green-600">Próximo en 10 días</span>
                        </div>
                        <p className="text-gray-600">Fecha programada: 27/08/2024</p>
                        <p className="text-gray-600">Estado: Pendiente</p>
                        <div className="mt-4 text-right">
                            <button className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700">Actualizar</button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center text-center">
                    <Link to="/recordatorio" className="w-full py-3 px-5 bg-[#46509c] text-white font-medium text-lg rounded-lg hover:bg-[#4652b0]">Agregar nuevo recordatorio</Link>
                </div>
            </div>
        </div>
    );
}

export default Citas;
