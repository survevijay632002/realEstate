import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  console.log("running ");
});
export default router;
