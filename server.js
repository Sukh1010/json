import express from "express";
import connectDb from "./dbConnection.js";
import fs from "fs";
connectDb();

const app = express();
app.use(express.json());

app.get("/data", async (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
});

// Convert the object to a JSON string
// const jsonString = JSON.stringify(data);

// // Write the data to the file
// fs.writeFile('data.json', jsonString, err => {
//   if (err) {
//     console.log('Error writing file', err);
//   } else {
//     console.log('Data written to file');
//   }
// });

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
