

//Get the values from the Page
function getValues(){
    //Get values from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    //Call generateNumbers
    let numbers = generateNumbers(startValue, endValue);

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