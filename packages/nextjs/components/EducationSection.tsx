// components/EducationSection.tsx

const EducationSection = () => {
  return (
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
  );
};

export default EducationSection;
