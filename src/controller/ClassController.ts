import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Class } from '../entity/Class';

//add class no banco pelo sistema
export const postClass = async(req: Request, res: Response) => {
  const { nome } = req.body;
  
  const c = await getRepository(Class).save({
    nome
  });
  
  return res.json(c);
}

//retorna um class
export const getClass = async(req: Request, res: Response) => {
  const c = await getRepository(Class).find();
  
  return res.json(c);
}
