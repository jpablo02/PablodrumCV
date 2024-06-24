// components/ProfileSection.tsx
import Image from "next/image";

const ProfileSection = () => {
  const nftImages = [
    "https://bafybeiac6cjqivfvx3zrmx3gdoojsvlse2a4ss5gqdpvgofj46vyjzkhzq.ipfs.dweb.link/?filename=Firefly%2520logotipo%2520en%2520png%25C2%25A0%2520de%2520pablodrum%2520un%2520artista%2520nft%2520amante%2520a%2520la%2520musica%2520y%2520los%2520videojuegos%252010768.jpg",
    "https://bafybeicneconorvw7rjzrgsnhsobm2bbjhfucyeowc3uhyy76oze5rppfe.ipfs.dweb.link/Firefly%20logotipo%20en%20png%C2%A0%20de%20pablodrum%20un%20artista%20nft%20amante%20a%20la%20musica%20y%20los%20videojuegos%2022970.jpg",
    "https://bafybeicneconorvw7rjzrgsnhsobm2bbjhfucyeowc3uhyy76oze5rppfe.ipfs.dweb.link/Firefly%20logotipo%20en%20png%C2%A0%20de%20pablodrum%20un%20artista%20nft%20amante%20a%20la%20musica%20y%20los%20videojuegos%2069709%20%281%29.jpg",
    "https://bafybeicneconorvw7rjzrgsnhsobm2bbjhfucyeowc3uhyy76oze5rppfe.ipfs.dweb.link/Firefly%20logotipo%20en%20png%C2%A0%20de%20pablodrum%20un%20artista%20nft%20amante%20a%20la%20musica%20y%20los%20videojuegos%207704%20%281%29.jpg",
  ];

  return (
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
            Web 3 software developer specializing in the implementation of technologies such as TypeScript, JavaScript,
            and Solidity. Skilled in deploying smart contracts on the Ethereum Virtual Machine and integrating
            artificial intelligence tools like ChatGPT, Copilot, Leonardo AI, and Adobe FireFly into development
            projects. Known for my creativity, initiative, leadership abilities, and interpersonal skills, as well as a
            quick adaptation to new challenges. I aim to contribute to dynamic teams and provide efficient support in an
            enriching development environment.
          </p>
          <div className="card-actions">
            {nftImages.map((src, index) => (
              <Image key={index} src={src} alt={`NFT ${index + 1}`} width={64} height={64} className="rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
