var monthlyCosts = [];
var employees = [];

$(document).ready(function(){
$('#submitButton').on('click', function(){
console.log('in submitButton on click:');

var employee = {
  firstName: $('#firstNameIn').val(),
  lastName: $('#lastNameIn').val(),
  idNumber: $('#idNumberIn').val(),
  jobTitle: $('#jobTitleIn').val(),
  annualSalary: $('#annualSalaryIn').val()
};//end employee object
employees.push(employee);
monthlyCosts.push(employee);
displayEmployees();

//empty inputs
$('#firstNameIn').val( '' );
$('#lastNameIn').val( '' );
$('#idNumberIn').val( '' );
$('#jobTitleIn').val( '' );
$('#annualSalaryIn').val( '' );

});//end submitButton on click
});//end doc ready

function displayEmployees(){
console.log('in displayEmployees:', employees);

var output = $('#employeesOut');
output.empty();

for(var i=0; i<employees.length; i++){

var outputString = '<li>';
outputString += employees[ i ].firstName + ' ';
outputString += employees[ i ].lastName + ":" + ' ';
outputString += employees[ i ].idNumber + ' ';
outputString += employees[ i ].jobTitle + ' ';
outputString += employees[ i ].annualSalary + ' ';
outputString += '</li>';
output.append(outputString);

displayMonthlyCosts();

}//end for loop
}//end displayEmployees

function displayMonthlyCosts(){
console.log('in displayMonthlyCosts:', monthlyCosts);

var outputTwo = $('#monthlyCostsOut');
outputTwo.empty();

for(var i=0; i<monthlyCosts.length; i++){

var outputStringTwo = '<li>';
outputStringTwo += monthlyCosts[ i ].firstName + ":" + ' ';
outputStringTwo += "$" + monthlyCosts[ i ].annualSalary / 12 + ' ' + "monthly";
outputStringTwo += '</li>';
outputTwo.append(outputStringTwo);

}//end for loop

}//end displayMonthlyCosts
