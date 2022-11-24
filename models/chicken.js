const mongoose = require("mongoose");

const chickenSchema = mongoose.Schema({
  userId: { type: String, required: true },
  birthday: { type: Date, required: true },
  weight: { type: Number, required: true },
  steps: { type: Number, required: true },
  isRunning: { type: Boolean, required: true },
});

module.exports = mongoose.model("Chicken", chickenSchema);
