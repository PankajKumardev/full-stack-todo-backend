const todomodel =  require('../models/TodoModel')
 

 module.exports.gettodo = async (req,res) =>{
    const todo =await todomodel.find()
    res.send(todo)
 }

 module.exports.updatetodo = async (req,res) =>{
    const {_id,text} = req.body 
    todomodel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Updated Sucessfully..."))
    .catch((err)=> console.log(err))
 }

 module.exports.savetodo = async (req,res) =>{
   const {text} = req.body
    todomodel.create({text})
    .then((data)=>{
        console.log("Added Successfully")
        console.log(data)
        res.send(data)
    })
   }
    module.exports.deletetodo = async (req,res) =>{
      const {_id} = req.body
      todomodel
      .findByIdAndDelete(_id) 
      .then(()=> res.send("Delete Sucessfully..."))
      .catch((err)=>console.log(err))
   }
