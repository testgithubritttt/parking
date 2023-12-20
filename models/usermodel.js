import { Schema as schema, model } from "mongoose";
const Schema = schema;
import bcrypt from 'bcrypt';


// Define User Schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  Role: {
    type: String,
    default: '3',
  },
  Created_At: {
    type: Date,
    default: null,
  },
  Updated_At: {
    type: Date,
    default: null,
  },
  is_Deleted: {
    type: Boolean,
    default: false,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  verification_timestamp: {
    type: Date,
    default: null,
  },
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  }
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = model("User", userSchema);


export default User;

