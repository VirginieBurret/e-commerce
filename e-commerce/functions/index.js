const functions = require("firebase-functions");


const express=require("express");
const cors = require("cors");

// secret key firebase
// const stripe=require("stripe")
// ('sk_test_51Imc6qFWDa1pRXQrzydVr3gVCx48Vb7avTVLihoKoj6svOY
// kO0qAAbdu04UmmpDTN5cUd0kNeHKpT8BPI2chqGyu005tVFo1bw')


const app = express();
app.use(cors);
app.use(express.json());


app.get("/salut", (req, res) => res.status(200).send("hello world"));

// LISTEN COMMAND
exports.api = functions.https.onRequest(app);

// default endpoint http://localhost:5001/e-commerce-40cdf/us-central1/api
