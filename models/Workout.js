const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  totalDuration:{
    type: Number,
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Type of exercise is required!"
    },
    name: {
      type: String,
      trim: true,
      required: "Name of exercise is required"
    },
    duration: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    distance: {
      type: Number,
    }
  }],
},
  { toJSON: { virtuals: true } }
);

WorkoutSchema.methods.sumDuration = function () {
  this.totalDuration = 100;
  return this.totalDuration;
};


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;