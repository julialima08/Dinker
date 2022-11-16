const { User, Post, User_match } = require('../models')

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

const CreateMatch = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_Id)
    const matcher = await User.findByPk(userId)
    await matcher.addUser([req.body.matchId])
    await matcher.save()
    res.send(matcher)
  } catch (error) {
    throw error
  }
}

const GetUserMatches = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_Id)
    const userMatch = await User_match.findByPk(userId)
    res.send(userMatch)
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
  DeleteUser,
  GetUserMatches,
  CreateMatch
  // GetUserPosts
}
