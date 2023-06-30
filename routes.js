const express = require("express");
const postModel = require("./models");
const app = express();

app.post("/new_post", async (request, response) => {
  const post = new postModel(request.body);
  console.log("123");
  try {
    await post.save();
    response.status(200).send({ message: "Ok", result: post });
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/posts", async (request, response) => {
  const posts = await postModel.find({});

  try {
    response.send({ message: "OK", result: posts });
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
