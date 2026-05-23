
const Employee=require('../models/Employee')

const createEmployee=async(req,res)=>{
    try{
        const {name,email,phone,city}=req.body
        const emp=new Employee({
            name,email,phone,city
        })
        await emp.save()//Pause this function until DB finishes saving
        res.status(200).json(emp)
    } catch (error) {
       console.log(error)
       res.status(500).json({message:'something went wrong'})
    }
}


//to get employee
const getEmployees=async(req,res)=>{
    try{
        const employees=await Employee.find()
        res.status(200).json(employees)
    
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'server error'})
    }
}

//get employee by id
const singleEmployee=async(req,res)=>{
    try{
        const emp=await Employee.findById(req.params.id)
        if(!emp){
            return res.status(404).json({message:'employee not found'})
        }
        res.status(200).json(emp)
    } catch (err) {
        console.log(err)
        res.status(500).json({message:'server error'})
    }
}

//put request for update employee
const uptEmployee=async(req,res)=>{
    try{
        const{name,email,phone,city}=req.body
        const myEmp=await Employee.findByIdAndUpdate(
            req.params.id,
            {name,email,phone,city},
        )
        if(!myEmp){
            return res.status(404).json({message:'employee not found'})
        }
        res.status(200).json(myEmp)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'server error'})
    }
} 

//delete employee
const delEmployee=async(req,res)=>{
    try{
        const delEmp=await Employee.findByIdAndDelete(req.params.id)
        if(!delEmp){
            return res.status(404).json({message:'employee not found'})
        }
        res.status(200).json({message:'employee deleted successfully'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'server error'})
    }
}
module.exports={ createEmployee,
                 getEmployees ,
                 singleEmployee,
                 uptEmployee,
                 delEmployee
                }