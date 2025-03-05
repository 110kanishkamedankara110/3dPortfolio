import React, { useState } from "react";
import Skeleton from "../models/Skeleton";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ConsoleContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen  text-green-400 flex justify-center items-center m-5">
      <div style={{backgroundColor:' rgba(0,0,0,0.4)',backdropFilter: "blur(20px)",}} className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8 borde rounded-lg">
        <div className="space-y-4" >
          <div className="mb-4">
            <h2 className="text-lg text-green-400">~/contact-me</h2><br/>
            <p className="text-sm text-gray-400">
              // Enter your details to send a message
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-green-300 m-2"
              >
                _Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800 text-[#66d1a2] p-2 border-b-2 border-[#66d1a2] focus:outline-none focus:ring-0"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-green-300 m-2"
              >
                _Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 text-[#66d1a2] p-2 border-b-2 border-[#66d1a2] focus:outline-none focus:ring-0"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-green-300 m-2"
              >
                _Message:
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-800 text-[#66d1a2] p-2 border-b-2 border-[#66d1a2] focus:outline-none focus:ring-0"
                placeholder="Type your message here..."
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-gray-800 text-green-400 border border-[#66d1a2] rounded hover:bg-green-500 hover:text-gray-900 transition duration-200"
              >
                _Send
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full h-full bg-gray-800 border border-[#66d1a2] flex items-center justify-center">
            
              <Canvas
                style={{
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
                gl={{ antialias: false }}
                className="flex justify-start absolute  w-full h-full"
                position={[0, 0, 0]}
              >
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={1} />
                <hemisphereLight
                  groundColor="#000000"
                  color="#FFFFFF"
                  intensity={1}
                />
              <OrbitControls/>
                <Skeleton scale={[3,3,3]} position={[0,-3,0]}/>
              </Canvas>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsoleContactForm;
