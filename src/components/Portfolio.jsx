import React from "react";
import chatapp from '../assets/portfolio/chatapp.png'
import lyriks from '../assets/portfolio/lyriks-music-site.jpg'
import netflix from '../assets/portfolio/netflix-clone.png'


const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={lyriks}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href="https://lyriks-music-website.netlify.app/" target='_blank' rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                  Demo
                </a>
                <a href="https://github.com/Dineshkumar082/lyriks-music-website" target='_blank' rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                  Code
                </a>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={netflix}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href="https://netflix-8e1fe.web.app/" target='_blank' rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                  Demo
                </a>
                <a href="https://github.com/Dineshkumar082/Movie-app-netflix" target='_blank' rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                  Code
                </a>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={chatapp}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href="https://chatapp-7989d.web.app/" target='_blank' rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                  Demo
                </a>
                <a href="https://github.com/Dineshkumar082/chatapp" target='_blank' rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                  Code
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;