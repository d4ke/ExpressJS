import { DataSource } from "typeorm";
import { Student } from "./studentModel";

export const AppData = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "croprotation",
    password: "VeryVeryStrongPass",
    entities: [Student]
})

AppData.initialize()
    .then(() => {
        console.log("Connected to database.");
        
    })
    .catch((err) => {
        console.log("error: ", err);  
    })