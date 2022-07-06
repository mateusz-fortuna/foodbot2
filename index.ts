import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import axios from "axios";

// ----------SERVER CONFIG---------- //

dotenv.config();
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
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
    },
    accessToken: REACT_APP_EMAILJS_TOKEN,
  };

  return axios
    .post("https://api.emailjs.com/api/v1.0/email/send", data)
    .then((apiRes) => res.send(apiRes))
    .then(() => console.log("Email sent successfully."))
    .catch((err) => console.error("Failed to sent email: ", err));
});
