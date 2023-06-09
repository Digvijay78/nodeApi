const express = require('express');
const dishController = require('../controllers/dishController');


const router = express.Router();

router
    .route('/')
    .get(dishController.getAllDish)
    .post(dishController.createDish);
    
router
    .route('/:id')
    .get(dishController.getDish)
    .patch(dishController.updateDish)
    .delete(dishController.deleteDish);

module.exports = router;