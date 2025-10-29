import express from "express";

const blogRoutes = express.Router();

// controllers
import {
    create_Blog,
    get_All_Blogs,
    get_Specific_Blog,
    update_Specific_Blog,
    delete_Specific_Blog,
    delete_all_blogs
} from "../controllers/blog.Controller.js"

blogRoutes
    .get("/blog", get_All_Blogs)
    .get("/blog/:id", get_Specific_Blog)
    .post("/blog", create_Blog)
    .put("/blog/:id", update_Specific_Blog)
    .delete("/blog/:id", delete_Specific_Blog)
    .delete("/blog", delete_all_blogs);

// ENDPOINTS
    
// http://localhost:0000/blog/:id
// http://localhost:0000/blog/:id
// http://localhost:0000/blog/:id
// http://localhost:0000/blog/:id
// http://localhost:0000/blog/:id
// http://localhost:0000/blog/:id

export default blogRoutes;