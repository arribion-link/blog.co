// BLOG DATA
// blog Image
// Title
// overView
// full blog description
// Date
// Views

import blogModel from "../models/blog.Model";


// CREATE A BLOG
export const create_Blog = async (req, res) => {
    const { imgUrl, title, blog_preview, blog_content } = req.body;
    try {
        if (!imgUrl || !title || !blog_preview || !blog_content) {
            return res.status(400).json({
                success: false,
                message: "All fields are required to create a blog"
            })
        }
        const new_blog = {
            imgUrl,
            title,
            blog_preview,
            blog_content
        }
        const newBlog = await blogModel(new_blog);
        await newBlog.save();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error occured while creating a blog post!!"
        })
    }
}

// READ ALL BLOG
export const get_All_Blogs =  (req, res) => {
    try {
        const blogPost = blogModel.find();
        if (!blogPost) {
            return res.status(404).json({
                success: false,
                message: "error fetching data!"
            })
        }

        res.status(200).json({
            success: true,
            blogPost
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong while getting data!!"
        })
    }
}

// GET SPECIFIC BLOG
export const get_Specific_Blog = async (req, res) => {
    const blogID = req.params.blogID;
    try {
        const specific_blog = blogModel.findById(blogID);
        if (!specific_blog) {
            return res.status(404).json({
                success: false,
                message: `Unable to get blog with an ID ${specific_blog}`
            });
        }

        res.status(200).json({
            success: true,
            specific_blog
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting the blog post"
        })
    }
}

// UPDATE BLOG
export const update_Specific_Blog = async (req, res) => {
    const { imgUrl, title, blog_preview, blog_content } = req.body;
    const blog_update_ID = req.params.NEW_BLOG;
    try {
        const new_Blog_Data = {

        }
        const NEW_BLOG = await blogModel.findByIdAndUpdate(new_Blog_Data, new_Blog_Data);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error occured while updating "
        })
    }
}

// DELETE BLOG
export const delete_Specific_Blog = async (req, res) => {
    const delete_ID = req.params.id;
    try {
        const deletedBlog = await blogModel.findByIdAndDelete(delete_ID);
        if (deletedBlog) {
            return res.status(404).json({
                msg: "error deleting the blog"
            });
        }
    } catch (error) {
        return res.status(500).json({
            msg: "erro deleting the blog post"
        });
    }
}

export default {
    create_Blog,
    get_AllB_logs,
    get_Specific_Blog,
    update_Specific_Blog,
    delete_Specific_Blog
}