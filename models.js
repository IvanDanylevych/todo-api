const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
