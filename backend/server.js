import express from "express";
import path from "path";

const app = express();
const port = 8000;

app.use(express.json());

app.post("/auth", (req, res) =>{
res.status(200).send();
});

app.post("/authy", (req, res) => {
  const { password } = req.body;
  console.log(password)
  if (password === "helloworld") {
    res.status(200).send();
  } else {
    res.status(401).send();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
