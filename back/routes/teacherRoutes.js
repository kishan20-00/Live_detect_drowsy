const router = require("express").Router();
let Teacher = require("../models/teacher");



//Add Teacher
router.route("/add").post((req,res) => {
    const email = req.body.email;
    const userName = req.body.userName;
    const teacherID    = req.body.teacherID;   
    const password   = req.body.password;
    
    
    if(!email || !userName  || !teacherID   || !password ){
        return res.status(422).json({error:"please add all the feilds"})

    }
     

    Teacher.findOne({email: email})
    .then((savedUser) => {
        if(savedUser) {
            return res.status(422).json({error:"Teacher already exists with that email"})
        }

    const newUser = new Teacher({
        email,
        userName,
        teacherID,
        password,
       
    })

    newUser.save().then(() => {
         res.json("Teacher Added")

    }).catch((err) => {
        console.log(err);
    })
  
}).catch((err) =>{
    console.log(err);
})
})



router.route("/").get((req,res) => {
     
    Teacher.find().then((users) => {
        res.json(users)

    }).catch((err) => {
        console.log(err)
    })


})

// Update user using email
router.route("/update/:email").put(async (req, res) => {
    try {
        const email = req.params.email;
        const { userName, teacherID,password } = req.body;

        // Check if the email exists in the database
        const existingUser = await Teacher.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ status: "Teacher not found", error: "User with the provided email does not exist" });
        }

        // Update user fields
        existingUser.userName = userName;
        existingUser.teacherID = teacherID;
        existingUser.password = password;

        // Save the updated user
        await existingUser.save();

        res.status(200).json({ status: "Teacher updated", data: existingUser });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "Error with updating data", error: err.message });
    }
});



//Delete User Using an Id
router.route("/delete/:id").delete(async (req, res) => {
      let userId = req.params.id;
      
      await Teacher.findByIdAndDelete(userId).then(() => {
          res.status(200).send({status: "Teacher deleted"});
      }).catch ((err) => {
          console.log(err.message);
          res.status(500).send({status: " Error with delete User", error: err.message});
      })
    })



router.route("/get/:email").get((req, res) => {
    const email = req.params.email;

    // Use findOne to find a single user based on the email
    Teacher.findOne({ email: email })
        .then((user) => {
            if (user) {
                // If user is found, return it
                res.status(200).send({ status: "Teacher fetched", user });
            } else {
                // If user is not found, return a message indicating that
                res.status(404).send({ status: "Teacher not found" });
            }
        })
        .catch((err) => {
            // If there's an error, log it and return an error message
            console.log(err.message);
            res.status(500).send({ status: "Error with get user", error: err.message });
        });
});




router.route("/log").post(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Please provide both email and password" });
    }

    try {
        const user = await Teacher.findOne({ email });

        if (!user) {
            return res.status(422).json({ error: "Invalid email or password" });
        }

        // Compare hashed password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(422).json({ error: "Invalid email or password" });
        }

        // Password matches, return user object along with userType
        res.json({ user, userType: user.userType });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;