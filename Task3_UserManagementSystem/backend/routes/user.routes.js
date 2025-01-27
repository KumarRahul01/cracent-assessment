import express from "express";
import { addUser, deleteUser, getUser } from "../controller/user.controller.js";

const router = express.Router();

router.route("/api/get-users").get(getUser);
router.route("/api/save-user").post(addUser);
router.route("/api/delete-user/:id").delete(deleteUser)


export default router;