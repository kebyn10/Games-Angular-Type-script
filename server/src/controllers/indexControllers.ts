import {Request,Response} from 'express'


class IndexControllers{
  public index (req:Request,res:Response){
    res.json({text:"api is true"})
   }
}

const indexControllers=new IndexControllers();
export default indexControllers