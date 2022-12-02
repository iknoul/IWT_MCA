var express = require('express');
var router = express.Router();


var stContr=require('../controller/studentController');
var tchrContr=require('../controller/teacherController');
var adminContr=require('../controller/adminController');
var loginContr=require('../controller/loginController');


/* GET home page. */
router.get('/',adminContr.main);
router.get('/login/:id',loginContr.login);
router.get('/loginselect',loginContr.loginselect);
router.post('/loginaction/:id',loginContr.loginaction);
router.get('/studentDetails',adminContr.show);
router.get('/admin',adminContr.view);
router.post('/search',adminContr.search);
router.get('/addPage/:id',adminContr.add);
router.post('/add/:id',adminContr.addAction);
router.get('/delete/:id',adminContr.delete);
//router.get('/edit/:id',adminContr.edit);
router.get('/attendance',tchrContr.attendance);
router.post('/attAction',tchrContr.attAction);
router.get('/teacherDetails',adminContr.showTeacher);
router.get('/addmark',tchrContr.addmark);
router.post('/markAction',tchrContr.markaction);
router.get('/course',adminContr.course)
router.get('/logout',loginContr.logout);
router.get('/regcourse',stContr.regcourse);
router.post('/regaction',stContr.regaction);




module.exports = router;
