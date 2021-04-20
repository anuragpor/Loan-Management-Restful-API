const express = require('express');
const Loan = require('./../models/loanModel');


exports.getAllLoans = async (req, res) => {
  try {
    let query = Loan.find();
    const queryObj = { ...req.query };
    
    //Implementing Status
    if (req.query.status) {
      let str = req.query.status.split(',');
      console.log(str);
      while (str.length < 4)
        str.push('new');
      query = query.find({ $or: [{ status: str[0] }, { status: str[1] }, {status: str[2]}, {status: str[3]} ] });  // or query
    }
    
    //Implementing LoanAmountGreater
    if (req.query.loanAmountGreater) {
      let amt = req.query.loanAmountGreater * 1;
      console.log(amt);
      query = query.find({ loanAmount: { $gt: amt}});
    }
    
    //Implementing Pagination 
    if (req.query.page) {
      const page = req.query.page;
      const limit = 5;  //limiting 5 document per page
      const skip = (page - 1) * limit;
  
      query.skip(skip).limit(limit);
  
      const totalCnt = await Loan.countDocuments();
      console.log(page, totalCnt);
      if (skip >= totalCnt) {
        throw new Error('This page does not exits')
      }
    }
    const output = await query;
    console.log("result", output);
    res.status(200).json({
      status: 'success',
      results: output.length,
      data: {
        output
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
}
  exports.createLoan = async (req, res) => {
    try {
      const newLoan = await Loan.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          Loan: newLoan,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'failed',
        message: err
      });
    }
  };

  // Find loan by ID
  exports.getLoan = async (req, res) => {
    try {
      const loan = await Loan.findById(req.params.id);
      res.status(200).json({
        status: 'success',
        data: {
          loan
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
}
  
//Update or Patch request
exports.updateLoan = async (req, res) => {
  console.log(req.params.id, req.body);
  try {
    updatedLoan = await Loan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,  // because we want updated document to be retured thats why new property should be true
      runvalidators: true // it will check the body to be updated wheter it matches with the schema like datatype 
    });
      res.status(200).json({
        status: 'success',
        data: {
          updatedLoan 
        },
      });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      msg: err
    })
  }
}

//delete or cancellation of loan
exports.deleteLoan = async (req, res) => {
  try {
    let doc = await Loan.findById(req.params.id);
    doc.status = 'cancelled';
    const newDoc = {
      customerName: doc.customerName,
      phoneNumber: doc.phoneNo,
      Email: doc.Email,
      loanAmount: doc.loanAmount,
      status: doc.status,
      creditScore: doc.creditScore
    };
    await Loan.findByIdAndDelete(req.params.id);
    const newLoan = await Loan.create(newDoc); 
      res.status(201).json({
        status: 'success',
        data: {
          Loan: newLoan,
        },
      });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      msg: err
    });
  }
}
