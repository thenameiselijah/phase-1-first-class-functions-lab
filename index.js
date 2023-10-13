function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }

  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  console.log(returnLastTwoDrivers(drivers));

  const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
  ];
 
console.log(selectingDrivers[0](drivers)); 
console.log(selectingDrivers[1](drivers)); 

function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }

  function fareDoubler(fare) {
    return fare * 2;
  }
  
  function fareTripler(fare) {
  return fare * 3; 
  }

  function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
  }