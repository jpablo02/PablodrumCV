"use client";

import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const nftImages = [
    //"https://ipfs.io/ipfs/QmSYhfAAB3XsuoenAqByV3aGApx9U7i2CRo7UFT28NXU13",

    //"https://ipfs.io/ipfs/QmTNC7d8BXRLTbNvjosHCwcBwCipBHTpoP8mKnTJiPDy4T",
    //"https://ipfs.io/ipfs/QmNdZHRtxdDMxSaRHJYCUkx7BscByJfB8xuhmuU4RHrbts",

    //"https://ipfs.io/ipfs/Qmeb9ffEAa8uKe4UbypqDpushp9h1mqX4u9TbQ7GtY3cWj",
    //"https://ipfs.io/ipfs/QmQTF7RNW4h5wux2iCxPN5SE3Zab3AVwmknP9XG2mDwBbg",
    //"https://ipfs.io/ipfs/QmVXhyuT5WFbSdLqecBXey236XQMWxAZPgFkxmvkW2nUQ3",
    // "https://ipfs.io/ipfs/QmXCs3HMcqWmJ89ZgU9CcwdVWJHKW3nZ83dBtub9NdR1d6",
    //"https://ipfs.io/ipfs/QmRRcBSeW8BbS6qbtxrusnh5eXiBecGBg67o2hQHyjyXgk",
    //"https://ipfs.io/ipfs/QmbpM8sEYUFxnYCXyLdcjuhEq7UNaPMGsSQ53BmorNGNxR",
    "https://bafybeiac6cjqivfvx3zrmx3gdoojsvlse2a4ss5gqdpvgofj46vyjzkhzq.ipfs.dweb.link/?filename=Firefly%2520logotipo%2520en%2520png%25C2%25A0%2520de%2520pablodrum%2520un%2520artista%2520nft%2520amante%2520a%2520la%2520musica%2520y%2520los%2520videojuegos%252010768.jpg",
    "https://ipfs.io/ipfs/QmPh1Lc9gjgZeZt5BXdxDS5itBg5EnfKzoyFH5mWTBxoVL",
    "https://bafybeicneconorvw7rjzrgsnhsobm2bbjhfucyeowc3uhyy76oze5rppfe.ipfs.dweb.link/Firefly%20logotipo%20en%20png%C2%A0%20de%20pablodrum%20un%20artista%20nft%20amante%20a%20la%20musica%20y%20los%20videojuegos%2022970.jpg",
    "https://bafybeicneconorvw7rjzrgsnhsobm2bbjhfucyeowc3uhyy76oze5rppfe.ipfs.dweb.link/Firefly%20logotipo%20en%20png%C2%A0%20de%20pablodrum%20un%20artista%20nft%20amante%20a%20la%20musica%20y%20los%20videojuegos%2069709%20%281%29.jpg",
    "https://ipfs.io/ipfs/QmSYhfAAB3XsuoenAqByV3aGApx9U7i2CRo7UFT28NXU13",
    "https://bafybeicneconorvw7rjzrgsnhsobm2bbjhfucyeowc3uhyy76oze5rppfe.ipfs.dweb.link/Firefly%20logotipo%20en%20png%C2%A0%20de%20pablodrum%20un%20artista%20nft%20amante%20a%20la%20musica%20y%20los%20videojuegos%207704%20%281%29.jpg",
  ];

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="w-full py-10">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h1 className="text-6xl font-bold mb-4 animate-fade-in">I´am Pablodrum</h1>
              <p className="text-2xl animate-fade-in">NFT artist & Web 3 builder</p>
            </div>

            {/* Perfil Section */}
            <div className="mb-20">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center animate-fade-in relative overflow-hidden">
                <div className="w-96 h-96 mb-6 bg-black rounded-full flex items-center justify-center relative">
                  <Image
                    src="https://ipfs.io/ipfs/QmNrLNQzHts4Q44bjKCYtuWJEsXHs2L8f3MkUwYSapAuYU"
                    alt="Foto de perfil"
                    width={256}
                    height={256}
                    className="rounded-full z-20" // Ensure profile image is on top
                  />
                  {nftImages.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`NFT ${index + 1}`}
                      width={64}
                      height={64}
                      className="rounded-full absolute"
                      style={{
                        transform: `rotate(${(index / nftImages.length) * 360}deg) translate(200px) rotate(-${
                          (index / nftImages.length) * 360
                        }deg)`,
                        zIndex: 10, // Ensure NFT images are behind the profile image
                      }}
                    />
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-lg">
                    Web 3 software developer specializing in the implementation of technologies such as TypeScript,
                    JavaScript, and Solidity. Skilled in deploying smart contracts on the Ethereum Virtual Machine and
                    integrating artificial intelligence tools like ChatGPT, Copilot, Leonardo AI, and Adobe FireFly into
                    development projects. Known for my creativity, initiative, leadership abilities, and interpersonal
                    skills, as well as a quick adaptation to new challenges. I aim to contribute to dynamic teams and
                    provide efficient support in an enriching development environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Habilidades Section */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6 text-center animate-fade-in">Personal & Technical Skills</h2>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in">
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
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in">
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
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in">
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
