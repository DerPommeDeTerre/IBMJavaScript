const employees = [
    {id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000, specialization: "JavaScript"},
    {id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 450000, specialization: "Python"},
    {id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000, specialization: "Java"}
];

function displayEmployees(){
const totalEmployees = employees.map((employee,index) => `<p> ID: ${employee.id} - Name: ${employee.name} - Age: ${employee.age} - Department: ${employee.department} - Salary: $${employee.salary} </p>`).join('');
document.getElementById("employeesDetails").innerHTML = totalEmployees;
}

// function displayEmployees() {
//     const totalEmployees = employees.map(function(employee, index) {
//       return `<p>${employee.id}: ${employee.name}: ${employee.age}: ${employee.department}: ${employee.salary}</p>`;
//     }).join('');
    
//     document.getElementById("employeesDetails").innerHTML = totalEmployees;
// }


function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((accumulator,employee) => accumulator + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// function calculateTotalSalaries() {
//     const totalSalaries = employees.reduce(function(accumulator, employee) {
//         return accumulator + employee.salary;
//     }, 0);
//     alert('Total Salaries: $' + totalSalaries);
// }

function displayHREmployees(){
    const HREmployees = employees.filter(employee => employee.department === "HR");
    const HREmployeesDisplay = HREmployees.map((employee,index) => `<p>ID: ${employee.id} - Name: ${employee.name} - Age: ${employee.age} - Department: ${employee.department} - Salary: $${employee.salary}</p>`).join('');
    document.getElementById("employeesDetails").innerHTML = HREmployeesDisplay;
}

// function displayHREmployees() {
//     const HREmployees = employees.filter(function(employee) {
//         return employee.department === "HR";
//     });

//     const HREmployeesDisplay = HREmployees.map(function(employee, index) {
//         return '<p>' + employee.id + ': ' + employee.name + ' ' + employee.age + ' ' + employee.department + ' ' + employee.salary + '</p>';
//     }).join('');

//     document.getElementById("employeesDetails").innerHTML = HREmployeesDisplay;
// }

function findEmployeeByID(employeeID){
    const foundEmployee = employees.find(employee => employee.id === employeeID);
    if(foundEmployee){
        document.getElementById("employeesDetails").innerHTML = `<p>ID: ${foundEmployee.id} - Name: ${foundEmployee.name} - Age: ${foundEmployee.age} - Department: ${foundEmployee.department} - Salary: $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

// function findEmployeeByID(employeeID) {
//     const foundEmployee = employees.find(function(employee) {
//         return employee.id === employeeID;
//     });

//     if (foundEmployee) {
//         document.getElementById("employeesDetails").innerHTML = 
//             '<p>' + foundEmployee.id + ': ' + foundEmployee.name + ' ' + 
//             foundEmployee.age + ' ' + foundEmployee.department + ' ' + 
//             foundEmployee.salary + '</p>';
//     } else {
//         document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
//     }
// }

function findEmployeeBySpecialization(employeeSpecialization){
const foundEmployee = employees.find(employee => employee.specialization === employeeSpecialization);
if(employeeSpecialization){
document.getElementById("employeesDetails").innerHTML = `<p>ID: ${foundEmployee.id} - Name: ${foundEmployee.name} - Age: ${foundEmployee.age} - Department: ${foundEmployee.department} - Salary: $${foundEmployee.salary} - Specialization: ${foundEmployee.specialization}<p>`;
} else {
    document.getElementById("employeesDetails").innerHTML = `<p>There is no match for the specialization.</p>`;
}
}
