const {apiError} = require('../util');
const Orders =  require('./model');
const Discount = require('../discount/controller')
const Pizza = require('../pizza/controller')

exports.checkOut  = async (req, res) =>{
    try { 
        let userIngredients = req.order.ingredients
        let errors = await Pizza.validate(userIngredients); 
        if(req.order.cuponCode){
            let isVaidCode = await Discount.validate(req.order.cuponCode,req.order.grossAmount,req.order.netAmount);
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
        if(calculatedAmount !== grossAmount){
            errors.push("Error in calculation");
        }
        if(errors.length){
            apiError(res,err);
            return;
        }
        let order = await Orders.create(req.order);
        res.send({
            data : order,
            message : "Sucess"
        });
    } catch (err) {
        apiError(res,err);
    }
}