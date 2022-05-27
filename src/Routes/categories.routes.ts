import {Router} from 'express'

import multer from 'multer'
import { createCategoryController } from '../modules/cars/useCases/createCategories'
import { importCategoriesController } from '../modules/cars/useCases/importCategories'
import { listCategoryController } from '../modules/cars/useCases/listCategories'


const categoriesRoutes = Router()
const upload = multer({
    dest:'./temp'
})

categoriesRoutes.post('/',(req, res)=>createCategoryController.handle(req, res))
categoriesRoutes.get('/',(req, res)=>listCategoryController.handle(req, res))

categoriesRoutes.post('/import',upload.single('file'),(req, res)=>{   
    return importCategoriesController.handle(req, res)
})


 export {categoriesRoutes}