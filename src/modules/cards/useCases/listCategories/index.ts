import { ListCategoryController } from "./listCategoriesController";
import { ListCategoryUseCase } from "./listCategoriesUseCases";
import {CategoriesRepository} from '../../repositories/implementations/CategoriesRepository'

const categoryRepository = CategoriesRepository.getInstanceCategory()
const  listCategoryUseCase = new ListCategoryUseCase(categoryRepository)
const listCategoryController = new ListCategoryController(listCategoryUseCase)
export {listCategoryController}