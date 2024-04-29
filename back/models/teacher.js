const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt'); // Import bcrypt module

const TeacherSchema = new Schema({

userName :{
    type: String,
},

userType :{
    type: String,
    default: "teacher",
},

teacherID:{
    type: String,
},

email :{
    type: String,
},

images :{
    type: String,
},

password :{
    type: String,
},

},{ timestamps: true });


// Hash the password before saving it to the database
TeacherSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

// Method to compare passwords
TeacherSchema.methods.comparePassword = function(candidatePassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
            if (err) return reject(err);
            resolve(isMatch);
        });
    });
};

const Teacher = mongoose.model("Teachers", TeacherSchema);
module.exports = Teacher;

