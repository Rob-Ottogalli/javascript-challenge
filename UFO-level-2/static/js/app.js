// from data.js
var tableData = data;

// -----------------------------------
// APPEND DATA TABLE TO HTML 
// -----------------------------------

// Get a reference to the table body
var tbody = d3.select("tbody");

// Define function to display UFO table on page launch
function init() {
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

// // Define function to filter out (hide) cells from the UFO table
// // Function takes 2 inputs:
// // "value" is the input value from the filter
// // "x" is the cell in the table
// function hideCells(value, x) {
//     // Set variable to hold all table
//     var table = document.getElementById("ufo-table");
//     // Set variable to hold table row
//     var tr = table.getElementsByTagName("tr");
//     // Loop through table
//     for (i=1; i<tr.length; i++) {
//         // Set variable to hold data for cell of row
//         var td = tr[i].getElementsByTagName("td")[x];

//         // Set variable to hold cell text
//         var textValue = td.textContent || td.innerText;

//         // If cell value is equal to filter input value,
//         if (textValue === value) {
//             // then leave that row in visible format.
//             tr[i].style.display = "";
//         }
//     }
// }

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputState = d3.select("#state");

    // Get the value property of the input element
    var dateValue = inputDate.property("value");
    var stateValue = inputState.property("value");


    // Set variable to hold all table
    var table = document.getElementById("ufo-table");

    // Set variable to hold table row
    var tr = table.getElementsByTagName("tr");

    // If inputValue is null,

    // if (dateValue === "" && stateValue === "") {
    //     // then apply visible formatting to all rows.
    //     for (i=1; i<tr.length; i++) {
    //         tr[i].style.display = "";
    //     }
    // }
    // // If not, then filter rows, and hide unfiltered rows.
    // else {

    // // If both cellDate and cellState are selected,
    // if (dateValue !== "" && stateValue !== "") {
    //     for (i=1; i<tr.length; i++) {
    //         // Set variable to hold data for Datetime cell of row
    //         var tdDate = tr[i].getElementsByTagName("td")[0];
    //         var tdState = tr[i].getElementsByTagName("td")[2];
    
    //         // Set variable to hold hold Datetime cell text
    //         var cellDate = tdDate.textContent;
    //         var cellState = tdState.textContent;

    //         // then leave that row in visible format.
    //         tr[i].style.display = "";
    //     }
    // }
    // If only one or none is selected,
    // else { 
        // Loop through table
    for (i=1; i<tr.length; i++) {
        // Set variable to hold data for Datetime cell of row
        var tdDate = tr[i].getElementsByTagName("td")[0];
        var tdState = tr[i].getElementsByTagName("td")[2];

        // Set variable to hold hold Datetime cell text
        var cellDate = tdDate.textContent;
        var cellState = tdState.textContent;
        var dateValueCopy = dateValue;
        var stateValueCopy = stateValue;

        if (dateValue.length === 0) {
            dateValue = cellDate;
            console.log("Null");
        }
        if (stateValue.length === 0) {
            stateValue = cellState;
            console.log("Null");
        }

        if (cellDate === dateValue && cellState === stateValue) {
            // then leave that row in visible format.
            tr[i].style.display = "";
        }

        // If cell Datetime is selected,
        // else {
        // if (cellDate === dateValue) {
        //     // then leave that row in visible format.
        //     tr[i].style.display = "";
        // }
        // // If State is selected,
        // else if (cellState === stateValue) {
        //     // then leave that row in visible format.
        //     tr[i].style.display = "";
        // }
        // // If cell value is not equal to dateValue and stateValue,
        // else {
        //     // then apply invisible format to row.
        //     tr[i].style.display = "none";
        // }
        // }
        dateValue = dateValueCopy;
        stateValue = stateValueCopy;
    }
    // }
  };

init();