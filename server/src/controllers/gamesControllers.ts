import { Request,Response } from "express";
import pool from "../database";
class GamesControllers{

  public  async list (req:Request,res:Response):Promise<void>{
    try {
       const [result]:Array<any>=await pool.query('SELECT * FROM games')
       if(result.length>0){

         res.json(result) 
       }else{
        res.status(404).json({text:"not found"})
       }
       
       
       
       
    } catch (error) {
        console.log(error);
        
    }
    

 
 }

 public async getOne(req:Request,res:Response):Promise<void>{
    try {
        const {id}=req.params
    const [result]:Array<any>=await pool.query('SELECT * FROM games WHERE id=?',[id])
        if(result.length>0){
        res.json(result[0])
        }else{
            res.status(404).json({text:"not found"})
        }
    
    } catch (error) {
        console.log(error);
        
    }
    
 }
 public async create(req:Request,res:Response):Promise<void>{
  try {
    const {title,description,image}=req.body
    const [result]:any=await pool.query('INSERT INTO games(title,description,image) VALUES (?,?,?)',[title,description,image])
  
    
    if (result.affectedRows=!0) {
        res.json({data:"insert ok"})
    }else{
        res.status(404).json({text:"not found"})
    }
    
} catch (error) {
    console.log(error);
    
  }
   
 }
 public async delete(req:Request,res:Response):Promise<void>{
    try {
        const {id}=req.params
        const [result]:any=await pool.query('DELETE FROM games WHERE id=?',[id])
       if (result.affectedRows) {
        res.json("Delete ok")
       }else{
        res.status(404).json({text:"not found"})
       }
        
    } catch (error) {
        console.log(error);
    
        
    }
 }
 public async update(req:Request,res:Response):Promise<void>{
   try {
    const {id}=req.params
    const{title,description,image}=req.body
    const [result]:any=await pool.query('UPDATE games SET title=?,description=?,image=? WHERE id=?',[title,description,image,id])
    if (result.affectedRows!=0) {
        res.json('UPDATE ok')
    }else{
        res.status(404).json({text:"not found"})
    }
   } catch (error) {
    console.log(error);
    
   }
 }


}

 const gamesControllers=new GamesControllers();
 export default gamesControllers;