import {Router} from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";

const routers = Router()

routers.use('/categories',categoriesRoutes)
routers.use('/specification',specificationRoutes)

export {routers}