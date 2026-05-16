import { Router } from 'express';
import { FlashcardController } from './controllers/FlashcardController';

export const routes = Router();
const flashcardController = new FlashcardController();

routes.post('/flashcards', flashcardController.create);
routes.get('/flashcards', flashcardController.index);
routes.put('/flashcards/:id', flashcardController.update);
routes.delete('/flashcards/:id', flashcardController.delete);
