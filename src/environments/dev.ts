import {ConnectionOptions} from "typeorm";
import {User} from "../entities/User";

export const connectionOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "test",
    logging:"all",
    autoSchemaSync: true,
    //entities: [__dirname + "/modules/**/entity/{*.ts,*.js}"],
    entities: [User],
    subscribers: [__dirname + "/modules/**/subscriber/{*.ts,*.js}"]
};