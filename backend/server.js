import express from "express";
import cors from 'cors';


const app = express();
const port = 8000;
app.use(cors());

app.use(express.json());

app.post("/api/submit", (req, res) => {
  const { password } = req.body;
  console.log(password);
  if (password === "helloworld") {
    res.sendStatus(200); // OK
  } else {
    res.sendStatus(401); // UNAUTHORIZED
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
