const {apiError} = require('../util');
const Orders =  require('./model');
const Discount = require('../discount/controller')
const Pizza = require('../pizza/controller')

exports.checkOut  = async (req, res) =>{
    try { 
        let order = req.body.order;
        let userIngredients = order.ingredients
        let errors = await Pizza.validate(userIngredients); 
        if(order.cuponCode){
            let isVaidCode = await Discount.validate(order.cuponCode,order.grossAmount,order.netAmount);
            if(!isVaidCode){
                errors.push("Not valid discount code");
            }
        }
        let calculatedAmount = 0;
        userIngredients.map(u => {
           u.data.map(d => {
            calculatedAmount += d.price;
           }) 
        });
        if(calculatedAmount !== order.grossAmount){
            errors.push("Error in calculation");
        }
        if(errors.length){
            apiError(res,err);
            return;
        }
        let orderData = await Orders.create(order);
        res.send({
            data : orderData,
            message : "Sucess"
        });
    } catch (err) {
        apiError(res,err);
    }
}