const express = require("express");

const app = express();

app.get("/GetHwid", (req, res) => {
  let HWID = req.headers['syn-fingerprint'] // < Grabs the headers sent by syanpse using syn.request and finds syn-fingerprint ( there hwid ) you can also change it to the syn uid shit
  console.log(HWID) // logs it to console


  res.send(HWID) // sends a response back with there hwid
})

app.listen(80, () => {
  console.log("Server Started")
})
