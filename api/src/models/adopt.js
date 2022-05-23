const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const schema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  adoptionCode: {
    type: String,
    required: true,
  },
  user: {
    ref: "User",
    type: Schema.Types.ObjectId,
  },
  animal: {
    ref: "Animal",
    type: Schema.Types.ObjectId,
  },
});

schema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = model("Adopt", schema);
