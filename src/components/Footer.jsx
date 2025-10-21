import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-accent py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-primary">
        <p>&copy; {new Date().getFullYear()} Qalmax. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
