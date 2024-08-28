import { Profile } from "../models/profile.js"
import { Blog } from "../models/blog.js"

async function create(req, res) {
  try {
    req.body.author = req.user.profile
    const blog = await Blog.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { blogs: blog }},
      { new: true }
    )
    blog.author = profile
    res.json(blog)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function index(req, res) {

}

export { 
  create, 
  index 
}