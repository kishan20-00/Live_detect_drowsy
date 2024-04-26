const router = require("express").Router();

const {addNewNotify,viewNotify,viewOneNotify, updateNotify,deleteNotify, viewNotifyByName} = require ('../controllers/notifyController.js')

//add new Hotel 
router.post("/add", addNewNotify);

//view all Hotels
router.get("/", viewNotify);

//update existing Hotel
 router.put("/update/:id",updateNotify);

//delete existing one
 router.delete("/delete/:id",deleteNotify);

//view one Hotel
router.get("/get/:id", viewOneNotify);

//view one Hotel
router.get("/getname/:nameid", viewNotifyByName);

module.exports = router;