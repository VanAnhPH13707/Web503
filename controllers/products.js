import Product from "../models/products"
// const products = [
//     {id:1, name:"Product 1"},
//     {id:2, name:"Product 2"},
//     {id:3, name:"Product 3"}

// ]

export const listProduct =async (request, response) =>{
    try{
        const product =await Product.find({}).exec()
        response.json(product)
    }catch(error){
        response.status(400).json({message:"Loi khong the hien thi"})
    }
    // response.json(products)
}
export const listProductDetail =async (request, response) =>{
    // const product = products.find(item => item.id === +request.params.id)
    // response.json(product)
    try{
        const product =await Product.findOne({_id:request.params.id}).exec()
        response.json(product)
    }catch(error){
        response.status(400).json({message:"Loi khong the hien thi"})
    }
}
export const createProduct = async(request, response) =>{
    // products.push(request.body)
    // response.json(products)

    try{
        const product =await Product(request.body).save()
        response.json(product)
    }catch(error){
        response.status(400).json({message:"Khong the them san pham"})
    }
}
export const deleteProduct =async (request, response) =>{
    // const product = products.filter(item => item.id != +request.params.id)
    // response.json(product)
    try{
        const product =await Product.findOneAndDelete({_id:request.params.id}).exec()
        response.json(product)
    }catch(error){
        response.status(400).json({message:"Khong xoa duoc"})
    }
}
export const updateProduct =async (request, response) =>{
    // response.json( products.map(item => item.id === +request.params.id ? request.body : item))
    try{
        const product =await Product.findOneAndUpdate({_id:request.params.id}, request.body,{new:true}).exec()
        response.json(product)
    }catch(error){
        response.status(400).json({message:"Khong cap nhat duoc"})
    }
}
