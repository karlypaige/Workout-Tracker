const path = require('path');

module.exports = (app) => {
    app.get("/exercise", (req, res) => {
        res.sendFile(path.resolve(__dirname, '../public/exercise.html')
        );
    })

    app.get("/stats", (req, res) => {
        res.sendFile(path.resolve(__dirname, '../public/stats.html')
        );
    })
}