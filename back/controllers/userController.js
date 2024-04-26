const userDetails = require("../models/user");

//add new Vehicle for system
exports.addNewUser= async (req, res) => {
 
    //constant variables for the attributes
    const {
        UserName,
        Address ,
        ContactNo,
        Password,
     } = req.body;
  
  
          const newUser = new userDetails({
            UserName,
        Address ,
        ContactNo,
        Password,
        })
    
        newUser.save().then(() => {
             res.json("User Added")
    
        }).catch((err) => {
          
        })
      .catch((err) =>{
        
    })
    };

//delete existing one
exports.deleteUser = async (req, res) => {
    let userID = req.params.id;
   
    await userDetails.findByIdAndDelete(userID).then(() => {
      res.status(200).json({ status: "Deleted Successfully" });
    }).catch((error) => {
      res.status(500).json({ status: "Error with Deleting", error: error.message });
    })
  }
   
 //update 
 exports.updateUser= async (req, res) => { 
    //fetch id from url
    let id = req.params.id;
    const {
        UserName,
        Address ,
        ContactNo,
        Password,
           } = req.body;
  
    const updateUser = {
        UserName,
        Address ,
        ContactNo,
        Password,
        }
  
  
    const update = await userDetails.findByIdAndUpdate(id, updateUser).then(() => {
      res.status(200).send({status: "User updated"})
    }).catch((err) => {
       
        res.status(500).send({status: "Error with updating user", error: err.message});
    })   
  }

//view 
exports.viewUser= async (req, res) => { 
 
    //calling  model
    userDetails.find().then((users) => {
      res.json(users)
  
  }).catch((err) => {
     
  })
  
  }
  //view one
  exports.viewOneUser = async (req, res) => {
    
    let userNumber = req.params.id;
    const user = await userDetails.findById(userNumber).then((user) => {
        res.status(200).send({status: "fetched", user})
    }).catch(() => {
        
         res.status(500).send({status:"Error with get " , error: err.message})
    })
  }

exports.viewOneUserName = async (req, res) => {
    const userName = req.params.UserName; // Assuming the name is passed as a parameter

    try {
        const user = await userDetails.findOne({ name: userName });
        if (user) {
            res.status(200).json({ status: "success", user });
        } else {
            res.status(404).json({ status: "error", message: "Person not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

exports.login = async (req, res) => {
  const { 
    UserName, 
    Password } = req.body;

  try {
      // Find the user by username
      const user = await userDetails.findOne({ UserName: UserName });

      // If user not found, return error
      if (!user) {
          return res.status(404).json({ error: "User not found" });
      }

      // Check if the password matches
      if (user.Password !== Password) {
          return res.status(401).json({ error: "Incorrect password" });
      }

      // If username and password match, return success
      res.status(200).json({ status: "success", user });
  } catch (error) {
      // Handle any errors that occur during the process
      res.status(500).json({ error: error.message });
  }
};