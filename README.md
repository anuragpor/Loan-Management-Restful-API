# Loan-Management-Restful-API

# Example Schema
 
This schema is awesome.
 
The schema defines the following properties:
 
## `price` (number)
 
Cost of the product.
A model LoanRequest which consists of following attributes/ Schemea.

{
  `customerName: String,`
  `phoneNo: String,`
  `Email: String,`
  `loanAmount: Number,`
  `status: String`  // one of these fields {New, Approved, Rejected,Cancelled}
  `creditScore: Number` 
}

**This is a basic loan-management system API developed using Nodejs and MongoDB using rest architecture and MVC design pattern. API can handle get, post, patch, delete. Also, features like pagination(limiting five documents per page) and filtering data like getting loan amounts greater than 8000 rupees. Filteing based on status of loan
The starting point is server.js. Database Schema for the loan is in Models: models/loanModel.js. All the features of API are implemented in controllers/loanController.js. API testing was done using POSTMAN APP.**

How to use? <br>
* 1- Download the code.
* 2- Run "npm install" to download all dependencies/
* 3- Run "node server.js" command from the project directory in the terminal.
* 4- Now API is ready to use.
--------------------------------------------------------------------------------------------------------------------------------------------
Some example queries-

Get all loans(with feature of pagination and selecting loan whose amount greater than 8000)
127.0.0.1:3000/loan/?page=1&loanAmountGreater=8000

Output:
```json
{
    "status": "success",
    "results": 5,
    "data": {
        "output": [
            {
                "_id": "607e7737992e148f10c82067",
                "customerName": "Raginidsad Porwalfasf",
                "phoneNo": "9461495978",
                "Email": "anurag_p@ma.iitr.ac.in",
                "loanAmount": 70000,
                "status": "approved",
                "creditScore": 20,
                "__v": 0
            },
            {
                "_id": "607e77692d58b6658c6f6466",
                "customerName": "Tejas",
                "phoneNo": "9461495978",
                "Email": "anurag_p@ma.iitr.ac.in",
                "loanAmount": 70000,
                "status": "new",
                "creditScore": 20,
                "__v": 0
            },
            {
                "_id": "607e77752d58b6658c6f6467",
                "customerName": "Tejas Anurag",
                "phoneNo": "9461495978",
                "Email": "anurag_p@ma.iitr.ac.in",
                "loanAmount": 70000,
                "status": "cancelled",
                "creditScore": 20,
                "__v": 0
            },
            {
                "_id": "607e77852d58b6658c6f6469",
                "customerName": "Tejas Anuradag",
                "phoneNo": "9461495978",
                "Email": "anurag_p@ma.iitr.ac.in",
                "loanAmount": 70000,
                "status": "approved",
                "creditScore": 20,
                "__v": 0
            },
            {
                "_id": "607e837b52ca261854182e8d",
                "customerName": "Tejas Anurdsdadag",
                "loanAmount": 70000,
                "status": "cancelled",
                "creditScore": 20,
                "__v": 0
            }
        ]
    }
}
```
----------------------------------------------------------------------------------------------------------------------------------------------
Get all loan(page no = 1, status: new or cancelled loans, loanAmountGreater than 8000 rupees)
Query - 127.0.0.1:3000/loan/?page=1&loanAmountGreater=8000&status=new,cancelled

Output:
```json
{
    "status": "success",
    "results": 5,
    "data": {
        "output": [
            {
                "_id": "607e77692d58b6658c6f6466",
                "customerName": "Tejas",
                "phoneNo": "9461495978",
                "Email": "anurag_p@ma.iitr.ac.in",
                "loanAmount": 70000,
                "status": "new",
                "creditScore": 20,
                "__v": 0
            },
            {
                "_id": "607e77752d58b6658c6f6467",
                "customerName": "Tejas Anurag",
                "phoneNo": "9461495978",
                "Email": "anurag_p@ma.iitr.ac.in",
                "loanAmount": 70000,
                "status": "cancelled",
                "creditScore": 20,
                "__v": 0
            },
            {
                "_id": "607e837b52ca261854182e8d",
                "customerName": "Tejas Anurdsdadag",
                "loanAmount": 70000,
                "status": "cancelled",
                "creditScore": 20,
                "__v": 0
            },
            {
                "_id": "607e84f748b0319788e5970e",
                "customerName": "Tejas Anurdsddsdadag",
                "loanAmount": 70000,
                "status": "cancelled",
                "creditScore": 20,
                "__v": 0
            },
            {
                "_id": "607e858bcf62514a5c446309",
                "customerName": "Tejas Anurdsdsdddsddsdadag",
                "Email": "anurag_p@ma.iitr.ac.in",
                "loanAmount": 70000,
                "status": "cancelled",
                "creditScore": 20,
                "__v": 0
            }
        ]
    }
}
```
----------------------------------------------------------------------------------------------------------------------------
Delete Request or cancellation of Loan- 127.0.0.1:3000/loan/607e77852d58b6658c6f6469

Output:
```json
{
    "status": "success",
    "data": {
        "Loan": {
            "_id": "607e96d1c2ad9b1a741e7e88",
            "customerName": "Tejas Anuradag",
            "Email": "anurag_p@ma.iitr.ac.in",
            "loanAmount": 70000,
            "status": "cancelled",
            "creditScore": 20,
            "__v": 0
        }
    }
}
```
Update or Patch Request: 127.0.0.1:3000/loan/607e77852d58b6658c6f6469
body - 
```json
{
    "status": "approved"
}
```
Output:
```json
{
    "status": "success",
    "data": {
        "updatedLoan": {
            "_id": "607e77852d58b6658c6f6469",
            "customerName": "Tejas Anuradag",
            "phoneNo": "9461495978",
            "Email": "anurag_p@ma.iitr.ac.in",
            "loanAmount": 70000,
            "status": "approved",
            "creditScore": 20,
            "__v": 0
        }
    }
}
```
Get Loan by ID - 127.0.0.1:3000/loan/607e77852d58b6658c6f6469
Output:
```json
{
    "status": "success",
    "data": {
        "loan": {
            "_id": "607e77852d58b6658c6f6469",
            "customerName": "Tejas Anuradag",
            "phoneNo": "9461495978",
            "Email": "anurag_p@ma.iitr.ac.in",
            "loanAmount": 70000,
            "status": "approved",
            "creditScore": 20,
            "__v": 0
        }
    }
}
```



