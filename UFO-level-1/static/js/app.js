///// SEE this web page https://www.w3schools.com/howto/howto_js_filter_table.asp

// from data.js
var tableData = data;

// -----------------------------------
// APPEND DATA TABLE TO HTML 
// -----------------------------------

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through each row in table
tableData.forEach(function(UFOReport) {
    // Use d3 to append one table row "tr" for each UFO object
    var row = tbody.append("tr");

    // Use "Object.entries" to console.log each UFO object value
    Object.entries(UFOReport).forEach(function ([key, value]) {

        // Use d3 to append 1 cell per UFO report value 
        var cell = row.append("td");
        // Use d3 to update each cell's text with UFO object value
        cell.text(value);
    });
});


// -----------------------------------
// FILTER HTML TABLE
// -----------------------------------

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // // Clear the current data in the table
    // tableData.forEach(function(UFOReport) {
    //     // Use d3 to append one table row "tr" for each UFO object
    //     var row = tbody.append("tr");
    
    //     // Use "Object.entries" to console.log each UFO object value
    //     Object.entries(UFOReport).forEach(function ([key, value]) {
    
    //         // Use d3 to append 1 cell per UFO report value 
    //         var cell = row.remove("td");
    //         // Use d3 to update each cell's text with UFO object value
    //         cell.text("");
    //     });
    // });

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Use the form input to filter the data by blood type
    var filtered = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filtered);
    
    // Loop through each row in table
    filtered.forEach(function(UFOReport) {
        // Use d3 to append one table row "tr" for each UFO object
        var row = tbody.append("tr");

        // Use "Object.entries" to console.log each UFO object value
        Object.entries(UFOReport).forEach(function ([key, value]) {

            // Use d3 to append 1 cell per UFO report value 
            var cell = row.append("td");
            // Use d3 to update each cell's text with UFO object value
            cell.text(value);
        });
    });
    
  };