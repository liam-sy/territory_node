const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const fs = require("fs");


//middleware
app.use(cors());
app.use(express.json())

//Routes

//example of working one-territory request in a very simple form

app.get("/territories", async(req, res) => {
    try {
        const allAdrs = await pool.query("SELECT * FROM _app_get_territory_addresses_by_id(001)");
        res.json(allAdrs.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get choice territory

app.get("/territories/id/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const adrs = await pool.query("SELECT * FROM _app_get_territory_addresses_by_id($1)", [id]);

        res.json(adrs.rows);

    } catch (err) {
        console.error(err.message);
    }
});

//get zip

app.get("/address_table/zip/:zip_code", async(req, res) => {
    try {
        const { zip_code } = req.params;
        const adrs = await pool.query("SELECT * FROM address_table WHERE zip_code = $1", [zip_code]);
        res.json(adrs.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Get list of territory names+ids

app.get("/territories/update", async(req, res) => {
    try {

        const dbTerrIDName = await pool.query("SELECT id, name FROM territories");

        res.json(dbTerrIDName.rows);

    } catch (err) {
        console.error(err.message);
    }
});



//Server start affirmation


app.listen(5000, () => {
    console.log("server ready to go on 5000");
});

//change test 1