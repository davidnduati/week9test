// question 1 a function that has a delay of two seconds

function havi(delays){
    setTimeout(delays, 2000)
};

 function delays(){
    console.log("hello there");
}

havi(delays)

//question 4 funt in array that counts sum of numbers

let numbe = [2, "11", 3, "a2", false, 5, 7, 1];
let count = 0;
for (let i = 0; i < numbe.length; i++) {
    if (typeof numbe[i] === "number") {
        console.log(numbe[i])
        count += numbe[i];
    }
}
console.log(count);

// question 3  a function that gets a leap year
// enter the end year as your checking year



function findLeapYears(startYear, endYear) {
    let leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        leapYears.push(year);
      }
    }
    return leapYears;
  }

  function check(findLeapYears){
      let dati = Number(prompt("enter the year: "))
  let leapYears = findLeapYears(2000, dati);
  
  
  
  let checkingYear = leapYears.includes(dati)
  if(checkingYear===true){
    console.log("your year is a leap year!!")
  }
  else{
    console.log("your year is not a leap year!! \n below are some of the leap years")
    
  }
  console.log(leapYears);
  }

  check(findLeapYears)

//question 3
class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      return super.calculateAnnualSalary() + 10000;
    }
  }
  
  let manager1 = new Manager('John Doe', 50000, 'Sales');
  let manager2 = new Manager('Jane Smith', 60000, 'Marketing');
  
  console.log(manager1.calculateAnnualSalary());
  console.log(manager2.calculateAnnualSalary());
  
  
