"use client";

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'; // Use next/navigation in Next.js 13
import { ClerkProvider, useClerk } from '@clerk/nextjs';

const UserDashboard = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();
  const { signOut } = useClerk(); // Use useClerk to access signOut method

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topic, setTopic] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Education');
  const [flashcards, setFlashcards] = useState([]);

  // Redirect if not signed in
  if (isLoaded && !isSignedIn) {
    router.push('/sign-in');
  }

  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut();
    router.push('/');
  };

  const handleCreateFlashcard = async () => {
    if (!topic) return;

    const flashcardData = {
      title: topic,
      category: selectedCategory,
      userId: user.id, // Include user ID
      authorName: `${user.firstName} ${user.lastName}`, // Include author's name
    };

    const response = await fetch('/api/create-flashcard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(flashcardData),
    });

    const data = await response.json();
    setFlashcards([...flashcards, { ...data, ...flashcardData }]);
    setIsModalOpen(false);
    setTopic('');
    setSelectedCategory('Education'); // Reset category after creation
  };

  const categories = [
    { name: 'Education', color: 'bg-gradient-to-r from-indigo-500 to-purple-500', textColor: 'text-white', slug: 'Education' },
    { name: 'Agriculture', color: 'bg-gradient-to-r from-indigo-500 to-purple-500', textColor: 'text-white', slug: 'Agriculture' },
    { name: 'Sports', color: 'bg-gradient-to-r from-indigo-500 to-purple-500', textColor: 'text-white', slug: 'Sports' },
    { name: 'Science', color: 'bg-gradient-to-r from-indigo-500 to-purple-500', textColor: 'text-white', slug: 'Science' },
    { name: 'General Knowledge', color: '', textColor: 'text-white', slug: 'General-knowledge' },
    { name: 'Psychology', color: 'bg-gradient-to-r from-indigo-500 to-purple-500', textColor: 'text-white', slug: 'Psychology' },
    { name: 'Medical', color: 'bg-gradient-to-r from-indigo-500 to-purple-500', textColor: 'text-white', slug: 'Medical' },
    { name: 'Inventions', color: 'bg-gradient-to-r from-indigo-500 to-purple-500', textColor: 'text-white', slug: 'Inventions' },
  ];

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen text-gray-800">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">EduFlare Dashboard</h1>
          <nav>
            <a
              href="#"
              onClick={handleSignOut}
              className="text-white font-semibold hover:text-gray-200"
            >
              Sign Out
            </a>
          </nav>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-10">Welcome, {user.firstName}!</h2>

          <div className="">
            <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-indigo-600 mb-6">Create Flashcard</h3>
              <p className="text-gray-600 mb-6">Design and create your own flashcards to help others learn.</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500  text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
              >
                Create Now
              </button>
            </div>
          </div>

          {/* Flashcards Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Created Flashcards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {flashcards.map((flashcard, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-4">{flashcard.title}</h3>
                  <p className="text-gray-600">{flashcard.content}</p>
                  <p className="text-gray-500 mt-2">Category: {flashcard.category}</p>
                  <p className="text-gray-500">Created by: {flashcard.authorName}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={`/category/${category.slug}`}
                  className={`p-6 rounded-lg shadow-lg flex items-center justify-center ${category.color} transform hover:scale-105 transition-transform`}
                >
                  <span className={`text-lg font-semibold ${category.textColor}`}>{category.name}</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 EduFlare. All rights reserved.</p>
        </div>
      </footer>

      {/* Modal for Creating Flashcards */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96">
            <h2 className="text-2xl font-bold mb-6">Enter Flashcard Topic</h2>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="border border-gray-300 p-3 rounded mb-6 w-full"
              placeholder="Enter topic"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 p-3 rounded mb-6 w-full"
            >
              {categories.map((category) => (
                <option key={category.slug} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFlashcard}
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
