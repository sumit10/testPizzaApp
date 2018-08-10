const data = require('./data'); 

module.exports = {
    get : ()=>{
        return  Promise.resolve(data.data);
    }
}