const mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    projectId:{type:Number,required:true} ,
   msg:String,
   state: {
    type: String,
    enum: ["done", "progress","NotDoneYet"],
    required: true,
  },
  dateOfPosting: {
    type: Date,
    default: Date.now,required: true,
  },
  deadline: {
    type: Date,
    validate: [
      {
        validator: function (value) {
          return this.dateOfPosting < value;
        },
        msg: "deadline should be greater than dateOfPosting",
      },
    ],required: true,
  },
      
    



  },{
    timestamps: true
  }
);

module.exports = mongoose.model("Tasks", schema);
