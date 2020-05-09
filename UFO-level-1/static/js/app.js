// from data.js
var tableData = data;

// -----------------------------------
// APPEND DATA TABLE TO HTML 
// -----------------------------------

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through each row in table
tableData.forEach(function(UFOReport) {
    // Console.log each UFO object
    console.log(UFOReport);
    // Use d3 to append one table row "tr" for each UFO object
    var row = tbody.append("tr");

    // Use "Object.entries" to console.log each UFO object value
    Object.entries(UFOReport).forEach(function ([key, value]) {
        console.log(key,value);
        // Use d3 to append 1 cell per UFO report value 
        var cell = row.append("td");
        // Use d3 to update each cell's text with UFO object value
        cell.text(value);
    });
});