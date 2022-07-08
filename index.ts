import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import axios from "axios";
import { Inputs } from "./client/src/components/Form";

// ----------SERVER CONFIG---------- //

dotenv.config();
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`The app listening on port ${port}`);
});

// ----------HANDLE FORM---------- //

const {
  REACT_APP_EMAILJS_SERVICE,
  REACT_APP_EMAILJS_USER,
  REACT_APP_EMAILJS_TEMPLATE,
  REACT_APP_EMAILJS_TOKEN,
} = process.env;

app.post("/contact/submit", (req, res) => {
  const data = {
    user_id: REACT_APP_EMAILJS_USER,
    service_id: REACT_APP_EMAILJS_SERVICE,
    template_id: REACT_APP_EMAILJS_TEMPLATE,
    template_params: {
      ...req.body,
    } as Inputs,
    accessToken: REACT_APP_EMAILJS_TOKEN,
  };

  return axios
    .post("https://api.emailjs.com/api/v1.0/email/send", data)
    .then(() => res.sendStatus(200));
});
