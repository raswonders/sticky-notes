import express from "express";
import path from "path";
import process from "process";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

// recreate __filename, __dirname for ES6 env.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the /dist directory
app.use(express.static(path.join(__dirname, "dist")));

// Catch all other routes and serve the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});