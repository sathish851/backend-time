const { request, response } = require("express")

const getDifferenceBtwTime = (request,response) =>{
    const {timeOne,timeTwo} = request.body
    let date1 = new Date(timeOne)
    let date2 = new Date(timeTwo)
    let result = Math.abs(date1-date2)/1000
    response.send(String(result))
}

module.exports = {
    getDifferenceBtwTime,
}