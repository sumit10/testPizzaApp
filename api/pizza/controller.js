const Pizza =  require('./model');
const {apiError} = require('../util');

exports.getData  = async (req, res) =>{
    try { 
        let ingredients = await Pizza.get();
        res.send({
            data : {
                ingredients:ingredients
            },
            message : "Sucess"
        });
    } catch (err) {
        apiError(res,err);
    }
}

exports.validate = async (userIngredients) =>{
    let pizzaIngredients = await Pizza.get();
    let errors = [];
    pizzaIngredients.map((p) => {
        let currentIngredients = userIngredients.find(u => p.name === u.name)
        let max = p.max || p.data.length + 1;
        let min = (p.required)?1:(p.min || 0);
        if(p.required && !currentIngredients){
            errors.push(`${p.name} is required`); 
        }
        if(max < currentIngredients.data.length){
            errors.push(`Cannot add ${p.name} it exide our max limit`); 
        }
        if(min > currentIngredients.data.length){
            errors.push(`Cannot add ${p.name} ingredients are less`); 
        }
    });
    return  errors;   
}