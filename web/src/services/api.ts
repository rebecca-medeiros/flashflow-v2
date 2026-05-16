import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3333',
});

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
  created_at: string;
}
