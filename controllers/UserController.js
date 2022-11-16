const { User, Post } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_Id)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    const user = await User.update(
      { ...req.body },
      { where: { id: req.params.user_Id }, returning: true }
    )
    res.send(user)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_Id)
    await User.destroy({ where: { id: userId } })
    res.send({
      msg: `User ${userId} Deleted`
    })
  } catch (error) {
    throw error
  }
}

// const GetUserPosts = async (req, res) => {
//   try {
//     const posts = await User.findByPk(req.params.user_Id, {
//       include: [{ model: Post, as: 'posts' }]
//     })
//     res.send(posts)
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  GetUsers,
  GetUserById,
  CreateUser,
  UpdateUser,
  DeleteUser
  // GetUserPosts
}
