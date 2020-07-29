console.log('ENV LOADED');

$(document).ready(function(){
    setInterval(()=>{
        $.get('/random',(result)=>{
            console.log(result);
            $('#request').html(result);
        })
    },1000)
    $('#btnWeather').click(function(){
        $.get("/weather", function(data) {
            alert('The weather is ' +data);
            //$(".result").html(data);
            //alert("Load was performed.");
        })
    })
    $('btnSum').click(function(){
        let num1 = $('num1').val();
        let num2 = $('num2').val();
        console.log(num1);
        console.log(num2);
        let data = {
            num1,num2
        }
        $.get('/calc', data, function(result){
            console.log(result);
            $('#result').val(result.result);
        })

    })
})

