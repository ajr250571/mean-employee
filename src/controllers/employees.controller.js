const employeeCtrl={};

const Employee=require('../models/employee.model');

employeeCtrl.getEmployees = async (req, res) => {
    //Consultar todos
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.postEmployee = async (req, res) => {
    // Agregar Uno
    const newEmployee=new Employee(req.body);
    await newEmployee.save();
    res.send({status:'Employee Creado!'});
}

employeeCtrl.getEmployee = async (req, res) => {
    //Consultar Uno
    const employee = await Employee.findOne({_id:req.params.id});
    res.send(employee);
}

employeeCtrl.putEmployee = async (req, res) => {
    //Modificar Uno
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.send({status:"Employee Actuaizado!"});
}

employeeCtrl.deleteEmployee = async (req, res) => {
    //Eliminar Uno
    await Employee.findByIdAndDelete(req.params.id);
    res.send({status:'Employee Eliminado!'});
}

module.exports=employeeCtrl;