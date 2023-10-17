import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, "../../client/build")));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
