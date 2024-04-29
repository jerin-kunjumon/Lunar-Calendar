import express from 'express';
const router = express.Router();
import { authUser,registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile } from '../controllers/usercontroller.js'
import { protect } from '../middleware/authMiddleware.js';


router.post('/signup',registerUser)
router.post('/login',authUser)
router.post('/logout',logoutUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);


export default router