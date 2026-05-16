import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const validCategories = ['JavaScript', 'React', 'Tailwind CSS', 'Node.js'];

export class FlashcardController {
  async create(req: Request, res: Response) {
    const { question, answer, category } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ error: 'A pergunta e a resposta são obrigatórias.' });
    }

    if (!validCategories.includes(category)) {
      return res.status(400).json({ error: 'Categoria inválida.' });
    }

    try {
      const flashcard = await prisma.flashcard.create({
        data: { question, answer, category },
      });
      return res.status(201).json(flashcard);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar flashcard.' });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const flashcards = await prisma.flashcard.findMany({
        orderBy: { created_at: 'desc' }
      });
      return res.json(flashcards);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar flashcards.' });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { question, answer, category } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ error: 'A pergunta e a resposta são obrigatórias.' });
    }

    if (!validCategories.includes(category)) {
      return res.status(400).json({ error: 'Categoria inválida.' });
    }

    try {
      const flashcard = await prisma.flashcard.update({
        where: { id },
        data: { question, answer, category },
      });
      return res.json(flashcard);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar flashcard.' });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await prisma.flashcard.delete({
        where: { id },
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar flashcard.' });
    }
  }
}
