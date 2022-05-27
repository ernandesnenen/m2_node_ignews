import app from '../src/app'
import { AppDataSource } from './database';




async function main() {
   await AppDataSource.initialize()
    app.listen('3333', ()=>{
    console.log('server is run')
})
}
 main()
   