import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { User } from '../entity/User';
import { Cliente } from '../entity/Cliente';
import * as jwt from 'jsonwebtoken';

//cria usuario no banco
export const register_admin = async(req: Request, res: Response) => {
    const { nome, email, senha, avatar } = req.body;
    const secret = "84edbc64b2e424f48fd21c08e26d9dd9";

    const senha_hash = await bcrypt.hash(senha, 8);
    const token = jwt.sign({ nome }, secret, {
        expiresIn: '1d'
    });

    const user = await getRepository(User).save({
        nome,
        email,
        senha: senha_hash,
        token,
        avatar
    });
    return res.json(user);
}

//register cliente
export const register_cliente = async(req: Request, res: Response) => {
    const { nome, email, senha, avatar } = req.body;
    const secret = "84edbc64b2e424f48fd21c08e26d9dd9";

    const senha_hash = await bcrypt.hash(senha, 8);
    const token = jwt.sign({ nome }, secret, {
        expiresIn: '1d'
    });

    const user = await getRepository(Cliente).save({
        nome,
        email,
        senha: senha_hash,
        avatar,
        token
    });
    console.log(user)

    return res.json(user);
}

//loga admin
export const login_admin = async(req: Request, res: Response) => {
    const { email, senha} = req.body;
    const secret = "84edbc64b2e424f48fd21c08e26d9dd9";

    const user = await getRepository(User).find(
        {
            select: ["id", "nome", "email", "senha", "avatar", "token"],
            relations: ["carrinho"],
            where: { email }
        });
    
    if(user.length === 1){ 
        if(await bcrypt.compare(senha, user[0].senha)){
            const token = jwt.sign({ id: user[0].id }, secret, {
                expiresIn: '1d'
            });

            user[0].token = token;

            return res.json(user);
        }
        else{
            return res.status(404).json({message: 'user nao existe'});
        }
    }
    else{
        return res.status(404).json({message: 'erro ao logar'});
    }
}

//loga cliente
export const login_cliente = async(req: Request, res: Response) => {
    const { email, senha} = req.body;
    const secret = "84edbc64b2e424f48fd21c08e26d9dd9";

    const cliente = await getRepository(Cliente).find(
        {
            select: ["id", "nome", "email", "senha", "avatar", "token"],
            relations: ["carrinho"],
            where: { email }
        });
    
    if(cliente.length === 1){ 
        if(await bcrypt.compare(senha, cliente[0].senha)){
            const token = jwt.sign({ id: cliente[0].id }, secret, {
                expiresIn: '1d'
            });

            cliente[0].token = token;

            return res.json(cliente);
        }
        else{
            return res.status(404).json({message: 'cliente nao existe'});
        }
    }
    else{
        return res.status(404).json({message: 'erro ao logar cliente'});
    }
}

//recupera todos os usuarios no banco
export const list_users_admin = async(req: Request, res: Response) => {
    const users = await getRepository(User).find();
    return res.json(users);
}

//add usuario no banco pelo sistema
export const add_users_admin = async(req: Request, res: Response) => {
    const { nome, sobrenome, email, cargo, rg, cpf, senha } = req.body;
    const senha_hash = await bcrypt.hash(senha, 8);

    const users = await getRepository(User).save({
        nome,
        email,
        senha: senha_hash
    });

    return res.json(users);
}

//deletar um usuario no banco
export const del_user_admin = async(req: Request, res: Response) => {
    const { id } = req.params;

    const resultado = await getRepository(User).delete(id);

    if(resultado.affected === 0){
        return res.status(404).json({message: 'erro'})
    }
}

//edita um usuario no banco
export const up_user_admin = async(req: Request, res: Response) => {
    const { id } = req.params;

    const resultado = await getRepository(User).update(id, req.body);

    if(resultado.affected === 0){
        return res.status(404).json({message: 'erro up'})
    }
    console.log('up com sucesso')
}


