const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messSchema = new Schema({
    name: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
    address:{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
    phone:{
        type:Number,
        trim:true,
        minlength:10
    },
    clgName:{
        type:String,
        trim:true,
        minlength:3
    },
    link:{
        type:String,
        unique:true,
        trim:true,
        minlength:3
    },

},
    {
        timestamps:true,
    
});

const Mess = mongoose.model('Mess',messSchema);

module.exports = Mess;