const mongoose = require("mongoose");

mongoose.model("Item", {
  name:{
    type: String,
    require: true,
  },
  price:{
    type: Number,
    require: true
  },
  description:{
    type: String,
    require: true,
  }
});