const fs = require('fs');
const models = require('../models');

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        models.Workout.find()
            .select("-__v")
            .then((workouts) => res.json(workouts))
            .catch((err) => res.status(400).json(err));
    });

    app.post("/api/workouts", ({ body }, res) => {
        console.log(body);
        models.Workout.create(body)
            .then(Workout => res.json(workouts))
            .catch((err) => res.status(400).json(err));
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body);
        console.log(req.params.id)
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
}
