import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { routers } from './Routes';

import swaggerFile from './swagger.json'



const app = express();

app.use(express.json())

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(routers)

app.listen('3333', ()=>{
    console.log('server is run')
})