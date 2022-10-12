import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Howdy! My name is Dineshkumar from India.
            I love developing websites using front end technologies like HTML,CSS,Javascript,React and Redux.
            I have handson experience with building Front-end projects.
            I make things for web.
            </p>
        </div>
    </div>
  )
}

export default About