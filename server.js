let Express = require('express');
let app = new Express();

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Serve static page
app.use(Express.static('public'))

app.get('/weather',(req,res)=>{
    let weatherArray = ["Cloudy", "Sunny", "Rain", "Showers"];
    let randomNum = getRandom(4);
    res.send(weatherArray[randomNum]);
})

app.get('/test',(req,res)=> {
    console.log('Test Endpoint Hit');
    res.send('Test API Working');
})

app.get('/calc', (req,res)=>{
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1+num2;
    let data = {
        result:sum
    }
    //console.log(sum);
    res.json(sum);
})

app.get('/random',(req,res)=>{
    let randomNumber = getRandom(100);
    res.json(randomNumber);
})

app.listen(3000,()=>{
    console.log('Server started on port 3000')
})