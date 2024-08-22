import React from "react";
import Head from "next/head";

const Landing = () => {
  return (
    <div>
      <Head>
        <title>Flashcard Maker - EduFlare</title>
      </Head>
      <div className="bg-gray-50">
        <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">EduFlare</h1>
            <nav className="space-x-4">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Features
              </a>
              <a href="/sign-up" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Sign Up
              </a>
              <a href="/sign-in" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Sign In
              </a>
            </nav>
          </div>
        </header>

        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold sm:text-5xl leading-tight">
                Create and Study Flashcards Effortlessly
              </h2>
              <p className="mt-4 text-lg">
                Master your subjects with our intuitive flashcard maker. Organize your learning and retain more information.
              </p>
              <a
                href="/sign-up"
                className="mt-6 inline-block bg-white text-indigo-600 py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 text-lg font-medium transition-colors"
              >
                Create a Flashcard
              </a>
            </div>
            {/* Uncomment and add an image path below to include a hero image */}
            {/* <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
              <img
                src="/path/to/hero-image.png"
                alt="Flashcard Maker"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div> */}
          </div>
        </section>

        <section id="features" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-white-900 mb-8">Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Easy to Use</h4>
                <p className="text-gray-600">
                  Create flashcards quickly with our simple interface.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Study Anywhere</h4>
                <p className="text-gray-600">
                  Access your flashcards on any device, anytime.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-semibold text-indigo-600 mb-4">Customizable</h4>
                <p className="text-gray-600">
                  Tailor your flashcards to fit your learning style.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="signup" className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 text-center text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h4 className="text-3xl font-bold mb-4">
              Start Your Learning Journey Today!
            </h4>
            <p className="text-lg mb-6">
              Sign up now and make the most of your study time with Flashcard Maker.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-white text-indigo-600 py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 text-lg font-medium transition-colors"
            >
              Sign Up for Free
            </a>
          </div>
        </section>

        <footer className="bg-gray-900 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <p>&copy; 2024 EduFlare. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
