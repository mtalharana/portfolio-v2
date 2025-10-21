import React from 'react';

const CaseStudy = ({ title, challenge, solution, impact }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h3 className="text-3xl font-bold text-primary mb-4">{title}</h3>
      <div className="mb-4">
        <h4 className="text-xl font-semibold text-primary mb-2">Challenge</h4>
        <p className="text-lg text-primary">{challenge}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-xl font-semibold text-primary mb-2">Solution</h4>
        <p className="text-lg text-primary">{solution}</p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-primary mb-2">Impact</h4>
        <p className="text-lg text-primary">{impact}</p>
      </div>
    </div>
  );
};

export default CaseStudy;
