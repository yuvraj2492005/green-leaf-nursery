const express = require("express");
const path = require("path");

const app = express();

const PORT = 5000;

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));


// Serve main project
app.use(
    express.static(
        path.join(__dirname, "..")
    )
);


// API Test
app.get("/api/status", (req, res) => {

    res.json({
        success: true,
        project: "Green Leaf Nursery",
        location: "Nashik",
        message: "Server is running successfully"
    });

});


// Home
app.get("/", (req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            "..",
            "index.html"
        )
    );

});


app.listen(PORT, () => {

    console.log(
        `GREEN LEAF running at http://localhost:${PORT}`
    );

});