import {Router} from 'express'

import {createSpecificationController} from '../modules/cards/useCases/createSpecifications'

const specificationRoutes = Router()
specificationRoutes.post('/',(req, res)=>createSpecificationController.handle(req, res))



 export {specificationRoutes}