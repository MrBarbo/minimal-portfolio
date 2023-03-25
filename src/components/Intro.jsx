import React from 'react';
import pic from '../../profile.jpg'

function Intro() {
   return (
      <div className='flex flex-row'>
         <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Iván Barboza</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Estudiante Ingeniería en Sistemas de Información</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
            Soy Estudiante de Ingeniería en Sistemas de Información en mi último año. Tengo la creencia de que el progreso y la felicidad de las personas deben ser el foco del trabajo. Constantemente descubriendo y aprendiendo nuevas oportunidades y tecnologías, incluyendo la inteligencia artificial, el análisis de datos y la programación.
            </p>
         </div>
         <div className='mt-20 ml-20 w-1/5 h-1/5 border border-gray-1 inline-block'><img src={pic} alt="My Picture" className="object-contain w-full h-full"/></div>
      </div>
   )
}

export default Intro;