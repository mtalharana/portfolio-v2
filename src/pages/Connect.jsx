import React from 'react';

const Connect = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Let’s build purposeful technology that fuels growth.
        </h1>
        <p className="text-lg text-primary mb-8">
          We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"
              placeholder="Full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-secondary focus:border-secondary border border-gray-300 rounded-md"
              placeholder="Message"
              defaultValue={''}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connect;
