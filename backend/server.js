const express = require("express");
const config = require("./config/config");
const app = express();
const mysql = require("mysql2/promise");
const PORT = 8000;
const cors = require("cors");
const colors = require("colors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/", async function (req, res) {
    try {
        const connection = await mysql.createConnection(config.db);
        const [result, ] = await connection.execute("Select * from task");

        if (!result) {
            result = [];
        }

        res.status(200).json(result);
    } catch (err){
        res.status(500).json({error: err.message});
    }
});

app.listen(PORT, function () {
    console.log("Server is listening!".cyan.underline.bold);
});

