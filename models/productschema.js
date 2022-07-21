const mongoose = require('mongoose')

const productSchema= mongoose.Schema({
    featured:{
        type: Boolean
    },
    rating:{
        type: Number,
        min:1,
        max:5,
        default:4
    },
    name:{
        type: String,
        required: true,
        minlength:5,
        maxlength:20,
        unique: true
    },
    price:{
        type: Number,
        required: true,
    },
    company:{
        type: String,
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            message:'{values} is not supported'
        }
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
},{
    timestamps: true
});

module.exports= mongoose.model('Products',productSchema);