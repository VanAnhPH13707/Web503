import Category from "../models/category";
import Product from "../models/products";
export const listCategory =async (request, response) =>{
    try{
        const category =await Category.find({}).exec()
        response.json(category)
    }catch(error){
        response.status(400).json({message:"Loi khong the hien thi"})
    }
    // response.json(products)
}
export const listCategoryDetail =async (request, response) =>{
    // const product = products.find(item => item.id === +request.params.id)
    // response.json(product)
    try{
        const category =await Category.findOne({_id:request.params.id}).exec()
        const product = await Product.find({category}).exec()
        // const product = await Product.find({category}).populate("category").exec()
        // const product = await Product.find({category}).select("-category").exec()
        response.json({category, product})
    }catch(error){
        response.status(400).json({message:"Loi khong the hien thi"})
    }
    
}
export const createCategory = async(request, response) =>{
    // products.push(request.body)
    // response.json(products)

    try{
        const category =await Category(request.body).save()
        response.json(category)
    }catch(error){
        response.status(400).json({message:"Khong the tao moi"})
    }
}
export const deleteCategory =async (request, response) =>{
    // const product = products.filter(item => item.id != +request.params.id)
    // response.json(product)
    try{
        const category =await Category.findOneAndDelete({_id:request.params.id}).exec()
        response.json(category)
    }catch(error){
        response.status(400).json({message:"Khong xoa duoc"})
    }
}
export const updateCategory =async (request, response) =>{
    // response.json( products.map(item => item.id === +request.params.id ? request.body : item))
    try{
        const category =await Category.findOneAndUpdate({_id:request.params.id}, request.body,{new:true}).exec()
        response.json(category)
    }catch(error){
        response.status(400).json({message:"Khong cap nhat duoc"})
    }
}