import mongoose, { mongo } from "mongoose";

const blogSchema = async () => {
    await mongoose.Schema({
        imgUrl: {
            required: true,
            type: String
        },
        title: {
            type: String,
            required: true
        },
        blog_preview: {
            required: true,
            type: String
        },
        blog_content: {
            type: String,
            required: true
        }
    }, { timestamp: true });
}

export const blogModel = mongoose.model('blogCollections', blogSchema);

export default blogModel;