/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employeeRecords) {
  return {
    firstName: employeeRecords[0],
    familyName: employeeRecords[1],
    title: employeeRecords[2],
    payPerHour: employeeRecords[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(data) {
  return data.map((employee) => createEmployeeRecord(employee));
}

function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10),
  });
  return this;
}

function createTimeOutEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10),
  });
  return this;
}

function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find((event) => event.date === date);
  let timeOut = this.timeOutEvents.find((event) => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  return hoursWorked * this.payPerHour;
}

function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find((employee) => employee.firstName === firstNameString);
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce(
    (total, employee) => total + allWagesFor.call(employee),
    0
  );
}

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  );

  return payable;
};
