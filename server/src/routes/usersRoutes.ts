import { Router } from "express";
import usersControllers from "../controllers/usersControllers";

class UsersRoutes{
    public router:Router=Router()
    constructor(){
        this.config()
    }

    config():void{
        this.router.get('/:email',usersControllers.getUser)
        this.router.post('/',usersControllers.insertUser)
        this.router.delete('/:email',usersControllers.deleteUser)
        this.router.put('/:email',usersControllers.updateUser)
        this.router.post('/login',usersControllers.loginUser)

    }



}
const usersRoutes=new UsersRoutes()
export default usersRoutes.router
