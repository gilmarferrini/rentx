import { Router } from "express";

import { AuthenticateController } from "@modules/accounts/useCases/authenticateUser/AuthenticateController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const authenticateRoutes = Router();
const authenticateController = new AuthenticateController();

authenticateRoutes.post(
  "/sessions",
  ensureAuthenticated,
  ensureAdmin,
  authenticateController.handle
);

export { authenticateRoutes };
