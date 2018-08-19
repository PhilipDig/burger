var express = require("express");

var router = express.Router();

var burger = require("../models/burgers");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.getAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        // Redirect to landing page to show new burger
        res.redirect("/")
    });
});

// Note: used a post instead of a put,
// so that the post request can be generated directly by the html form
router.post("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.devour(req.params.id, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).redirect("/")
        } else {
            // Redirect to landing page to show devoured burger
            res.redirect("/")
        }
    });
});

// Export routes for server.js to use.
module.exports = router;