const { Router } = require('express');
const authController = require('../controllers/authController');
const { requireAuth, checkUsern, checkUser}  = require('../middleware/authMiddleware');


const router = Router();

router.get("/signup", authController.signup_get);
router.post("/signup", authController.signup_post);
router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.get("/logout", authController.logout_get);
router.post("/createJob",requireAuth, checkUser, authController.createJob_post);
router.get("/createJob", requireAuth, checkUser, authController.createJob_get);


module.exports = router;

