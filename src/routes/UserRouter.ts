import "reflect-metadata";
import {Router, Request, Response, NextFunction} from 'express';
import {User} from "../entities/User";
import {getConnectionManager} from "typeorm";


export class UserRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('/', this.getAll);
        this.router.post('/', this.addOne);
        this.router.get('/:id', this.getOne);
    }

    public getAll(request: Request, response: Response, next: NextFunction) {
        const connection = getConnectionManager().get();

        let userRepository = connection.getRepository(User);
        userRepository.find().then(
            savedUsers => {
                response.status(200).send(savedUsers);
            }
        ).catch(
            error => {
                response.status(200).send(error)
            }
        );

    }

    public getOne(request: Request, response: Response, next: NextFunction) {
        let userID = request.params.id;

        const connection = getConnectionManager().get();
        let userRepository = connection.getRepository(User);

        userRepository.findOneById(userID).then(
            savedUser => {
                response.status(200).send(savedUser);
                console.log("THEN", savedUser);
            }
        ).catch(
            error => {
                response.status(200).send(error);
                console.log("CATCH", error);
            }
        );
    }

    public addOne(request: Request, response: Response, next: NextFunction) {
        let user = new User();
        user.email = "erdikose@gmail.com";
        user.firstName = "Erdi";
        user.lastName = "Köse";
        user.username = "erdkse";
        user.password = "password";
        user.avatar = "default";
        user.title = "Developer";
        user.ipAddress = "127.0.0.1";

        const connection = getConnectionManager().get();
        let userRepository = connection.getRepository(User);

        userRepository.save(user).then(
            savedUser => {
                response.status(200).send(savedUser);
            }
        ).catch(
            error => {
                response.status(200).send(error)
            }
        );


    }
}

const userRoutes = new UserRouter();
userRoutes.init();

export default userRoutes.router;