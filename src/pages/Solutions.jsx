import React from 'react';
import Card from '../components/Card';

const solutions = [
  {
    title: 'Digital Systems',
    description: 'We build elegant, scalable platforms that streamline complex processes and enhance user engagement, turning intricate challenges into intuitive digital experiences.',
  },
  {
    title: 'AI & Automation',
    description: 'Our intelligent automation solutions unlock new levels of efficiency and insight, allowing your teams to focus on strategic growth while technology handles the rest.',
  },
  {
    title: 'Product Experience',
    description: 'We design human-centered digital products that are not only beautiful but also deeply functional, empowering users and driving meaningful interaction.',
  },
  {
    title: 'Growth Strategy',
    description: 'We partner with you to transform visionary ideas into sustainable, market-ready solutions, providing the strategic guidance needed to navigate the path from concept to impact.',
  },
];

const Solutions = () => {
  return (
    <div className="bg-accent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">What We Build to Enable Growth.</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} title={solution.title} description={solution.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
