<<<<<<< HEAD
import { Router } from "express";
import { getLogout, postLogin, postSignin } from "../controller/userController.js";

const router = Router();
router.post('/signup', postSignin);
router.post('/login', postLogin);
router.get('/logout', getLogout);

=======
import { Router } from "express";
import { getLogout, postLogin, postSignin } from "../controller/userController.js";

const router = Router();
router.post('/signup', postSignin);
router.post('/login', postLogin);
router.get('/logout', getLogout);

>>>>>>> ee47bd1428cf5d646fd4bee2ce37963a76b15a8b
export default router;