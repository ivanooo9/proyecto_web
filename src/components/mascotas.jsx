import React from 'react'
import { Link } from 'react-router-dom';

const opciones = [
    {
        imageUrl: "https://static.wixstatic.com/media/34e812_826572739aa14ecaa00291399634f9f1~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/34e812_826572739aa14ecaa00291399634f9f1~mv2.jpg",
        name: "Golden Retriever",
        description: "Breve descripcion sobre esto",
        historial: "/historial",
    },
    {
        imageUrl: "https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09german20shepherd.jpg?itok=V8iRVUvy",
        name: "Pastor Aleman",
        description: "Breve descripcion sobre esto",
        historial: "#",
    },
    {
        imageUrl: "https://www.infobae.com/new-resizer/P079HAaGWObIilIcGHNg3LCPLao=/1440x1440/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/10/31161633/1155.jpg",
        name: "Pitbull",
        description: "Breve descripcion sobre esto",
        historial: "#",
    },
    {
        imageUrl: "https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09Siberian20Husky.jpg?itok=JMtF4wzk",
        name: "Lobo Siberiano",
        description: "Breve descripcion sobre esto",
        historial: "/historial",
    },
    
];

const Mascotas = () => {
    return (
        <div className="mt-16 bg-cover bg-[url('https://i.ytimg.com/vi/HPph35tdMP8/maxresdefault.jpg')] ">
            <div className='relative flex flex-col items-center py-28 sm:px-0 px-6'>

                <div className="relative z-10">
                    <h1
                        id="tituloo"
                        className="text-4xl sm:text-6xl text-center font-extrabold tracking-tight leading-none text-white relative"
                    >
                        Registro de Mascotas
                    </h1>
                    <span className="absolute inset-0 bg-[#46509c] opacity-30 blur-md rounded-lg -z-10"></span>
                    <span className="absolute inset-0 bg-[#46509c] opacity-40 blur-md rounded-lg scale-105 transform -z-20"></span>
                </div>

                <div className='py-10 text-lg text-white'>
                    <p>En este apartado encontraremos el registro del historial de las mascotas en cuanto a su salud y sus visitas al veterinario.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-8">
                    {opciones.map((item, index) => (
                        <div key={index} className="max-w-52 bg-white border-2 border-[#46509c] rounded-lg shadow">
                            <a href="#">
                                <img className="rounded-t-lg" src={item.imageUrl} alt={item.name} />
                            </a>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{item.name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">{item.description}</p>
                                <Link to={item.historial} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#46509c] rounded-lg hover:bg-[#4956bc] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                    Ver Historial
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mascotas;
