

import {parse} from 'csv-parse';
import fs from 'fs';
import { ICategoriesRepository } from '../../repositories/ICategorieRepository';


interface IImportCtegory{
 name:string,
 description:string
}

class ImportCategoriesUseCase{
constructor(private categoryRepository: ICategoriesRepository){}


loadCategory(file: any): Promise<IImportCtegory[]>{
    return new Promise((resolve, reject)=>{
        const parseFile = parse();   
    const stream = fs.createReadStream(file.path)
    stream.pipe(parseFile)

    const categories :IImportCtegory[]= []

    parseFile.on('data', async (line) =>{
        const [name, description] =line
        categories.push({
            name, 
            description
        })
    })
    .on('end',()=>{
        fs.promises.unlink(file.path)
        resolve(categories)
    })
    .on('error', (err)=>{
        reject(err)
    })

    })
}

    async execute(file: any) :Promise<void>{
        const categories = await this.loadCategory(file)
        console.log(categories)

        categories.map((category)=>{
            const {name, description} = category
            const existCategory = this.categoryRepository.findByName(name)
            if(!existCategory){
                this.categoryRepository.create({
                    name,
                    description
                })
            }
        })
   
    }

}
export {ImportCategoriesUseCase}