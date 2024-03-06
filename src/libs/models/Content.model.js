import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  category: String,
  title: String,
  description: String,
  muddat: String,
  location: String,
  soha: {
    type: [String],
    require: true,
  },
  levels: {
    type: [String],
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  mukofot: String,
  featuredImageLink: String,
  richtext: String,
});

const Contents =
  mongoose.models.Contents || mongoose.model("Contents", contentSchema);

export default Contents;
