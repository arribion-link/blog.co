import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    blog_preview: {
      type: String,
      required: true,
    },
    blog_content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // ✅ corrected key
);

export const blogModel = mongoose.model("blogCollections", blogSchema);

export default blogModel;
