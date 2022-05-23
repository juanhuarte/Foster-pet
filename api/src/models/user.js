const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
  },
  profileImage: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
  },
  location: {
    type: String,
    required: true,
  },
  favoritesAnimals: [
    {
      ref: "Animal",
      type: Schema.Types.ObjectId,
    },
  ],
});

schema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = model("User", schema);
