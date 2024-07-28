import React, { useState } from 'react';
import './index.css'; // Ensure this path is correct
import Lamp from './images/lamp.png';
import Light from './images/light.png';

function App() {
    const [isActive, setIsActive] = useState(false);

    const toggleBtn = () => {
        setIsActive(prev => !prev);
    };

    return (
        <div className="bg-gray-900 w-full text-white h-screen flex flex-col justify-between items-center">
            <nav className="w-full bg-gray-950 bg-opacity-20 flex justify-between items-center p-5">
                <p className="text-2xl">Hint</p>
            </nav>

            <div className="flex flex-col md:flex-row justify-center items-center w-full p-4 flex-grow">
                <div className="flex flex-col items-center justify-center relative mb-8 md:mb-0 w-full md:w-1/2 lg:w-1/3">
                    <img src={Lamp} className="w-1/5 md:w-1/4 lg:w-1/6" alt="Lamp" />
                    <button 
                        className="switcher bg-orange-500 absolute top-2 right-2 lg:hidden block mb-4 text-white py-2 px-5 w-auto rounded-full hover:bg-opacity-50 shadow" 
                        onClick={toggleBtn}>
                        <i className='text-[2rem]' >{isActive ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8,9c-1.628,0-3,1.372-3,3s1.372,3,3,3s3-1.372,3-3S9.628,9,8,9z"></path><path d="M16,6H8c-3.3,0-5.989,2.689-6,6v0.016C2.009,15.316,4.699,18,8,18h8c3.303,0,5.995-2.688,6-5.994c0-0.002,0-0.004,0-0.006 C21.991,8.691,19.301,6,16,6z M16,16H8c-2.202,0-3.996-1.792-4-3.99C4.004,9.799,5.798,8,8,8h8c2.202,0,3.996,1.799,4,4.006 C19.996,14.208,18.202,16,16,16z M20,12.016l0.443-0.004L21,12.016H20z"></path></svg> : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16,9c-1.628,0-3,1.372-3,3s1.372,3,3,3s3-1.372,3-3S17.628,9,16,9z"></path><path d="M16,6H8c-3.296,0-5.982,2.682-6,5.986C2,11.991,2,11.995,2,12v0.016c0,0.004,0,0.008,0,0.012C2.015,15.322,4.703,18,8,18h8 c3.309,0,6-2.691,6-6S19.309,6,16,6z M16,16H8c-2.202,0-3.996-1.792-4-3.99C4.004,9.799,5.798,8,8,8h8c2.206,0,4,1.794,4,4 S18.206,16,16,16z"></path></svg> }</i>
                    </button>
                    <div className="relative w-full mt-4">
                        <img src={Light} className={`w-full transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} alt="Light" />
                        <div className={`hint absolute inset-0 flex items-center justify-center w-1/2 m-auto rounded-lg text-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-white px-4">"Combining tech and event management for an innovative experience"</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-md text-center lg:block hidden w-full md:w-1/2 lg:w-1/3">
                    <h1 className="text-4xl md:text-5xl font-light mb-4">Exclusive Hint</h1>
                    <p className="mb-4">Turn {isActive ? 'OFF' : 'ON'} the light</p>
                    <button className="switcher bg-orange-500 text-white py-2 px-5 w-[40%] rounded-full hover:bg-opacity-50 shadow" onClick={toggleBtn}>
                    <span>Turn</span> <span className=' font-bold' >{isActive ? 'OFF' : 'ON'}</span>
                    </button>
                </div>
            </div>

            <footer className="footer text-center p-2 bg-gray-900 text-cyan-100 w-full">
                <p>Coming@Soon.com</p>
            </footer>
        </div>
    );
}

export default App;
