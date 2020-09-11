const {Router}=require("express");
const pes=require("../Model/database");
const bcrypt=require("bcrypt");
const routes=Router();

routes.post("/criar",async(req,res)=>{
    const {nome,password,email}=req.body;
    const hash=bcrypt.hashSync(password,10);
    
     
      const Pes= await pes.create({
          nome:nome,
          password:hash,
          email:email
        });
        return res.json(Pes);
    
});
routes.get("/list",async(req,res)=>{
    const list=await pes.findAll();

    return res.json({list});
});

routes.delete("/deletar/:id",async(req,res)=>{
    const id=req.params.id;
    await pes.destroy({where:{id:id}}).then(function(){
        return res.json({message:"user deleted"})
    }).catch(function(err){
       return res.json({message:"err"})
    });
    
});


routes.put("/update/:id",async(req,res)=>{
     
    let id=req.params.id;
    const user= await pes.findByPk(id);
    await user.update(req.body).then(function(){
        return res.json(user);
    }).catch(function(err){
        res.status(400).json({message:err});
    });
      
});

module.exports=routes;