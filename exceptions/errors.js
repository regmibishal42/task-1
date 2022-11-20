const notFound = (req,res,next) =>{
    const error = `Not Found ${req.originalUrl}`;
    return res.status(404).json({error});
}

module.exports = notFound;