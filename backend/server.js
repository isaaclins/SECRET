import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 8000;

// __dirname is not available in ES modules, so you need to derive it.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.post("/submit", (req, res) => {
  const { password } = req.body;
  console.log(toString(password))
  if (password === "helloworld") {
    res.status(201).sendFile(path.join(__dirname, 'hello.html'));
  } else {
    res.status(401).sendFile(path.join(__dirname, 'unauthorized.html'));
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
