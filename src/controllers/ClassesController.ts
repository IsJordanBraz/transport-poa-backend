import { Request, Response } from 'express';

import db from '../database/connection';

interface busModel {
    code: number;
    name: string;
}

export default class ClassesController { 

    async index(request: Request, response: Response) {
        const classes = await db('bus');
        return response.json(classes);
    }

    async create (request: Request, response: Response) {
        const { code, name } = request.body;

        const trx = await db.transaction();

        try {
            const insertBus = await trx('bus').insert({               
               code,
               name
            });        
        
            await trx.commit();
        
            return response.status(201).send();
        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'Unexpected error while creating new busInfo'
            })
        }
    }
}