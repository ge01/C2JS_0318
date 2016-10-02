// Event listener that fires when a user clicks a button.
document.getElementById("myBtn").addEventListener("click", function(){
  computeFigures();
});

// Global variables
var day1, day2, day3, total;

function computeFigures(){
  // Get the sales for each day
  day1 = parseFloat(document.getElementById('day1').value);
  day2 = parseFloat(document.getElementById('day2').value);
  day3 = parseFloat(document.getElementById('day3').value);

  // Display
  if (day1 === null || day1 === "" || isNaN(day1)) {
    // Display an error message for miles
    document.getElementById('outTotal').innerHTML = "Day 1 must be filled out!";
  } else if (day2 === null || day2 === "" || isNaN(day2)) {
      // Display an error message for gallons
      document.getElementById('outTotal').innerHTML = "Day 2 must be filled out!";
  } else if (day2 === null || day2 === "" || isNaN(day2)) {
      // Display an error message for gallons
      document.getElementById('outTotal').innerHTML = "Day 3 must be filled out!";
  } else {
      // Calculate total sales
      total = day1 + day2 + day3;
  }
  // Display the sales figures
  document.getElementById('outTotal').innerHTML = "Day 1: " + day1.toFixed(2);
  document.getElementById('outTotal').innerHTML = "Day 2: " + day2.toFixed(2);
  document.getElementById('outTotal').innerHTML = "Day 3: " + day3.toFixed(2);
  document.getElementById('outTotal').innerHTML = "Total: " + total.toFixed(2);
}
