import { Router, Request, Response } from "express";
import handleError from "../../middleware/errorHandle.middleware";
import userController from "../../controllers/user.controller";
import { responseHandler } from "../../middleware/responseHandler";
import { checkUserReq } from "../../middleware/checkUserReq";

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post(
  "/register",
  checkUserReq,
  responseHandler(userController.registerUser.bind(userController)),
  handleError
);

router.post(
  "/login",
  checkUserReq,
  responseHandler(userController.loginUser.bind(userController)),
  handleError
)

export default router;
