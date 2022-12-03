const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  orders: [Order.schema],
});

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  console.log('entered password', password)
  console.log('correct password', this.password)
  console.log('hello');
  const bcrypt = await bcrypt.compare(password, this.password);
  console.log('bcrypt.compare', bcrypt);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
