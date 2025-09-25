const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const multer = require("multer");
const { uploadImage } = require("../utils/cloudinary");
const { firebaseAuth } = require("../middleware/authFirebase");

const upload = multer({ dest: "/tmp/uploads" });

// GET /api/blogs - list
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// GET /api/blogs/:id
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).lean();
    if (!blog) return res.status(404).json({ error: "Not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
});

// POST /api/blogs - create (requires auth)
router.post("/", firebaseAuth, upload.single("image"), async (req, res) => {
  try {
    // optional image upload
    let imageUrl = req.body.imageUrl;
    if (req.file) {
      const uploadResult = await uploadImage(req.file.path, {
        folder: "blogs",
      });
      imageUrl = uploadResult.secure_url;
    }

    const blog = new Blog({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      author: req.user ? req.user.name || req.user.email : req.body.author,
      Date: req.body.Date,
      imageUrl,
      tag: req.body.tag || [],
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create blog" });
  }
});

// PUT /api/blogs/:id - update blog (requires auth)
router.put("/:id", firebaseAuth, upload.single("image"), async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    // Check if user is the author
    if (req.user.email !== blog.author) {
      return res
        .status(403)
        .json({ error: "Not authorized to update this blog" });
    }

    let imageUrl = req.body.imageUrl;
    if (req.file) {
      const uploadResult = await uploadImage(req.file.path, {
        folder: "blogs",
      });
      imageUrl = uploadResult.secure_url;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        imageUrl: imageUrl || blog.imageUrl,
        tag: req.body.tag || blog.tag,
      },
      { new: true }
    );

    res.json(updatedBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update blog" });
  }
});

// DELETE /api/blogs/:id - delete blog (requires auth)
router.delete("/:id", firebaseAuth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    // Check if user is the author
    if (req.user.email !== blog.author) {
      return res
        .status(403)
        .json({ error: "Not authorized to delete this blog" });
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

module.exports = router;
