// import express from 'express';
// import Post from '../models/Post.js';
// import { generateSlug } from '../../utils/slug.js';

// const router = express.Router();

// // Get all posts
// router.get('/', async (req, res) => {
//   try {
//     const posts = await Post.findAll();
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get post by slug
// router.get('/:slug', async (req, res) => {
//   try {
//     const post = await Post.findOne({ where: { slug: req.params.slug } });
//     if (!post) {
//       return res.status(404).json({ error: 'Post not found' });
//     }
//     res.json(post);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Create new post
// router.post('/', async (req, res) => {
//   try {
//     const { title, excerpt, content, image, category, author } = req.body;
//     const slug = generateSlug(title);
//     const date = new Date().toISOString().split('T')[0];
//     const readTime = `${Math.ceil(content.length / 1000)} min read`;

//     const post = await Post.create({
//       title,
//       slug,
//       excerpt,
//       content,
//       image,
//       category,
//       author,
//       date,
//       readTime
//     });

//     res.status(201).json(post);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update post
// router.put('/:id', async (req, res) => {
//   try {
//     const { title, excerpt, content, image, category, author } = req.body;
//     const post = await Post.findByPk(req.params.id);

//     if (!post) {
//       return res.status(404).json({ error: 'Post not found' });
//     }

//     const slug = generateSlug(title);
//     const readTime = `${Math.ceil(content.length / 1000)} min read`;

//     await post.update({
//       title,
//       slug,
//       excerpt,
//       content,
//       image,
//       category,
//       author,
//       readTime
//     });

//     res.json(post);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Delete post
// router.delete('/:id', async (req, res) => {
//   try {
//     const post = await Post.findByPk(req.params.id);

//     if (!post) {
//       return res.status(404).json({ error: 'Post not found' });
//     }

//     await post.destroy();
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;
