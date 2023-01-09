import express from "express";
import { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening on port 5000");
});
