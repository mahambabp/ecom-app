const express = require("express");
const app = express();

app.get("/health", (_req, res) => res.status(200).send("OK"));
app.get("/", (_req, res) => res.send("<h1>E-commerce App</h1>"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on ${port}`));
