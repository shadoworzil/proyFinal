var express = require('express');
var router = express.Router();
var reclamoController = require('../controllers/reclamoController');

/* GET home page. */
router.get('/',reclamoController.principal);
router.get('/registro',reclamoController.registroReclamo);
router.post('/guardarReclamo', reclamoController.guardarReclamo);
module.exports = router;
