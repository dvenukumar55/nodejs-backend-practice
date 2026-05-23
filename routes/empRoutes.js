
const express =require('express');
const router=express.Router()//handle routes separately,to separate files
const empController=require('../controllers/empController')
const Employee=require('../models/Employee')

//get,post,put/patch,delete

router.post('/add-emp',empController.createEmployee)
//When a POST request comes to /add-emp,
//call the function createEmployee from controller

 router.get('/all-emp',empController.getEmployees)
//When a GET request comes to /all-emp,
//call the function getEmployees from controller

router.get('/emp/:id',empController.singleEmployee)
//When a GET request comes to /employee/:id,
//call the function singleEmployee from controller  

router.put('/update/:id',empController.uptEmployee)
//When a PUT request comes to /update/:id,
//call the function uptEmployee from controller

router.delete('/delete/:id', empController.delEmployee)
module.exports=router