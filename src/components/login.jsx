import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen">
      <div className="flex min-h-full flex-col justify-center px-6 py-52 lg:px-8 bg-center bg-no-repeat bg-cover bg-[url('https://www.zmo.ai/wp-content/uploads/2023/09/360_F_410726461_FDpDfV4DBgKZDMHUkAXRbTQ5PmkkrGlx.jpg')] bg-gray-500 bg-blend-multiply">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto rounded-lg" src="https://st2.depositphotos.com/4013359/6501/v/450/depositphotos_65014209-stock-illustration-pet-shop-logo.jpg" alt="Your Company"/>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Inicia Sesión con tu Cuenta</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Correo Electrónico</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Contraseña</label>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-[#46509c] hover:bg-[#4b57b3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar Sesión</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-white">
            No tienes cuenta?
            <Link to="/register" className="text-blue-700 focus:outline-none focus:underline hover:underline ml-2">
              ¡Regístrate gratis!
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
