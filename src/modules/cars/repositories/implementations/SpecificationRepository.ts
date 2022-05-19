import { Specification } from "../../models/specifiction";
import { ISpecificationRepository, IcreateSpecificationDTO} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {

    private specifications: Specification[];
    private static INSTANCIA: SpecificationRepository;

   
   constructor(){
       this.specifications = []
   }

   public static getInstanceCategory(): SpecificationRepository {
    if(!SpecificationRepository.INSTANCIA){
       SpecificationRepository.INSTANCIA = new SpecificationRepository()
       }
       return SpecificationRepository.INSTANCIA
   }
   create({description, name}:IcreateSpecificationDTO): void{
       const specification = new Specification()
   
       Object.assign(specification,{
           name,
           description,
           created_at: new Date()
       })
   
       this.specifications.push(specification)
   }
   
//    list():Category[]{
//    return this.categories
   
   
//    }
   findByName(name:string):Specification | undefined{
       const specification = this.specifications.find(specification => specification.name === name)
       
       return specification 
   }
   
   }
   export {SpecificationRepository}