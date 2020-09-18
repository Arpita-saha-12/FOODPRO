const mongoose = require('mongoose');
var Event = mongoose.model('Event',{ //give model name in sigular so that it chnages to plural
    eventname:{type: String},
    bdesc:{type: String},
    bpic:{type: String},
}); 
module.exports={Event};