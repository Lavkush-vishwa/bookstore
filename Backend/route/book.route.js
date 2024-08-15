import express from "express";
import { getBook } from "../controlar/book.controlar.js";
const router = express.Router();

router.get("/", getBook);

export default router;
