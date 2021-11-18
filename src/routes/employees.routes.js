const { Router }=require("express");
const router = Router();

const employeesCtrl=require('../controllers/employees.controller');

router.get('/', employeesCtrl.getEmployees );
router.post('/', employeesCtrl.postEmployee );
router.get('/:id', employeesCtrl.getEmployee );
router.put('/:id', employeesCtrl.putEmployee );
router.delete('/:id', employeesCtrl.deleteEmployee );

module.exports = router;
