const Emp = require('../model/emp')

const mongoose=require("mongoose")
const emp = require('../model/emp')

function create(req,res){
    let employeeName=req.body.empName
    let employeeEmail=req.body.empEmail 
    let employeeMobile=req.body.empMobile 
    let objEmp = new Emp({
        empName:employeeName,
        empEmail:employeeEmail,
        empMobile:employeeMobile

    })
    objEmp.save()
    .then (
        (data)=>res.send(data)
    )
        .catch((err)=>console.log(err))
}

function read(req,res){
    Emp.find()
    .then((data)=>res.send(data))
}

function update(req,res){
    Emp.findByIdAndUpdate(req.params.id,req.body,(err,emp) =>{
        if(err){
            return res.status(500).send(
                {
                    Message:"Not able to Update the employee details",
                    error:err 
                }
            )
        }
        res.status(200).send({
            message:"successfully updated Employee details "
        })
    })
    
}

function deleteEmp(req,res){
    Emp.findByIdAndDelete(req.params.id,(err,emp)=>{
        if(err){
            return res.status(500).send(
                {
                    message:"Not able to delete employee details",
                    error:err
                }
            )
        }
        res.status(200).send({
            message:"sucessfully deleted employee details"
        })
    })
}
module.exports={create,read,update,deleteEmp}
