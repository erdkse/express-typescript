import "reflect-metadata";
import {createConnection} from "typeorm";
import {connectionOptions} from "../environments/dev";

export class DBConnectionHelper {

    static connect() {
        createConnection(connectionOptions)
            .then(
                async connection => {
                    console.log("MySql connection is succeed");
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            );
    }
}