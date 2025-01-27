import express from "express";
import { deleteNote, getNotes, saveNotes, updateNote } from "../controller/notes.controller.js";

const router = express.Router();

router.route("/api/notes").get(getNotes);
router.route("/api/save-note").post(saveNotes);
router.route("/api/update-note/:id").put(updateNote);
router.route("/api/delete-note/:id").delete(deleteNote);

export default router;