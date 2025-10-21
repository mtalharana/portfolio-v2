import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white text-primary">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">Fueling Human Potential.</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Qalmax is a growth partner that builds purposeful, intelligent, and scalable systems for people and organizations.
        </p>
        <Link
          to="/connect"
          className="bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all"
        >
          Let’s Build Growth Together
        </Link>
      </section>

      {/* Belief Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Technology in Service of Human Progress</h2>
          <p className="text-lg">
            We believe that technology should be a tool for empowerment, not a replacement for human ingenuity. Our solutions are designed to augment human capabilities, foster collaboration, and create opportunities for growth. We are committed to building technology that is not only powerful and efficient but also ethical, transparent, and accessible to all.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
