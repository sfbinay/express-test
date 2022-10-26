import express from "express";

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.json({
    test: "Test",
  });
});

app.listen(port, () => {
  //eslint-disable-next-line
  console.log("Server starting at port: 3000");
});
