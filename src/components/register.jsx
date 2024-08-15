import React from 'react'

const Register = () => {
    return (
        <div className='mt-16'>
            <div className="max-w-4xl mx-auto font-[sans-serif] p-6 py-20">

                <div className="text-center mb-16">
                    <img src="https://i.pinimg.com/736x/2a/94/6b/2a946b63ffd905eaff9536c4224e82ed.jpg" alt="logo" className='w-48 inline-block rounded-2xl' />
                    <h4 className="text-black text-2xl font-semibold mt-6">Crea una nueva cuenta</h4>
                </div>

                <form>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                            <label className="text-black text-sm mb-2 block">Nombres</label>
                            <input name="name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Ingrese sus nombres" />
                        </div>
                        <div>
                            <label className="text-black text-sm mb-2 block">Apellidos</label>
                            <input name="lname" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Ingrese sus apellidos" />
                        </div>
                        <div>
                            <label className="text-black text-sm mb-2 block">Email</label>
                            <input name="email" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Ingrese su email" />
                        </div>
                        <div>
                            <label className="text-black text-sm mb-2 block">Teléfono</label>
                            <input name="number" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Ingrese su telófono" />
                        </div>
                        <div>
                            <label className="text-black text-sm mb-2 block">Contraseña</label>
                            <input name="password" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Ingrese su contraseña" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Confirme Contraseña</label>
                            <input name="cpassword" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Vuelva a ingresar su contraseña" />
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <button type="button" className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-[#46509c] hover:bg-[#4b57b3] focus:outline-none">
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
