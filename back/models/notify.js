const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NotifySchema = new Schema({

  UserName: {
    type: String,
  },
  Status :{
    type: String,
},

},{ timestamps: true });

const Notify = mongoose.model("Notify", NotifySchema);
module.exports = Notify;

