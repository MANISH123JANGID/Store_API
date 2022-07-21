const products= require('./productData/products.json')
const Products= require('./models/productschema')
const connectdb=require('./db/connectdb')
const populate=async()=>{
    try{
        await connectdb('mongodb+srv://user:987654321@cluster0.qsbdg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        await Products.deleteMany()
        await Products.create(products)
        console.log("success")
       
    }catch(error){
        console.log(error)
    }
}
populate()