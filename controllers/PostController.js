const { Post } = require('../models')

const GetPosts = async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetPostById = async (req, res) => {
  try {
    const posts = await Post.findByPk(req.params.post_Id)
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    const posts = await Post.create({ ...req.body })
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    const posts = await Post.update(
      { ...req.body },
      { where: { id: req.params.post_Id }, returning: true }
    )
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_Id)
    await Post.destroy({ where: { id: postId } })
    res.send({
      msg: `Post ${postId} Deleted`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPosts,
  GetPostById,
  CreatePost,
  UpdatePost,
  DeletePost
}
