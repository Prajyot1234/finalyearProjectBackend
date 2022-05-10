const express = require('express');
const router = express.Router();

//Handling get and post resquest.
router.get('/',(req,res) => {
    res.status(200).json({ message : "Parent directory"});
});

router.post('/',(req,res) => {
    res.send("we are posting stufff to post request.");
})

module.exports = router;