"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const CategoryPage = () => {
  const { slug } = useParams();
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchFlashcardsByCategory = async () => {
        try {
          const q = query(
            collection(db, 'flashcards'),
            where('category', '==', slug)
          );
          const querySnapshot = await getDocs(q);
          const fetchedFlashcards = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setFlashcards(fetchedFlashcards);
        } catch (error) {
          console.error('Error fetching flashcards:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchFlashcardsByCategory();
    }
  }, [slug]);

  if (loading) {
    return <p>Loading flashcards...</p>;
  }

  return ( 
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
      <h1 className="text-4xl font-bold text-center mb-8 capitalize text-white">{slug} Flashcards </h1>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flashcards.length > 0 ? (
          flashcards.map((flashcard) => (
            <div key={flashcard.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 relative group">
              <h2 className="text-2xl font-semibold mb-2 text-indigo-600">{flashcard.title}</h2>
              <p className="text-gray-700 mb-4">{flashcard.content}</p>
              <div className="text-sm text-gray-600 mb-4">
                <p><strong>Category:</strong> {flashcard.category}</p>
                <p><strong>Author:</strong> {flashcard.userName || 'Unknown'}</p>
                <p><strong>Status:</strong> {flashcard.isPaid ? 'Paid' : 'Free'}</p>
<button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                {flashcard.isPaid ? 'Purchase' : 'Get'}
              </button>
              </div>
       
              {flashcard.isPaid && (
                <button className="absolute bottom-4 right-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-200 opacity-0 group-hover:opacity-100">
                  Purchase
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No flashcards found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
