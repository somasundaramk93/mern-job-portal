const express = require("express");
const Job = require("../models/Job");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const jobs = await Job.find().populate("postedBy", "name");
  res.json(jobs);
});

router.post("/", auth, role("recruiter"), async (req, res) => {
  const job = new Job({ ...req.body, postedBy: req.user.userId });
  await job.save();
  res.json(job);
});

module.exports = router;
