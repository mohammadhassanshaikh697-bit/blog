require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Blog = require("../models/Blog");

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Read the Blog.json file
    const blogData = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, "../../client/public/Blog.json"),
        "utf-8"
      )
    );

    // Clean existing data
    await Blog.deleteMany({});
    console.log("Cleaned existing blog data");

    // Transform data to match our schema
    const transformedData = blogData.map((blog) => ({
      title: blog.title,
      description: blog.description,
      content: blog.content,
      author: blog.author,
      imageUrl: blog.imageUrl,
      tag: blog.tag || [],
      createdAt: new Date(blog.Date),
      comments: [],
    }));

    // Insert the data
    await Blog.insertMany(transformedData);
    console.log(`Successfully seeded ${transformedData.length} blog posts`);

    mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
