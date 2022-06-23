//get values from user user
function getValues(){

    let fizzNumber = document.getElementById("fizzValue").value;

    let buzzNumber = document.getElementById("buzzValue").value;
    
    //parse for numbers

    fizzNumber = parseInt(fizzNumber);
    buzzNumber = parseInt(buzzNumber);

    //check that the numbers are integers
    if(Number.isInteger(fizzNumber) && Number.isInteger(buzzNumber)){

        //we call fizzBuzz
        let fbArray = fizzBuzz(fizzNumber, buzzNumber);

        //call displayData and write the values to the screen
        displayData(fbArray);

    }

    else{
        alert("You must enter a integer")
    }

}

//Prints fizz buzz numbers
function fizzBuzz(fizzValue, buzzValue){

    let fizzBuzzArray = [];
    let start = 1;
    let end = 100;

    //loop from 1 to 100
    for (let i = start; i < end; i++) {

        //check to see if numbers is divisible by both 3 & 5
        //check to see if numbers is divisible by fizz value 3
        //check to see if numbers is divisible by buzz value 5

        if (i % fizzValue == 0 && i % buzzValue == 0) {
            fizzBuzzArray.push('FizzBuzz')
        }
        else if(i % fizzValue == 0){
            fizzBuzzArray.push('Fizz');
        }
        else if(i % buzzValue == 0){
            fizzBuzzArray.push('Buzz');
        }
        else{
            fizzBuzzArray.push(i);
        }

    }

    return fizzBuzzArray;

}

//loop over the array and create a table row for each item
function displayData(fbArray){

    //get the table body element fromt the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fizzBuzzTemplate");

    //clear
    tableBody.innerHTML= "";

    for (let i = 0; i < fbArray.length; i += 5) {

        let tableRow = document.importNode(templateRow.content, true);
        
        //used to put into table array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[i])
        rowCols[0].textContent = fbArray[i];

        rowCols[1].classList.add(fbArray[i+1])
        rowCols[1].textContent = fbArray[i+1];

        rowCols[2].classList.add(fbArray[i+2])
        rowCols[2].textContent = fbArray[i+2];

        rowCols[3].classList.add(fbArray[i+3])
        rowCols[3].textContent = fbArray[i+3];

        rowCols[4].classList.add(fbArray[i+4])
        rowCols[4].textContent = fbArray[i+4];

        tableBody.appendChild(tableRow);

    }

    //add all the rows to the table.

}



