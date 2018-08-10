const Discount =  require('./model');
const {apiError} = require('../util');

exports.check  = async (req, res) =>{
    try { 
        let data = await Discount.get();
        let userCode = req.body.code;
        let cuponCode = data.find(d => d.name === userCode);
        if(!cuponCode){
            apiError(res,"Code Not found",404);
            return;
        }
        res.send({
            data : cuponCode,
            message : "Sucess"
        });
    } catch (err) {
        apiError(res,err);
    }
}

exports.validate = async (userCode,grossAmount,netAmount) =>{
    let data = await Discount.get();
    let cuponCode = data.find(d => d.name === userCode);
    if(!cuponCode){
        return false;
    }
    let calculatedAmount = grossAmount - ((grossAmount/100) * cuponCode.discountPercentage);
    if(calculatedAmount === netAmount){
        return true;
    }else{
        return false;
    }
}