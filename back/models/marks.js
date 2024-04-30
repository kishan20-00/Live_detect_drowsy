const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MarksSchema = new Schema({

   studentID: {
    type: String,
  },

  email:{
    type: String,
  },
  
  examType :{
    type: String,
 },

  score :{
    type: Number,
  },
  date : {
    type:Date
  }

},{ timestamps: true });

const Marks = mongoose.model("Marks", MarksSchema);
module.exports = Marks;

