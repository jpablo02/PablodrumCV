"use client";

import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const nftImages = [
    "https://bafybeiac6cjqivfvx3zrmx3gdoojsvlse2a4ss5gqdpvgofj46vyjzkhzq.ipfs.dweb.link/?filename=Firefly%2520logotipo%2520en%2520png%25C2%25A0%2520de%2520pablodrum%2520un%2520artista%2520nft%2520amante%2520a%2520la%2520musica%2520y%2520los%2520videojuegos%252010768.jpg",
    "https://bafybeicneconorvw7rjzrgsnhsobm2bbjhfucyeowc3uhyy76oze5rppfe.ipfs.dweb.link/Firefly%20logotipo%20en%20png%C2%A0%20de%20pablodrum%20un%20artista%20nft%20amante%20a%20la%20musica%20y%20los%20videojuegos%2022970.jpg",
    "https://bafybeicneconorvw7rjzrgsnhsobm2bbjhfucyeowc3uhyy76oze5rppfe.ipfs.dweb.link/Firefly%20logotipo%20en%20png%C2%A0%20de%20pablodrum%20un%20artista%20nft%20amante%20a%20la%20musica%20y%20los%20videojuegos%2069709%20%281%29.jpg",
    "https://bafybeicneconorvw7rjzrgsnhsobm2bbjhfucyeowc3uhyy76oze5rppfe.ipfs.dweb.link/Firefly%20logotipo%20en%20png%C2%A0%20de%20pablodrum%20un%20artista%20nft%20amante%20a%20la%20musica%20y%20los%20videojuegos%207704%20%281%29.jpg",
  ];

  return (
    <>
      <div className="flex flex-col items-center pt-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="w-full py-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="text-6xl font-bold mb-4 animate-fade-in">I am Pablodrum</h1>
              <p className="text-2xl animate-fade-in">NFT artist & Web 3 builder</p>
            </div>

            {/* Perfil Section */}
            <div className="mb-20">
              <div className="card w-full md:w-1/2 bg-base-100 shadow-xl mx-auto animate-fade-in">
                <figure className="px-10 pt-10">
                  <Image
                    src="https://ipfs.io/ipfs/QmNrLNQzHts4Q44bjKCYtuWJEsXHs2L8f3MkUwYSapAuYU"
                    alt="Foto de perfil"
                    width={256}
                    height={256}
                    className="rounded-full z-20"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Juan Pablo Rios Betancur</h2>
                  <p>
                    Web 3 software developer specializing in the implementation of technologies such as TypeScript,
                    JavaScript, and Solidity. Skilled in deploying smart contracts on the Ethereum Virtual Machine and
                    integrating artificial intelligence tools like ChatGPT, Copilot, Leonardo AI, and Adobe FireFly into
                    development projects. Known for my creativity, initiative, leadership abilities, and interpersonal
                    skills, as well as a quick adaptation to new challenges. I aim to contribute to dynamic teams and
                    provide efficient support in an enriching development environment.
                  </p>
                  <div className="card-actions">
                    {nftImages.map((src, index) => (
                      <Image
                        key={index}
                        src={src}
                        alt={`NFT ${index + 1}`}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Habilidades Section */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6 text-center animate-fade-in">Personal & Technical Skills</h2>
              <div className="card bg-base-100 shadow-xl p-6 animate-fade-in">
                <div className="flex flex-col lg:flex-row justify-around">
                  <ul className="mb-4 lg:mb-0">
                    <li>Effective communication</li>
                    <li>Teamwork</li>
                    <li>Proactivity and efficiency</li>
                    <li>Organization and planning</li>
                    <li>Fast learning</li>
                    <li>Problem-solving</li>
                    <li>Creativity</li>
                  </ul>
                  <ul>
                    <li>Languages: JavaScript, Solidity.</li>
                    <li>Frameworks: NestJS, Angular, NextJS, Hardhat.</li>
                    <li>Tools: Metamask, PowerBI, Azure Data Factory.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Educación Section */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6 text-center animate-fade-in">Education</h2>
              <div className="card bg-base-100 shadow-xl p-6 animate-fade-in">
                <ul className="list-disc pl-5">
                  <li>2024 - Specialization in Development Onchain Dapps EducatETH (Arbitrum Foundation)</li>
                  <li>2023 - Software Development Technician CESDE</li>
                  <li>2013 - Music Informatics Technologist Instituto Tecnológico Metropolitano</li>
                  <li>2007 - Technical Bachelor Instituto Tecnológico Industrial Pascual Bravo</li>
                </ul>
              </div>
            </div>

            {/* Experiencia Section */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6 text-center animate-fade-in">Experience</h2>
              <div className="card bg-base-100 shadow-xl p-6 animate-fade-in">
                <ul className="list-disc pl-5">
                  <li>2024 - Frame Developer, Buildathon Frame It! I Farcaster y Arbitrum</li>
                  <li>2024 - Builder, Buidl Guild de Ethereum</li>
                  <li>Junior Consultant, SETI</li>
                  <li>Frontend Development of Internal Applications, Tools: Angular, NestJS, PowerBI, Azure</li>
                  <li>Audiovisual Producer, Universidad Pontificia Bolivariana</li>
                  <li>Production Team Leader, Creative Director, Filtro Estudio</li>
                  <li>
                    2013 - 2017 - Team leader and community project manager, Telecenters Dynamizer, Medellín City Hall
                  </li>
                  <li>Instructor and team leader, Tools: Microsoft Office, Google Workspace</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
