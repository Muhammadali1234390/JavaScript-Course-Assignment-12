function fizzbuzz(){
let text = ""

for(let i=1; i <= 100; i++){

        if(i % 5 == 0 && i % 3 == 0 ){
        text = "FizzBuzz<br>"
        document.writeln(text)
    }
        else if(i % 3 == 0){
        text = "Fizz<br>"
        document.writeln(text)
    }
    else if(i % 5 == 0 && i % 3 !== 0 ){
        text = "Buzz<br>"
        document.writeln(text)
    }
    else{
        text = "Not Divisible by 3 or 5<br>"
        document.writeln(text)
    }
}
}
fizzbuzz()
