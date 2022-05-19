import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { createCategoriesController } from "./createCategoriesController";
import { CreateCategoriesUseCase } from "./CreateCategoriesUseCase";

 const CategoryRepository  = CategoriesRepository.getInstanceCategory()
 const createCategoryUseCase  = new CreateCategoriesUseCase(CategoryRepository)
 const createCategoryController  = new createCategoriesController(createCategoryUseCase)
 

 export {createCategoryController}