import { ConnectionOptions } from "typeorm";
import { Photo } from '../entities/Photo'

export const developmentConnectionOptions: ConnectionOptions = {
    driver: {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "root",
        database: "test"
    },
    logging: {
        logQueries: true,
        logFailedQueryError: true,
    },
    autoSchemaSync: true,
    //entities: [__dirname + "/modules/**/entity/{*.ts,*.js}"],
    entities: [Photo],
    subscribers: [__dirname + "/modules/**/subscriber/{*.ts,*.js}"]
}