import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[url('https://media.istockphoto.com/id/1055012794/vector/vector-realistic-isolated-black-brick-wall-background-for-template-and-layout-decoration.jpg?s=612x612&w=0&k=20&c=FuWrqe1oYtoNVgaS2OtpCOB9WnSg5hCd2X0PHXhiqc8=')] min-h-screen p-8 mt-16">
      <div className="max-w-4xl mx-auto">
        
        <div className="relative z-10 my-20">
            <h1
                id="tituloo"
                className="text-4xl sm:text-6xl text-center font-extrabold tracking-tight leading-none text-gray-200 relative"
            >
                -- Sobre Nosotros --
            </h1>
                <span className="absolute inset-0 bg-[#46509c] opacity-30 blur-md rounded-lg -z-10"></span>
                <span className="absolute inset-0 bg-[#46509c] opacity-40 blur-md rounded-lg scale-105 transform -z-20"></span>
        </div>

        <div className="bg-black rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center mb-10 border-[#46509c] border-2">
          <img
            src="https://media-bog2-2.cdn.whatsapp.net/v/t61.24694-24/427588409_964877868011248_7711964683745159371_n.jpg?ccb=11-4&oh=01_Q5AaIBeboADQMWcEAvDH0QfZDkbcATm1RndfWZ4OaAFqKf06&oe=66CB325B&_nc_sid=5e03e0&_nc_cat=102"
            alt="nicolas"
            className="w-44 rounded-full shadow-lg mb-6 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">Nicolás Cevallos</h2>
            <p className="text-gray-300 mt-2">
              Nicolás es un desarrollador apasionado con más de 5 años de experiencia en el desarrollo de aplicaciones web.
              Le encanta trabajar con React y está siempre en busca de nuevos desafíos tecnológicos.
              Nicolás es un desarrollador apasionado con más de 5 años de experiencia en el desarrollo de aplicaciones web.
              Le encanta trabajar con React y está siempre en busca de nuevos desafíos tecnológicos.
            </p>
          </div>
        </div>

        <div className="bg-black rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center mb-10 border-[#46509c] border-2">
          <img
            src="https://media-bog2-2.cdn.whatsapp.net/v/t61.24694-24/293083456_1193965441174867_5807438222112515631_n.jpg?ccb=11-4&oh=01_Q5AaIMgrqpLrcMj28He85gvHtXTJNZxFQsqScACio-ytklq_&oe=66C3434D&_nc_sid=5e03e0&_nc_cat=111"
            alt="ivan"
            className="w-44 rounded-full shadow-lg mb-6 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">Ivan Peralta</h2>
            <p className="text-gray-300 mt-2">
              Ivan es un diseñador gráfico con un ojo único para los detalles. Ha trabajado en proyectos de diseño
              para múltiples marcas reconocidas y tiene un enfoque especial en la experiencia del usuario.
              Ivan es un diseñador gráfico con un ojo único para los detalles. Ha trabajado en proyectos de diseño
              para múltiples marcas reconocidas y tiene un enfoque especial en la experiencia del usuario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
