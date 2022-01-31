const express = require("express");
const app = express();


app.use(express.static("../client/dist/"));

// Static route for specific product
// app.get("/id/:id", (req, res) => {
//   res.sendFile("index.html", { root: "../client/dist" });
// });




app.listen(3000, () => {
  console.log(`-- Listening on port 3000 --`);
});