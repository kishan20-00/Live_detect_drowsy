const router = require("express").Router();
let Marks = require("../models/marks");



//Add User
router.route("/add").post((req,res) => {
    const studentID    = req.body.studentID; 
    const email = req.body.email[0];
    const examType = req.body.examType;
    const score   = req.body.score;
    const date = req.body.date;
    
    
    if(!email || !studentID  || !examType  || !score || !date   ){
        return res.status(422).json({error:"please add all the feilds"})

    }
     

    Marks.findOne({email: email})
    .then(() => {
        

    const newMarks = new Marks({
        email,
        studentID,
        examType,
        score,
        date,
       
    })

    newMarks.save().then(() => {
         res.json("Marks Added")

    }).catch((err) => {
        console.log(err);
    })
  
}).catch((err) =>{
    console.log(err);
})
})



router.route("/").get((req,res) => {
     
    Marks.find().then((users) => {
        res.json(users)

    }).catch((err) => {
        console.log(err)
    })


})

// Update Marks using email
router.route("/update/:email").put(async (req, res) => {
    try {
        const email = req.params.email;
        const {studentID, examType, score,date  } = req.body;

        // Check if the email exists in the database
        const existingMark = await Marks.findOne({ email });

        if (!existingMark) {
            return res.status(404).json({ status: "Student not found", error: "User with the provided email does not exist" });
        }

        // Update user fields
    
        existingMark.studentID = studentID;
        existingMark.examType = examType;
        existingMark.score = score;
        existingMark.date  = date;
       
        // Save the updated user
        await existingMark.save();

        res.status(200).json({ status: "Marks updated", data: existingMark });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "Error with updating data", error: err.message });
    }
});



//Delete User Using an Id
router.route("/delete/:id").delete(async (req, res) => {
      let userId = req.params.id;
      
      await Marks.findByIdAndDelete(userId).then(() => {
          res.status(200).send({status: "Marks deleted"});
      }).catch ((err) => {
          console.log(err.message);
          res.status(500).send({status: " Error with delete Marks", error: err.message});
      })
    })


    router.route("/get/:email").get((req, res) => {
        const email = req.params.email;
    
        // Use find to retrieve all marks for the logged-in user
        Marks.find({ email: email })
            .then((marks) => {
                if (marks.length > 0) {
                    // If marks are found, return them
                    res.status(200).send({ status: "Marks fetched", marks });
                } else {
                    // If no marks are found, return a message indicating that
                    res.status(404).send({ status: "No marks found for the user" });
                }
            })
            .catch((err) => {
                // If there's an error, log it and return an error message
                console.log(err.message);
               
            });
    });
    


module.exports = router;