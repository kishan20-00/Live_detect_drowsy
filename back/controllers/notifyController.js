const notifyDetails = require("../models/notify");

//add new Vehicle for system
exports.addNewNotify= async (req, res) => {
 
    //constant variables for the attributes
    const {
        Status
    }= req.body;
  
          const newNotify = new notifyDetails({
            Status
        })
    
        newNotify.save().then(() => {
             res.json("Notify Added")
    
        }).catch((err) => {
          
        })
      
    .catch((err) =>{
        
    })
    };

//delete existing one
exports.deleteCloth = async (req, res) => {
    let clothID = req.params.id;
   
    await clothDetails.findByIdAndDelete(clothID).then(() => {
      res.status(200).json({ status: "Deleted Successfully" });
    }).catch((error) => {
      res.status(500).json({ status: "Error with Deleting", error: error.message });
    })
  }
   
 //update 
 exports.updateCloth= async (req, res) => { 
    //fetch id from url
    let id = req.params.id;
    const {
        Username,
        ClothName,
        ClothImage,
        WearType,
        Casualty
           } = req.body;
  
    const updateCloth = {
        Username,
        ClothName,
        ClothImage,
        WearType,
        Casualty
        }
  
  
    const update = await clothDetails.findByIdAndUpdate(id, updateCloth).then(() => {
      res.status(200).send({status: "Cloth updated"})
    }).catch((err) => {
       
        res.status(500).send({status: "Error with updating Cloth", error: err.message});
    })   
  }

//view 
exports.viewCloths= async (req, res) => { 
 
    //calling  model
    clothDetails.find().then((cloths) => {
      res.json(cloths)
  
  }).catch((err) => {
     
  })
  
  }
  //view one
  exports.viewOneCloth = async (req, res) => {
    
    let clothNumber = req.params.id;
    const cloth = await clothDetails.findById(clothNumber).then((cloth) => {
        res.status(200).send({status: "fetched", cloth})
    }).catch(() => {
        
         res.status(500).send({status:"Error with get " , error: err.message})
    })
  }

exports.viewOneClothName = async (req, res) => {
    const clothName = req.params.name; // Assuming the name is passed as a parameter

    try {
        const cloth = await clothDetails.findOne({ name: clothName });
        if (cloth) {
            res.status(200).json({ status: "success", cloth });
        } else {
            res.status(404).json({ status: "error", message: "Cloth not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};