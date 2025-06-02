const mongoose = require("mongoose");

const emissionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    transportMode: { type: String, required: true },
    distanceKm: { type: Number, required: true },
    emissionKg: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Emission", emissionSchema);
