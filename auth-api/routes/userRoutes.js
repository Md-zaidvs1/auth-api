const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getProfile } = require('../controllers/userController');

router.get('/me', authMiddleware, getProfile);

module.exports = router;