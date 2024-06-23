"use client";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="w-full bg-black text-white py-10">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h1 className="text-4xl font-bold mb-4">Bienvenido a Mi Landing Page</h1>
              <p className="mb-4">Aquí puedes establecer un nuevo propietario para tu contrato inteligente.</p>
              <h2 className="card-title">Set new owner</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary w-full text-white">Set</button>
              </div>
            </div>

            {/* Perfil Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Perfil</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p>Aquí va tu foto y una pequeña descripción de quien eres.</p>
              </div>
            </div>

            {/* Habilidades Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p>Aquí van tus habilidades técnicas y habilidades blandas.</p>
              </div>
            </div>

            {/* Educación Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Educación</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p>Aquí va tu educación.</p>
              </div>
            </div>

            {/* Experiencia Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4">Experiencia</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p>Aquí va tu experiencia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
