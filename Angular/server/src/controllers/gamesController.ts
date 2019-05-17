import {Request, Response } from 'express';

import pola from '../database';



class GamesController {

   public async create(req: Request , res: Response): Promise<void> {
      await pola.query('INSERT INTO games set ?', [req.body]);
      res.json({
         message: 'Game saved!!!' });
   }
   public update (req: Request , res: Response){
      res.json({
         text: 'Updating game: ' + req.params.id });
   }
   
   public async getOne(req: Request, res: Response): Promise<any>{
      const { id } = req.params;
      const games = await pola.query('SELECT * FROM games WHERE id = ?', [id]);
      console.log(games);
      if (games.length > 0) {
         return res.json(games[0]);
      }
      res.status(404).json({ text: 'damnn u nao existe' });
   }

   public async list(req: Request, res: Response) {
      const games = await pola.query('SELECT * FROM games');
      res.json(games);
   }
   public async delete(req: Request , res: Response): Promise<any>{
      const { id } = req.params;
      const games = await pola.query('DELETE FROM games WHERE id = ?', [id]);
      console.log(games);
      res.json({ message: 'Game deleted' });
   }

}

const gamesController = new GamesController();
export default gamesController;