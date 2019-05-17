import {Router} from 'express';

import gamesController from '../controllers/gamesController';



class GamesRoutes {  

public router: Router = Router ();

constructor(){
    this.config();
}


config():void {
    this.router.post('/', gamesController.create);
    this.router.delete('/:id', gamesController.delete);
    this.router.put('/:id', gamesController.update);
    this.router.get('/',gamesController.list);
    this.router.get('/:id',gamesController.getOne);
    }

}
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;