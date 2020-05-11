///// SEE this web page https://www.w3schools.com/howto/howto_js_filter_table.asp

// from data.js
var tableData = data;

// -----------------------------------
// APPEND DATA TABLE TO HTML 
// -----------------------------------

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through each row in table
function init() {
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
}


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
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    // Set variable to hold all table
    var table = document.getElementById("ufo-table");

    // Set variable to hold table row
    var tr = table.getElementsByTagName("tr");

    // If inputValue is null,
    if (inputValue === "") {
        // then apply visible formatting to all rows.
        for (i=1; i<tr.length; i++) {
            tr[i].style.display = "";
        }
    }
    // If not, then filter rows, and hide unfiltered rows.
    else {
    // Loop through table
        for (i=1; i<tr.length; i++) {
            // Set variable to hold data for Datetime cell of row
            var td = tr[i].getElementsByTagName("td")[0];

            // Set variable to hold hold Datetime cell text
            var textValue = td.textContent || td.innerText;

            // If cell Datetime is equal to inputValue Datetime,
            if (textValue === inputValue) {
                // then leave that row in visible format.
                tr[i].style.display = "";
            }

            // If cell Datetime is not equal to inputValue Datetime,
            else {
                // then apply invisible format to row.
                tr[i].style.display = "none";
            }
        }
    }
    

    
  };

init();