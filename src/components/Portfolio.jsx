import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
   return (
      <div className='flex flex-col mt-40 items-center'>
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Proyectos</h1>
         <div className="flex flex-col md:flex-row items-center justify-center mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {portfolio.map(project => (
                  <PortfolioItem 
                     imgUrl={project.imgUrl}
                     title={project.title}
                     stack={project.stack}
                     link={project.link}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

export default Portfolio;