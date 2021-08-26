window.addEventListener("DOMContentLoaded", (event) => {
  //validate name
  const name = document.querySelector("#name");
  const textError = document.querySelector(".name-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      new EmployeeData().name = name.value;
      textError.textContent = "";
    } catch (error) {
      textError.textContent = error;
    }
  });
  
  //validate date
  function checkFulldate(fulldate) {
    try {
      new EmployeeData().startDate = fulldate
      dateError.textContent = ""
    } catch (error) {
      dateError.textContent = error
    } 
  }
  const day = document.querySelector("#day") 
  const month = document.querySelector("#month")
  const year =  document.querySelector("#year")
  const dateError = document.querySelector(".date-error")
  day.addEventListener("change" ,function() {
    let fulldate = day.value +" "+month.value+" "+year.value
    checkFulldate(fulldate) 
  })
  month.addEventListener("change" ,function() {
    let fulldate = day.value +" "+month.value+" "+year.value
    checkFulldate(fulldate) 
  })
  year.addEventListener("change" ,function() {
    let fulldate = day.value +" "+month.value+" "+year.value
    checkFulldate(fulldate) 
  })

  //validate salary
  const salary = document.querySelector("#salary");
  const output = document.querySelector(".salary-output");
  output.textContent = salary.value;
  salary.addEventListener("input", function () {
    output.textContent = salary.value;
  });
});


function setTextValue(component,problem){
  let textError = document.querySelector(component);
  textError.textContent = problem
}

function save() {
  try {
    let newEmployee = createEmployeePayroll();
    createAndUpdateStorage(newEmployee)
  } catch (error) {
    alert(error);
  }
}

function createAndUpdateStorage(employee) {
  let employeePayRollList = JSON.parse(localStorage.getItem("EmployeePayRollList"))
  if (employeePayRollList != undefined) {
    employeePayRollList.push(employee)
  } else {
    employeePayRollList = [employee]
  }
  alert(employeePayRollList.toString())
  localStorage.setItem("EmployeePayRollList",JSON.stringify(employeePayRollList))
}

function createEmployeePayroll() {
  let employee = new EmployeeData()
  try {
    employee.name = getInputValueById('#name')
  } catch (error) {
    setTextValue('.name-error',error)
    throw error;
  }
  employee.profileImage = getSelectionValue("[name=profile]").pop()
  employee.gender = getSelectionValue("[name=gender]").pop()
  employee.department = getSelectionValue("[name=department]")
  employee.salary = getInputValueById("#salary")
  employee.notes = getInputValueById("#notes")
  let date = getInputValueById("#day")+" "+getInputValueById("#month")+" "+getInputValueById("#year")
  employee.startDate = new Date(date)
  alert(employee.toString())
  return employee
}

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
};

const getSelectionValue = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue)
  let selItems = []
  allItems.forEach(item => {
    if(item.checked) selItems.push(item.value)
  })
  return selItems
}

function resetForm() {
  setValue("#name","")
  unsetSelectedValue("[name=profile]")
  unsetSelectedValue("[name=gender]")
  unsetSelectedValue("[name=department]")
  setValue('#salary',"")
  setValue('#notes',"")
  setValue('#day',"1")
  setValue('#month',"January")
  setValue('#year',"2021")
}
function  unsetSelectedValue(propertyValue){
  let allItems = document.querySelectorAll(propertyValue)
  allItems.forEach(item =>{
    item.checked = false
  })
}

function setValue(id , value) {
  const element = document.querySelector(id)
  element.value = value
}