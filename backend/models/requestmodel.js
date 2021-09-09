const mongoose = require('mongoose');
const Schema = require('mongoose');

const requestSchema = mongoose.Schema({
  reqnum: {
    type: Number,
    required: true,
  },
  datetime:{
    type: Date,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  carrier_name: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
  ati: {
    type: String,
    required: true,
  },
  
},
{
  timestamps: true,
})


const RequestModel = mongoose.model('Requests', requestSchema);
module.exports = RequestModel;


