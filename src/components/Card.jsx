import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-lg text-primary">{description}</p>
    </div>
  );
};

export default Card;
