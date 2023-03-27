import { Request,Response } from "express";
import pool from "../database";


class UsersControllers{
   
    public async getUser(req:Request,res:Response):Promise<void>{
      try {
        const {email}=req.params
         const [result]:any=await pool.query('SELECT * FROM users WHERE email=?',[email])
        if (result.length>0) {
           res.json(result[0])
        }else{
            res.status(404).json({text:"route not foud"})
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

public async insertUser(req:Request,res:Response):Promise<void>{
try {
    const {email,name,surname,pass}=req.body
    const [result]:any=await pool.query('INSERT INTO users(email,name,surname,pass) VALUES (?,?,?,?)',[email,name,surname,pass])
    if (result.affectedRows=! 0) {
        res.json('insert ok')
    }else{
        res.status(404).json({text:"route not found"})
    }
} catch (error) {
    console.log(error);
    
}
}
public async deleteUser(req:Request,res:Response):Promise<void>{
    try {
        const {email}=req.params
        const [result]:any=await pool.query('DELETE FROM users WHERE email=?',[email])
        if (result.affectedRows!=0) {
            res.json('delete ok')
        }else{
            res.status(404).json({text:'route not found'})
        }
    } catch (error) {
        console.log(error);
        
    }
}
public async updateUser(req:Request,res:Response):Promise<void>{
    try {
        const {email}=req.params
        const {name,surname,pass}=req.body
        const [result]:any=await pool.query('UPDATE users SET name=?,surname=?,pass=? WHERE email=?',[name,surname,pass,email])
        if (result.affectedRows=!0) {
            res.json('update user ok')
        }else{
            res.status(404).json({text:"route not found"})
        }
    } catch (error) {
        console.log(error);
        
    }
}
public async loginUser(req:Request,res:Response):Promise<void>{
    try {

        
        const {email,pass}=req.body
        const [result]:any=await pool.query('SELECT pass from users WHERE email=?',[email])
        if (result.length>0) {
            const password=result[0].pass
            if (password==pass) {
                res.json('loged')
            }else{
                res.json('passWrong')
            }
        }else{
            res.json('not found')
        }
    } catch (error) {
        console.log(error);
        
    }
}

}

const usersControllers=new UsersControllers();
export default usersControllers