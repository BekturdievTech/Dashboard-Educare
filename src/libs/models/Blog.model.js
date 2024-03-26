import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  featuredImageLink: String,
  richtext: String,
});

const Blogs =
  mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);

export default Blogs;
