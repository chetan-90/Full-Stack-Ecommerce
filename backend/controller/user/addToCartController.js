const addToCartModel = require("../../models/cartProduct")

const addToCartController = async(req,res) =>{
    try{
        const { productId } = req?.body
        const currentUser = req.userId

        const isProductAvailable = await  addToCartModel.findOne({productId, userId : currentUser})

        if(isProductAvailable){
            return res.json({
                message : "Already exits in the cart",
                success : false,
                error : true
            })
        }

        const payload ={
            productId : productId,
            quantity : 1,
            userId : currentUser
        }

        const newAddToCart = new addToCartModel(payload)
        const saveProduct = await newAddToCart.save()

        res.json({
            data : saveProduct,
            message : "product Added in cart",
            success : true,
            error : false
        })

    }catch (err) {
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = addToCartController