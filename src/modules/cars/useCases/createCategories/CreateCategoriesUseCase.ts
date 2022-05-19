import { ICategoriesRepository } from "../../repositories/ICategorieRepository"

 
 interface IRequest{
     name:string,
     description:string
 }
 class CreateCategoriesUseCase {
     constructor(private categoriesRepository:ICategoriesRepository){

     }
     execute({name, description}:IRequest){
    const categoryAlreadyExist = this.categoriesRepository.findByName(name)
   
    if(categoryAlreadyExist){
        throw new Error('category alread exist')
    }
     
    this.categoriesRepository.create({name, description})
    }
 }
 export { CreateCategoriesUseCase }