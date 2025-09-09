const express = require("express");

const app = express();

app.get("/health", (_req, res) => res.status(200).send("OK"));
app.get("/", (_req, res) => res.send("<h1>My E-commerce Application</h1>"));

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`App listening on ${port}`));
