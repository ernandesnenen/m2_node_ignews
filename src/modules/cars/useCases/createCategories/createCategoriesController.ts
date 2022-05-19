import {Request, Response} from 'express'
import { CreateCategoriesUseCase } from './CreateCategoriesUseCase'

class createCategoriesController{
    constructor(private createCategoriesUseCase: CreateCategoriesUseCase){}

    handle(req: Request, res:Response):Response{
        const {name, description} = req.body 

        // const createCateroyService = new CreateCategoriesUseCase(categoriesRepository)
        this.createCategoriesUseCase.execute({name, description})
    
    
        return res.status(201).send()
    }
}
export {createCategoriesController}