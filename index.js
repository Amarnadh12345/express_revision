var express = require('express');

// importing the express js module into our application
var app = express();

// we are initialising the application using express
app.get('/',(req,res)=>{
    res.send("hello world");
})

// using the app we are configuring the route of "GET" and path is "/"



app.listen(4000);



// postman is used for testing api's