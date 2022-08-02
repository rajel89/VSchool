// You are to create a collection of employee's information for your company. Each employee has the following attributes:

// 1. Name
// 2. Job title
// 3. Salary
// 4. Status

// First, you will create an empty array named `employees`

// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.

// This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

// function Employees(name, jobTitle, salary, status){
//   var employee = [
//   this.name = name,
//   this.jobTitle = jobTitle,
//   this.salary = salary,
//   this.status = status]
// }

// var bob = ("Bob", "V School Instructor", "$3000/hour", "Full Time")

// const employees = [];
// function Employee(name, title, salary, status = "full time") {
//   this.name = name;
//   this.title = title;
//   this.salary = salary;
//   this.status = status;
//   this.printEmployeeForm = function () {
//     console.log(
//       name + " is an employee at " + title + " earning " + salary + "."
//     );
//   };
// }


// const employee1 = new Employee("Kayla", "Manager", "$25/hr", "full-time");
// console.log(employee1);

// const employee2 = new Employee("Josh", "Barber", "$15/hr", "full-time");
// console.log(employee2);

// const employee3 = new Employee("Nick", "Receptionist", "$12/hr", "part-time");
// employee3.status = "part-time";
// console.log(employee3);

//<---------------------------->

const employees = []; //<-- this line is not being used. note able to pass on the objects into an array
function Employee(eName, title, salary, status = "full time") {
  this.name = eName;
  this.title = title;
  this.salary = salary;
  this.status = status;


}

Employee.prototype.printEmployeeForm = function() {
  console.log(this.name + " is an employee at " + this.title + " earning " + this.salary +" "+ this.status + ".\n" );

}

const employee1 = new Employee("Kayla", "Manager", "$25/hr","part-time");
employee1.printEmployeeForm();


const employee2 = new Employee("Josh", "Barber", "$15/hr", "full-time");
employee2.printEmployeeForm();

const employee3 = new Employee("Nick", "Receptionist", "$12/hr",);
employee3.printEmployeeForm();








