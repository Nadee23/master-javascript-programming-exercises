function transformEmployeeData(array) {
  // your code here
    return array.map(employee => {

    let employeeObj = {};

    employee.forEach(([key, value]) => {
      employeeObj[key] = value;
    });
    
    return employeeObj;
  });
}
