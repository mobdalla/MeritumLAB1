import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { UserPunteggio } from "../controllers/auth.punteggio";
import { UserController } from "../controllers/auth.users";
import { authMiddleware } from "../middlewares/auth.middleware";
import passport from "../passport";
const router = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/profile", AuthController.profile);
router.post("/complete", AuthController.completeProfile);
router.post("/score", UserPunteggio.Update);
router.get("/utenti", UserController.findAllC);
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  AuthController.googleCallback,
);
router.get("/users/by-sector", UserController.findBySector); // Nuovo endpoint

export default router;
