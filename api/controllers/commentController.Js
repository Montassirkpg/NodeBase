const Comment = require('../models/commentModel');

exports.listAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({ post_id: req.params.post_id });
        res.status(200);
        res.json(comments);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'erreur server' });
    }
}
exports.createAComment = async (req, res) => {
    const newComment = new Comment({
        ...req.body,
        post_id: req.params.post_id,
    });

    try {
        const comment = await newComment.save();
        res.status(201);
        res.json(comment);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'erreur server' });
    }
}
exports.getAComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.comment_id);
        if (!comment) {
            res.status(404);
            return res.json({ message: 'Comment not found' });
        }
        res.status(200);
        res.json(comment);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'erreur server' });
    }
}
exports.updateAComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.comment_id, req.body, { new: true, runValidators: true });
        if (!comment) {
            res.status(404);
            return res.json({ message: 'Comment not found' });
        }
        res.status(200);
        res.json(comment);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'erreur server' });
    }
}
exports.deleteAComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.comment_id);
        if (!comment) {
            res.status(404);
            return res.json({ message: 'Comment not found' });
        }
        res.status(200);
        res.json({ message: 'Comment successfully deleted' });
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'erreur server' });
    }
}
