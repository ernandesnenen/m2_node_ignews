import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoriesController } from "./importCategoriesController";
import { ImportCategoriesUseCase } from "./importCategoriesUseCases";

const categoryRepository =  CategoriesRepository.getInstanceCategory()
const importCategoriesUseCases = new ImportCategoriesUseCase(categoryRepository)
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCases)

export {importCategoriesController}