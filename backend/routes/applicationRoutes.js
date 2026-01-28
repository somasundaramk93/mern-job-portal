const express = require("express");
const Application = require("../models/Applicaton");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

const router = express.Router();

router.post("/:jobId", auth, role("seeker"), async (req, res) => {
  const existing = await Application.findOne({ jobId: req.params.jobId, userId: req.user.userId });
  if (existing) return res.status(400).json({ message: "Already applied" });

  const app = new Application({
    jobId: req.params.jobId,
    userId: req.user.userId
  });

  await app.save();
  res.json({ message: "Applied successfully" });
});

module.exports = router;
