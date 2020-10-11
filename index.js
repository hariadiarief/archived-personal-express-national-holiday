const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", require("./routes/Holiday"));

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
