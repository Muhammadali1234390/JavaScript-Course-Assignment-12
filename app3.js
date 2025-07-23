function fizzbuzz(){
var text = ""

for(var i=1; i <= 100; i++){

        if(i % 5 == 0 && i % 3 == 0 ){
        text = "FizzBuzz<br>"
        console.log(text)
    }
        else if(i % 3 == 0){
        text = "Fizz<br>"
        console.log(text)
    }
    else if(i % 5 == 0 && i % 3 !== 0 ){
        text = "Buzz<br>"
        console.log(text)
    }
    else{
        text = "Not Divisible by 3 or 5<br>"
        console.log(text)
    }
}
}
