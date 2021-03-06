const fs = require('fs');
const { Workout } = require('../models');
const models = require('../models');

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        models.Workout.find()
            .select("-__v")
            .then((workouts) => res.json(workouts))
            .catch((err) => res.status(400).json(err));
    });

    app.post("/api/workouts", ({ body }, res) => {
        models.Workout.create(body)
            .then(workout => res.json(workout))
            .catch((err) => res.status(400).json(err));
    });

    app.put("/api/workouts/:id", (req, res) => {
        models.Workout.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { exercises: req.body } },
            {
                new: true,
            }
        )
            .then((workouts) => res.json(workouts))
            .catch((err) => res.status(400).json(err));
    });

    app.get("/api/workouts/range", (req, res) => {
        models.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: { 
                        $sum: "$exercises.duration"
                    }
                }
            }
        ]).sort({_id:-1}).limit(7).sort({_id:1})
            .then(workout => res.json(workout))
            .catch((err) => res.status(400).json(err));

    });
};