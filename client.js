$(document).ready(onReady); // on the page loading these functions will run

const employees = [];

function onReady() {
    console.log(" This is going to work!")

    $('#employeeAddSubmit').on('click', employeeAdd); // when clicking submit, i add the employee to the array of employees
     $('table').on('click', '.deleteButton', deleteEmployee);// target the table, on click, target the delete employee button, that uses the function.
}

function deleteEmployee() {
    console.log('clicked delete');
    $(this).closest('tr').remove();
}


function employeeAdd(){
    // this is where the employee is added 
let newEmployee ={
    
         firstName: $('#firstName').val(), /// target and add by id from input field using #id-for location, and .val()-for the value
         lastName: $('#lastName').val(),  
         iD: $('#iD').val(), 
         title: $('#title').val(), 
         salary: Number($('#salary').val()),
        
}
console.log(newEmployee);  




//click listener


employees.push(newEmployee);
   ///sending into employees array
total();

addTable();

$('#firstName').val('');// setting the values of each id back to zero after the 'click' event
$('#lastName').val('');
$('#iD').val('');
$('#title').val('');
$('#salary').val('');

$('#table').val(''); //empty the input values for each field after sending to the table elment

}
// add employee is done
// sending employee from each input to the DOM
function addTable() {

   $('#table').empty(); //emptying the list being sent to the table (without this one i seem to push a second, or third row to the list)?
    for (let employee of employees){
    const row =`
    <tr>
        <td> ${employee.firstName}</td> 
        <td> ${employee.lastName}</td>
        <td> ${employee.iD}</td>
        <td> ${employee.title}</td>
        <td> ${employee.salary}</td>
        <td><button class="deleteButton" id="deleteButton" >DELETE</button></td>
    </tr>
    `;
    // pulling the values from each input field so they can be added to the dom
    $('#table').append(row)
    }
   

}

//time to add the employee cost up
function total() {
    let totalSalary = 0;  // have to add up and divide by 12 months
    for (let i = 0; i < employees.length; i++) {
        const employeeSalary = employees[i]['salary'];
        totalSalary += employeeSalary; 
        // taking index value and totaling salary

    }
    totalSalary = totalSalary / 12; // dividing the total salary by 12 and sending that value to the DOM in the monthly cost location
    $('#monthlyCost').html('Cost Monthly:' + (totalSalary).toLocaleString('en-us', {style:'currency', currency: 'USD',}));
    if(totalSalary>20000) {  // we want the monthly cost value to turn red if the value is over 20K
        console.log('overbudget');
        $('#monthlyCost').addClass('overbudget'); // this is the actual command that connects to the css file pulling the class to change the bg to red

    //     console.log('too much');
    //     $('#monthly').addClass('#overbudget')
    // }
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
}