import React from 'react';
import myPicture from '../../Images/AboutMe/me.JPG'

const About = () => {
    return (
        <div className='bg-secondary'>
            <h2 className='text-center'>About me</h2>
            <div className='row  mx-5 container '>
                <div className='col-12 col-lg-6 '>
                       <div className='border  w-50 mx-auto'>
                       <img className='img-fluid ' src={myPicture} alt="" />
                       </div>
                       <h4 className='text-center'>IShtiaq Uddin</h4>
                </div>
                <div className='col-12 col-lg-6'>
                    <h4>My goal: </h4>
                    <p>I am a student of CSE . My dream is to be a mern stack web developer in 2 years and join a multinational company to gather experiment . I will try to give a company by gaining some experience by working there.</p>
                </div>
            </div>
        </div>
    );
};

export default About;