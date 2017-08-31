import { Router, Request, Response, NextFunction } from 'express';


export class PhotoRouter {
    router: Router;

    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = Router();
        this.init();
    }

    /**
* Take each handler, and attach to one of the Express.Router's
* endpoints.
*/
    init() {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
    }

    /**
 * GET all Heroes.
 */
    public getAll(req: Request, res: Response, next: NextFunction) {
    }

    /**
     * GET one hero by id
     */
    public getOne(req: Request, res: Response, next: NextFunction) {
        let query = parseInt(req.params.id);
        res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          query
        });

    }
}

// Create the HeroRouter, and export its configured Express.Router
const photoRoutes = new PhotoRouter();
photoRoutes.init();

export default photoRoutes.router;