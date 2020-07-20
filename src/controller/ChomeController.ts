import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Produto } from '../entity/Produto'
import { Slider } from '../entity/Slider'
import { Home } from '../models/Home'
import { Categorias_Home } from '../entity/Categorias_Home';
import { Cliente } from '../entity/Cliente'
import { Categoria } from '../entity/Categoria';

//retorna todos os produtos(pagina de home-destaque=true)
export const get_home = async (req: Request, res: Response) => {
    const destaque = 'sim';

    const destaques = await getRepository(Produto).find(
        {
            select: ["id", "nome", "descricao", "valor", "caminho", "destaque"],
            relations: ["categoria"],
            where: { destaque }
        });

    const slides = await getRepository(Slider).find();
    const categorias = await getRepository(Categorias_Home).find();
    const home_content = new Home(destaques, slides, categorias)

    return res.json(home_content);
}

//retorna todos os produtos(pagina de produtos)
export const get_produtos = async(req: Request, res: Response) => {
    const produtos = await getRepository(Produto).find(
        {
            select: ["id", "nome", "descricao", "valor", "caminho", "destaque"],
            relations: ["categoria"]
        });
    
    return res.json(produtos);
}

//retorna um produto para pelo id
export const get_produto = async(req: Request, res: Response) => {
    const { id } = req.params;

    const produto = await getRepository(Produto).find(
        {
            select: ["id", "nome", "descricao", "valor", "caminho", "destaque"],
            relations: ["categoria"],
            where: { id }
        });
    
    return res.json(produto);
}

//add produto no carrinho do cliente
export const add_carrinho = async(req: Request, res: Response) => {
    const { id } = req.params;

    const resultado = await getRepository(Cliente).update(id, { carrinho: req.body });

    if(resultado.affected === 0){
        return res.status(404).json({message: 'erro up'})
    }
    console.log('up com sucesso')
}

//retorna categorias dos produtos
export const categorias = async(req: Request, res: Response) => {

    const cat = await getRepository(Categoria).find(
        {
            select: ["id", "nome"],
            relations: ["produtos"]
        });
    
    return res.json(cat);
}