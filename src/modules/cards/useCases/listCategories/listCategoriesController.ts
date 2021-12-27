import { Request, Response } from 'express'
import {ListCategoryUseCase} from './listCategoriesUseCases'

class ListCategoryController{
    constructor(private listCategoriesUseCases: ListCategoryUseCase){}

    handle(req:Request, res:Response){
        const categories = this.listCategoriesUseCases.execute()
        return res.json(categories)
    }

}

export { ListCategoryController}