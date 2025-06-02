const Emission = require("../models/Emission");

exports.logEmission = async (req, res) => {
    const { transportMode, distanceKm } = req.body;
    const factors = { car: 0.2, bus: 0.1, train: 0.05 };

    const emissionKg = (factors[transportMode] || 0.15) * distanceKm;

    const newLog = new Emission({
        userId: req.user.id,
        transportMode,
        distanceKm,
        emissionKg
    });

    await newLog.save();
    res.json({ message: "Emission logged", data: newLog });
};
