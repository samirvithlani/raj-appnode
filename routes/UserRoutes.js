const router = require("express").Router();
const userSchema = require("../model/UserSchema");

router.post("/adduser",(req,res)=>{
    console.log(req);
    userSchema.create(req.body,(err,data)=>{

        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
})

router.get("/getuser",(req,res)=>{
    userSchema.find({},(err,data)=>{
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
})
router.delete("/deleteuser/:id",(req,res)=>{
    userSchema.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
})

router.get("/getuser/:id",(req,res)=>{
    userSchema.findById(req.params.id,(err,data)=>{
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
})

module.exports = router;
