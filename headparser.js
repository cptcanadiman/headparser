var express = require('express')
var parser = require('ua-parser-js')
var app = express()


app.get("/",function(req,res){
   var ua = parser(req.headers['user-agent']);
   var header = parser(req.headers)
   var os = ua.os.name + " " + ua.os.version
   var lang = header.ua["accept-language"].split(',')[0]
   var ip = header.ua["x-forwarded-for"]
    res.json({
       'ipaddress':ip,
       'language':lang,
       'os':os
    })
  
})

app.listen(process.env.PORT, function() {
    console.log("Running on Port 8080")
})