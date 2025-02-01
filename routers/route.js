const express = require("express")
const router = express.Router();


const{Createpost} = require("../controllers/Createpost");
const{Createcomment} = require("../controllers/Createcomment");
const{Generatelike} = require("../controllers/likespost");

router.post("/createpost" , Createpost);
router.post("/createcomment" , Createcomment);
router.post("/generatelike ", Generatelike);

module.exports = router;