const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Item = mongoose.model('Item',{ //give model name in singular so that it chnages to plural
    iname:{type: String},
    idesc:{type: String},
    iprice:{type: Number},
    ipic:{type: String},
    //category_id:{type: Schema.Types.ObjectId}
    category_id:{type:String}
}); 
module.exports={Item};