import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { UserPunteggio } from "../controllers/auth.punteggio.ts";
import { UserController } from "../controllers/auth.users.ts";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/profile", AuthController.profile);
router.post("/score", UserPunteggio.Update);
router.get("/utenti", UserController.findAll);

router.get("/users/by-sector", UserController.findBySector); // Nuovo endpoint

export default router;
