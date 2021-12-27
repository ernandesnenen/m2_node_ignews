import { Category } from "../../models/Category";
import { ICategoriesRepository, IcreateCategoryDTO } from "../ICategorieRepository";



class CategoriesRepository implements ICategoriesRepository {

 private categories: Category[];
 private static INSTANCIA: CategoriesRepository;

private constructor(){
    this.categories = []
}

public static getInstanceCategory(): CategoriesRepository {
 if(!CategoriesRepository.INSTANCIA){
    CategoriesRepository.INSTANCIA = new CategoriesRepository()
    }
    return CategoriesRepository.INSTANCIA
}

create({description, name}:IcreateCategoryDTO): void{
    const category = new Category()

    Object.assign(category,{
        name,
        description,
        created_at: new Date()
    })

    this.categories.push(category)
}

list():Category[]{
return this.categories


}
findByName(name:string):Category | undefined{
    const category = this.categories.find(category => category.name === name)
    
    return category 
}

}
export {CategoriesRepository}