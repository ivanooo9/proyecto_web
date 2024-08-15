import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-black text-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://st2.depositphotos.com/4013359/6501/v/450/depositphotos_65014209-stock-illustration-pet-shop-logo.jpg"
              className="rounded-lg h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              RegistroV
            </span>
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className='space-x-4'>
              <Link
                to="/login"
                className="sm:inline-flex hidden text-white bg-[#46509c] hover:bg-[#317c95] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="sm:inline-flex hidden text-white bg-[#46509c] hover:bg-[#317c95] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Registrarse
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? '' : 'hidden'}`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white rounded sm:bg-transparent sm:text-[#46509c] sm:p-0 hover:bg-[#46509c] sm:hover:bg-transparent"
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  to="/mascotas"
                  className="block py-2 px-3 text-white rounded hover:bg-[#46509c] sm:hover:bg-transparent sm:hover:text-[#46509c] sm:p-0 "
                >
                  Mascotas
                </Link>
              </li>

              <li>
                <Link
                  to="/citas"
                  className="block py-2 px-3 text-white rounded hover:bg-[#46509c] sm:hover:bg-transparent sm:hover:text-[#46509c] sm:p-0"
                >
                  Citas
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-white rounded hover:bg-[#46509c] sm:hover:bg-transparent sm:hover:text-[#46509c] sm:p-0"
                >
                  Acerca de Nosotros
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="sm:hidden block py-2 px-3 text-white rounded hover:bg-[#46509c] sm:hover:bg-transparent sm:hover:text-[#46509c] sm:p-0"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="sm:hidden block py-2 px-3 text-white rounded hover:bg-[#46509c] sm:hover:bg-transparent sm:hover:text-[#46509c] sm:p-0"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
