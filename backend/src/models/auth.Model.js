import mongoose from "mongoose";

const authSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // ✅ corrected key
);

const authModel = mongoose.model("blogCoCollection", authSchema);

export default authModel;
