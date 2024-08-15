import express from "express"
import { signup } from "../controlar/user.controlar.js"
const router = express.Router();

router.post("/signup", signup)
export default router;