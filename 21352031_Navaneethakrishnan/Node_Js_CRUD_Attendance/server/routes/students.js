const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentsController");


//view All record
router.get("/",studentController.view);

//Add New records
router.get("/adduser",studentController.adduser);
router.post("/adduser",studentController.save);


//Update Records
router.get("/edituser/:id",studentController.edituser);
router.post("/edituser/:id",studentController.edit);

//internalMarks
//Update Records
router.get("/internalMark/:id",studentController.internalMark);
router.post("/internalMark/:id",studentController.internal);


//attendance
router.get("/attendance/:id",studentController.attendance);
router.post("/attendance/:id",studentController.mark_attendance);


//Delete Records
router.get("/deleteuser/:id",studentController.delete);












module.exports = router;