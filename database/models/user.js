const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  email: String,
  following: Array,
  followers: Array,
  recordings: Array,
  comments: Array
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;