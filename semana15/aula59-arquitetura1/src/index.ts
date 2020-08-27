import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { signup } from "./controller/signup";
import { login } from "./controller/login";
import { getAllUsers } from "./controller/getAllUsers";
import dotenv from "dotenv";
import { deleteUser } from "./controller/deleteUser";
const app = express();
app.use(express.json());
dotenv.config();

app.put("/signup", signup);
app.post("/login", login);
app.get("/all", getAllUsers);
app.delete("/:id", deleteUser);

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
