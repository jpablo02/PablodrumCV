// components/SkillsSection.tsx

const SkillsSection = () => {
  return (
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
  );
};

export default SkillsSection;
