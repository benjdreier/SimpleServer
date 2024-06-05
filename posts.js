// oh god
const posts = []

const createPost = (message, username) => {
  console.log("creating post...")
  posts.push({
    message,
    username,
    timestamp: Date.now()
  })
  console.log("created.")
}

const getAllPosts = () => {
  return posts
}

module.exports = {
  createPost,
  getAllPosts
}
