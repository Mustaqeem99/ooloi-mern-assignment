const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const routes = require("./routes");

app.use(cors());
app.use("/", routes); // sends all requests to routes page

// Start the server on port 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
