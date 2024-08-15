import React from 'react';

const Recordatorio = () => {
    return (
        <div className="min-h-screen bg-gray-200 py-20 mt-16">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <div className="relative z-10">
                    <h1
                        id="tituloo"
                        className="text-4xl sm:text-5xl mb-14 text-center font-extrabold tracking-tight leading-none text-black relative"
                    >
                        Agregar nuevo recordatorio
                    </h1>
                    <span className="absolute inset-0 bg-[#46509c] opacity-30 blur-md rounded-lg -z-10"></span>
                    <span className="absolute inset-0 bg-[#46509c] opacity-40 blur-md rounded-lg scale-105 transform -z-20"></span>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <form>
                        <div className="mb-6">
                            <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre del Recordatorio</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#46509c]"
                                placeholder="Ej. Vacuna Antirrábica"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="fecha" className="block text-gray-700 font-medium mb-2">Fecha Programada</label>
                            <input
                                type="date"
                                id="fecha"
                                name="fecha"
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#46509c]"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="notas" className="block text-gray-700 font-medium mb-2">Notas Adicionales</label>
                            <textarea
                                id="notas"
                                name="notas"
                                rows="4"
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#46509c]"
                                placeholder="Escribe cualquier detalle adicional aquí..."
                            ></textarea>
                        </div>

                        <div className="text-right flex justify-center">
                            <button
                                type="submit"
                                className="py-3 px-6 bg-[#46509c] text-white font-medium rounded-lg hover:bg-[#4b58bc] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Guardar Recordatorio
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Recordatorio;
