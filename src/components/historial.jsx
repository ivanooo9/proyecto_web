import React from 'react';

const Historial = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6 mt-16">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                {/* Header Section */}
                <div className="flex items-center space-x-6">
                    <img
                        src="https://static.wixstatic.com/media/34e812_826572739aa14ecaa00291399634f9f1~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/34e812_826572739aa14ecaa00291399634f9f1~mv2.jpg"
                        alt="Pet"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                        <div className="relative z-10">
                            <h1
                                id="tituloo"
                                className="text-4xl sm:text-5xl text-center font-extrabold tracking-tight leading-none text-black relative"
                            >
                                Max
                            </h1>
                            <span className="absolute inset-0 bg-[#46509c] opacity-30 blur-md rounded-lg -z-10"></span>
                            <span className="absolute inset-0 bg-[#46509c] opacity-40 blur-md rounded-lg scale-105 transform -z-20"></span>
                        </div>
                        <p className="text-black pt-4">Golden Retriever</p>
                    </div>
                </div>

                {/* Health History Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold text-black mb-4">Historial de Salud</h3>
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-semibold text-gray-700">Vacuna de Rabia</h4>
                            <p className="text-gray-600">Fecha: 12 de Marzo, 2023</p>
                            <p className="text-gray-600">Notas: Vacuna anual administrada sin complicaciones.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-semibold text-gray-700">Examen General</h4>
                            <p className="text-gray-600">Fecha: 10 de Enero, 2023</p>
                            <p className="text-gray-600">Notas: Salud en general buena. Recomendación de dieta baja en grasas.</p>
                        </div>
                        {/* Agregar más registros de salud si es necesario */}
                    </div>
                </div>

                {/* Veterinary Visits Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold text-black mb-4">Visitas al Veterinario</h3>
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-semibold text-gray-700">Clínica Veterinaria Central</h4>
                            <p className="text-gray-600">Fecha: 15 de Febrero, 2023</p>
                            <p className="text-gray-600">Motivo: Chequeo después de la vacuna de rabia.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-semibold text-gray-700">Veterinaria Amigos de los Animales</h4>
                            <p className="text-gray-600">Fecha: 22 de Octubre, 2022</p>
                            <p className="text-gray-600">Motivo: Limpieza dental y control de peso.</p>
                        </div>
                        {/* Agregar más registros de visitas al veterinario si es necesario */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Historial;
