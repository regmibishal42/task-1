const router = require('express').Router();
const {getComment,getComments,postNewComment,updateCommentDetails,deleteCommentById} = require('../services/comment-service');

router.get('/get-all',getComments);
router.get('/:id',getComment);
router.post('/new',postNewComment);
router.put('/:id',updateCommentDetails);
router.delete('/:id',deleteCommentById);

module.exports = router;


// const CommentModel = require('../models/commentModel');
// // get all comments
// router.get('/get-all',async(req,res)=>{
//     const comments = await CommentModel.findAll();
//     if(comments) return res.status(200).json({comments});
//     return res.status(404).json({message:'Comments Not Found'});
// })

// // get comments by id
// router.get('/:id',async(req,res)=>{
//     const {id} = req.params;
//     const comment = await CommentModel.findByPk(id);
//     if(comment) return res.status(200).json(comment);
//     return res.status(404).json({message:`Comment with id ${id} doesnot exist`});
// });

// // create new Comment
// router.post('/new',async(req,res)=>{
//     try{
//         const {message,blogId,userId} = req.body;
//         const newComment = await CommentModel.create({message,blogTableId:blogId,userId});
//         if(newComment) return res.status(200).json({newComment});
//         return res.status(400).json({message:'Sorry Commment Cannot be created'});
//     }catch(e){
//         return res.status(400).json({e});
//     }
// });

// router.put('/:id',async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const {message} = req.body;
//         const doesExist = await CommentModel.update({message},{where:{id}});
//         if(doesExist){
//             const data = await CommentModel.findOne({where:{id}});
//             return res.status(200).json({doesExist,data});
//         }
//         return res.status(400).json({message:`Comment with id ${id} doesnot exist`});
//     }
//     catch(e){
//         return res.status(400).json({message:'Cannot Upadte The Comment',error:e});
//     }
// });

// router.delete('/:id',async(req,res)=>{
//     try{
//         const {id} = req.params;
//         await CommentModel.destroy(id);
//         return res.status(200).json({message:`Comment Deleated`});
//     }
//     catch(e){
//         return res.status(400).json({
//             message:`Comment Delete Failed`,
//             error:e
//         });
//     }
// });

// module.exports = router;