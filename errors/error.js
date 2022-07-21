class CustomAPIerror extends Error {
    constructor(statusCode,message){
        statusCode= this.statusCode,
        super(message)
    }
}

const createCustomError=(statusCode,message) => {
    return new CustomAPIerror(statusCode,message)
}

module.exports={CustomAPIerror, createCustomError}