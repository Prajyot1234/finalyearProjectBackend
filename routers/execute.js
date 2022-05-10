const express = require("express");
const router = express.Router();
const axios = require('axios');

const mapLanguageToCode = require('../map/mapLanguageToCode.json');

// environment variable's
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const URL = process.env.URL;

router.post('/',(req,res) => {
    const { code, language, input } = req.body;
    const program = {
        script: code,   
        language: mapLanguageToCode[language].code,
        versionIndex: mapLanguageToCode[language].version,
        stdin: input,
        clientId: clientId,
        clientSecret: clientSecret,
    };
    console.log("Execute Called:", program);
    axios
        .post(URL, program)
        .then((response) => {
            console.log("Responding with:", response.data);
            res.status(200).json(response.data);
        })
        .catch((error) => {
            console.log("Error occured: ",error);
            res.status(400).json(error.data);
        });
});

module.exports = router;