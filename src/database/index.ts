import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "ignite",
    logging: true,
    database: "rentx",
    entities: [],
    migrations:["./src/*.ts"],
    cli:{
        migrationDir:"./src/database/migrations"
    }


   
})

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
