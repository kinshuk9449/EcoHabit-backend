const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { logEmission } = require("../controllers/emissionController");
const Emission = require("../models/Emission"); // Make sure this is imported

router.post("/log", auth, logEmission);

router.get('/history', auth, async (req, res) => {
    try {
        const records = await Emission.find({ userId: req.user.id }).sort({ timestamp: -1 });
        res.json({ records });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch history' });
    }
});

module.exports = router;
