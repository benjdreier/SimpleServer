var express = require("express");
const { createPost, getAllPosts } = require("./posts");
var app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/feed", (req, res, next) => {
  const posts = getAllPosts()
  res.json(posts);
});

app.post('/createPost', (req, res, next) => {
  const { message, username } = req.body
  if(!message || !username) {
    res.status(400).json({ error: 'Missing required field' });
  }

  createPost(message, username)

  res.status(200).send("Done")
})
