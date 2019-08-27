var express=require('express');

var app=express();

// var things=require('./things.js');

// var bodyParser=require('body-parser');
// var cookieParser=require('cookie-parser');

//separate route
// app.use('/things',things);

//To parse URL encoded data
// app.use(bodyParser.urlencoded({extended:false}));
// To parse Json data
// app.use(bodyParser.json());
//cookie parser
// app.use(cookieParser);
//first middleware before response is sent
// app.use(function(req,res,next){
//     console.log("start");
//     next();

// });
//enable template
app.set('view engine', 'pug')
// app.set('views','./views');

app.get('/first_temp', (req, res) => {
    res.render('first_view');
});
app.get('/dynamic', (req, res) => {
     res.render('dynamic',{
        name:"TutorialPoint",
});
//Router Handler
// app.get('/', (req, res,next) => {
//     res.send("Middle");
//     next();
//  });

//  app.use('/',function(req,res){
//      console.log('End');
//  });
// //middle ware functions to request log request protocol
// app.use('/things',function(req,res,next){
//     console.log("A new request recieved at"+Date.now());
//     next();
// });

// app.get('/things', (req, res) => {
//     res.send('things');
// });
// app.get('/:id', (req, res) => {
//     res.send('the id specified by '+req.params.id);
// });

// app.get('/things/:name/:id', (req, res) => {
//     res.send('id:'+req.params.id+'and name:'+req.params.name);
// });

// app.get('/things/:id([0-9]{5})', (req, res) => {
// res.send('id:'+req.params.id);
// });

// app.get('*', (req, res) => {
//     res.send('sory this is invalid URL');
// });


// app.get('/hello', (req, res) => {
//  res.send('Hello Nagendra!');   
// });

// app.post('/hello', (req, res) => {
//     res.send("you just called post method at '/hello'!\n");
// });

// app.all('/test', (req, res, next) => {
//     res.send("http method doesn't have any effect on this route!");
// });

app.listen(3000, () => {
    console.log(`Server started on port`+3000);
});
});
