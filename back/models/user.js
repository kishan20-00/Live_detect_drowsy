const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

  UserName :{
    type: String,
},
Address :{
    type: String,
},
ContactNo :{
    type: String,
},
Password :{
    type: String,
},

},{ timestamps: true });

const User = mongoose.model("UsersS", UserSchema);
module.exports = User;

