const express = require ("express")
const Controller=require('../controller/empcontroller')
const create = require ('../controller/empcontroller')

const read = require('../controller/empcontroller')

const update=require('../controller/empcontroller')

var router=express()

const bodyParser=require("body-parser")
const { application } = require("express")

router.use(bodyParser.json())

router.post('/create',Controller.create)
router.get('/users',Controller.read)
router.put('/update/:id',Controller.update)
router.delete('/delete',Controller.deleteEmp)

module.exports=router