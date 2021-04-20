
const express = require('express');
const router = express.Router(); // this is called mounting the routers.

const loanController = require('../controllers/loanController'); 

// router.route('/').get(tourController.getAllTours).post(tourController.checkBody,tourController.createTour);

router.route('/').get(loanController.getAllLoans).post(loanController.createLoan);
router.route('/:id').delete(loanController.deleteLoan).patch(loanController.updateLoan).get(loanController.getLoan);

module.exports = router;

