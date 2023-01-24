

//Get the values from the Page
function getValues(){
    //Get values from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //Parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
        //Call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
    }else{
        alert("You must enter integers");
    }

    //Call displayNumbers
}

//Generate numbers from the startValue to the endValue
function generateNumbers(sValue, eValue){
    let numbers= [];

    //Get all numbers from start to end
    for (let i=sValue; i < eValue; i++) {
       numbers.push(i) 
    }
    return numbers;
}

//Display the numbers and mark the even numbers bold
function displayNumbers(){

}