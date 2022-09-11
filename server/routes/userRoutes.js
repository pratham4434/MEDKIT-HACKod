import { Router } from "express";
import { getLogout, postLogin, postSignin } from "../controller/userController.js";

const router = Router();
router.post('/signup', postSignin);
router.post('/login', postLogin);
router.get('/logout', getLogout);

export default router;