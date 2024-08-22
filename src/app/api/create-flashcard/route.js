import { db } from '../../lib/firebase'; // Adjust the path if needed
import { collection, addDoc } from 'firebase/firestore';
import { GoogleGenerativeAI } from "@google/generative-ai";
require('dotenv').config();

export async function POST(req) {
  try {
    const { title, category, authorName } = await req.json();

    // Initialize the Gemini API client with your API key
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    // Initialize the Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate the flashcard content
    const contentResult = await model.generateContent(`Give 2 to 3 line for the topic No headings plz: ${title}`);
    const contentResponse = await contentResult.response;
    const flashcardContent = await contentResponse.text();

    // Generate category suggestion
    const categoryResult = await model.generateContent(`Suggest a category for the topic: ${title}`);
    const categoryResponse = await categoryResult.response;
    const suggestedCategory = await categoryResponse.text().trim();

    // Reference to Firestore collection
    const flashcardsRef = collection(db, 'flashcards');

    // Add a new document to the Firestore collection with userId
    await addDoc(flashcardsRef, {
      title: title,
      content: flashcardContent,
      category: category || suggestedCategory,
      userName: authorName,  // Sto the userId
      createdAt: new Date()
    });

    return new Response(
      JSON.stringify({ title, content: flashcardContent, category: category || suggestedCategory, authorName }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error generating or storing flashcard content:", error.message);
    return new Response(
      JSON.stringify({ error: "Failed to create flashcard" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
