var express = require("express");
const { createPost, getAllPosts } = require("./posts");
var app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Example router
const router = express.Router();

app.use('/', router);

const port = process.env.PORT || 3000
app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

router.get("/feed", (req, res, next) => {
  const posts = getAllPosts()
  res.json(posts);
});

router.post('/createPost', (req, res, next) => {
  const { message, username } = req.body
  if(!message || !username) {
    res.status(400).json({ error: 'Missing required field' });
  }

  createPost(message, username)

  res.status(200).send("Done")
})
