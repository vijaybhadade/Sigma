const mongoose=require("mongoose");

const chatSchema=new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required:true
    },
    msg: {
        type: String,
        maxLength:70
    },
    created_at: {
        type: Date
    }
});

const Chat=mongoose.model("Chat",chatSchema);

exports=module.exports=Chat;