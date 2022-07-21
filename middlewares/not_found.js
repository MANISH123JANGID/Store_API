const CustomAPIerror= require('../errors/error')
const notfound= (req,res) => {
    res.status(404).json({message:"The Desired Resource is not Found!!"});
}
module.exports= notfound;