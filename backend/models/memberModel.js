import mongoose from 'mongoose';

const MemberSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: true,
        
    },

    edad:{
        type: Number,
        required: true,
       
    },

    peso:{
        type: Number,
        required: true,
       
    },

    altura:{
        type: Number,
        required: true,
     
    },

    observaciones:{
        type: String,
        required: true,
        
    },

    control:{
        type: Date,
        required: true,
        default:Date.now()
      
    },
    email:{
        type: String,
        required: true,
      
    },
    trainer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'trainers',
      
    },

},{
    timestamps: true
});
const Member = mongoose.model('members', MemberSchema);
export default Member;

