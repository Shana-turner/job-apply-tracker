const { Router } = require('express');
const authController = require('../controllers/authController');
const jobController = require('../controllers/jobController');
const { requireAuth, checkUser}  = require('../middleware/authMiddleware');


const router = Router();

router.get("/signup", authController.signup_get);
router.post("/signup", authController.signup_post);
router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.get("/logout", authController.logout_get);
router.post("/createJob",requireAuth, checkUser, jobController.createJob_post);
router.get("/home", requireAuth, checkUser, jobController.getUserJob);
router.get('/job/:id',requireAuth, checkUser, jobController.getJobById);

//router.put("/home/:id", requireAuth,checkUser,jobController.updateJob);


module.exports = router;

