const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const captainController = require('../controllers/captain.controller')


router.post('/register', [
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    // body('status').isIn(['active', 'inactive']).withMessage('Status must be either active or inactive'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be either car, motorcycle, or auto'),
    body('vehicle.location.lat').isFloat().withMessage('Latitude must be a float number'),
    body('vehicle.location.lng').isFloat().withMessage('Longitude must be a float number'),
], captainController.registerCaptain);


module.exports = router;