import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; // Adjust path if necessary

export const addFlashcard = async (flashcard) => {
  try {
    const docRef = await addDoc(collection(db, 'flashcards'), flashcard);
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
