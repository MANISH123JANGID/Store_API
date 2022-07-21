const CustomAPIerror=require('../errors/error')
const errorhandler = (err,req,res,next) => {
    if(err.message==='ACESSS DENIED')
     res.status(500).json({message: err.message});
}
module.exports= errorhandler;