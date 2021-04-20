const mongoose = require('mongoose');

const loanRequestSchema = new mongoose.Schema({
 customerName: {
    type: String,
    // required: [true, 'Loan request must have a name'], //also called as validator, required property with error is not present in
    // // unique: true,
    // trim: true, //removes unnecessary white spaces
  },
  phoneNo: {
    type: String,
    // required: [true, 'A tour must have a duration'],
  },
  Email: {
    type: String,
    // required: [true, 'A tour must have a maxGroupSize'],
   },
   loanAmount: Number,
   status: String,
   creditScore: Number
});
const Loan = mongoose.model('Loan', loanRequestSchema);

module.exports = Loan;


// {
//     customerName: String,
//     phoneNo: String,
//     Email: String,
//     loanAmount: Number,
//     status: Enum {New, Approved, Rejected,Cancelled}
//     creditScore: Number
//     }
    