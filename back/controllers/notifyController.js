const notifyDetails = require("../models/notify");

//add new Vehicle for system
exports.addNewNotify= async (req, res) => {
 
    //constant variables for the attributes
    const {
      UserName,
        Status
    }= req.body;
  
          const newNotify = new notifyDetails({
            UserName,
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
exports.deleteNotify = async (req, res) => {
    let notifyID = req.params.id;
   
    await notifyDetails.findByIdAndDelete(notifyID).then(() => {
      res.status(200).json({ status: "Deleted Successfully" });
    }).catch((error) => {
      res.status(500).json({ status: "Error with Deleting", error: error.message });
    })
  }
   
 //update 
 exports.updateNotify= async (req, res) => { 
    //fetch id from url
    let id = req.params.id;
    const {
      UserName,
            Status
           } = req.body;
  
    const updateNotify = {
      UserName,
      Status
        }
  
  
    const update = await notifyDetails.findByIdAndUpdate(id, updateNotify).then(() => {
      res.status(200).send({status: "Notify updated"})
    }).catch((err) => {
       
        res.status(500).send({status: "Error with updating Notify", error: err.message});
    })   
  }

//view 
exports.viewNotify= async (req, res) => { 
 
    //calling  model
    notifyDetails.find().then((notifies) => {
      res.json(notifies)
  
  }).catch((err) => {
     
  })
  
  }
  //view one
  exports.viewOneNotify = async (req, res) => {
    
    let notifyNumber = req.params.id;
    const notify = await notifyDetails.findById(notifyNumber).then((notify) => {
        res.status(200).send({status: "fetched", notify})
    }).catch(() => {
        
         res.status(500).send({status:"Error with get " , error: err.message})
    })
  }

//view one
exports.viewNotifyByName = async (req, res) => {
    
  let nameid = req.params.UserName;
  const notify = await notifyDetails.find(nameid).then((notify) => {
      res.status(200).send({status: "  fetched", notify})
  }).catch(() => {
       res.status(500).send({status:"Error with get " , error: err.message})
  })
}