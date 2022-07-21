const Products= require('../models/productschema')
const getAllProducts= async(req,res)=>{
   // query will come from the search or other according to which filtering will be done!
   // we destructured the variables from the req.query and then crested an object with these to pass inside the find()
   const {featured, company,name, sort, field, numericFilters} = req.query
   queryObject={}
   if(featured){
      queryObject.featured= featured==='true'?true:false
   }
   if(company){
      queryObject.company= company
   }
   if(name){
      // to make the search more flexible we use the regex with options i 
      queryObject.name= {$regex:name,$options:'i'}
   }
   if(numericFilters)
   // if we want to sort the data then we have to use the .sort method with the name of the sorting variabkle coming from the queries 
   // in that case we have to use the await in front of result variable
   allProducts= Products.find(queryObject)
   if(sort){
      const sortlist= sort.split(',').join(' ');
      allProducts= allProducts.sort(sortlist)
   }
   // for selecting specific fields to send the data we can use the select method which selects the specified 
   // fields only using the data from the fields 
   if(field){
      const fieldlist=field.split(',').join(' ');
      console.log(fieldlist)
      allProducts=allProducts.select(fieldlist)
   }
 // this is used for pagination purpose 
   const limit= Number(req.query.limit) || 10;
   const page=Number(req.query.page) || 1 ;
   const skip= (page-1)*limit
   allProducts.skip(skip).limit(limit)
   const result= await allProducts
   res.status(200).json({result, nbHits:result.length})
}

module.exports=getAllProducts;