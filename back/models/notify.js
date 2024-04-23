const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const NotifySchema = new Schema({

  Status :{
    type: String,
    require: true
},

},{ timestamps: true });

const Notify = mongoose.model("Notify", NotifySchema);
module.exports = Notify;

