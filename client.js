$(document).ready(onReady);

function onReady() {
    console.log(" This is going to work!")

    $('#employeeAddSubmit').on('click', employeeAdd);
}

const employees = [];

function employeeAdd(){
    // this is where the employee is added 
let newEmployee ={
    
         firstName: $('#firstName').val(), /// target and add by id from input field using #id-for location, and .val()-for the value
         lastName: $('#lastName').val(),  
         iD: $('#iD').val(), 
         title: $('#title').val(), 
         annualSalary: Number( $('#salary').val()),
          
}

employees.push(newEmployee);   ///sending into employees array
total();


$('#firstName').val('');// setting the values of each id back to zero after the 'click' event
$('#lastName').val('');
$('#iD').val('');
$('#title').val('');
$('#salary').val('');

}    

//time to add the employee cost up
function total() {
    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        totalSalary += Number(employees[i].salary);
    }
    console.log(totalSalary);
    $( '#totalSalaryText' ).text(totalSalary);
}


// function to delete employees

/// I could not make this work. 
// Add content
// function employeeAdding() {
//     $('#employeeAddSubmit').on('click'); // We remove the input-active class from the input
//     let employeeInfo = $('#firstInput', '#secondInput', '#thirdInput', '#fourthInput','#fifthInput').val(); // we get the value of the input
    
//     if(employeeInfo === '') { // if the value is empty, we add an error message and stop work;
//       return $('#nope').append('<p>Please enter a value.</p>');
//     }
//     employeeInfo.push(employees);
//     $('#employeeList').append(`<li>${employeeInfo}</li>`); // We add the user's input to the output displayed in the DOM
//     $('#firstInput', '#secondInput', '#thirdInput', '#fourthInput','#fifthInput').val(''); // we reset the user input
//     $('#nope').empty(); // we clear any error messages from the DOM
//     return employeeList;
//   }

console.log(employees);