import { Router } from "express";
import { search } from "../controllers/searchContoller";

const router = Router();

router.get("/", search);

export default router;
