const router = require("express").Router();

const {addNewCloth,viewCloths,viewOneCloth, updateCloth,deleteCloth} = require ('../controllers/clothController.js')

//add new Hotel 
router.post("/add", addNewCloth);

//view all Hotels
router.get("/", viewCloths);

//update existing Hotel
 router.put("/update/:id",updateCloth);

//delete existing one
 router.delete("/delete/:id",deleteCloth);

//view one Hotel
router.get("/get/:id", viewOneCloth);



module.exports = router;