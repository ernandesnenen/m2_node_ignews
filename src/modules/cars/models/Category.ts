import { Column, Entity, CreateDateColumn } from "typeorm"
import {v4 as uuidv4} from 'uuid'

@Entity
class Category {
    
    @Column
    id?: string;

    @Column
    name: string;

    @Column
    description: string;

    @CreateDateColumn
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }

}

export {Category}