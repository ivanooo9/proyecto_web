import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <section className="mt-16 bg-center bg-no-repeat bg-[url('https://static.vecteezy.com/system/resources/previews/007/023/595/non_2x/pet-footprints-horizontal-seamless-pattern-animal-print-gold-prints-of-tracks-of-a-cat-dog-on-a-black-background-pet-paw-print-silhouettes-cute-texture-vector.jpg')] bg-gray-500 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Monitoreo de Salud para Mascotas
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Esta aplicacion permite a los dueños de mascotas llevar un registro de la salud y las visitas al veterinario de sus mascotas.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              to="/mascotas"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#46509c] hover:bg-[#317c95] focus:ring-4 focus:ring-blue-300"
            >
              Ver Mascotas
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
