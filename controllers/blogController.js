const router = require('express').Router();
const BlogModel = require('../models/blogModel');

router.get('/get-all',async(req,res)=>{
    const data = await BlogModel.findAll();
    res.status(200).json({
        message:'Success',
        data
    })
});

router.post('/blog-new',async(req,res)=>{
    try{
        const {title,description,userId} = req.body;
        const response = await BlogModel.create({title,description,userId});
        return res.status(200).json({response})
    }catch(e){
        console.log('ERROR OCCURED',e);
        return res.status(404).json(e);
    }
});

router.put('/update/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const {title} = req.body;
        await BlogModel.update({title},{where:{id}});//returns 1
        // const data = await BlogModel.findByPk(id)
        const data=  await BlogModel.findOne({where:{id}});
        return res.status(200).json({data});
    }
    catch(error){
        return res.status(404).json({message:'Fuck You'})
    }
});
module.exports = router;

// for delete
// BlogModdel.destroy

