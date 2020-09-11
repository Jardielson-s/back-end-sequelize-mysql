const Sequelize=require("sequelize");

const sequelize =new Sequelize('users','root','root@123',{
   host:'localhost',
   dialect:'mysql'
});

sequelize.authenticate().then(function(){
    console.log("conecxão realizada com sucesso");
}).catch(function(err){
    console.log(err);
});

const pes=sequelize.define('pessoas',{
    nome:Sequelize.STRING,
    password:Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        validata:{isEmail:true}
    }
    
});
pes.sync();
pes.prototype.toJSON =  function () {
    var values = Object.assign({}, this.get());
  
    delete values.password;
    return values;
  }
module.exports=pes;