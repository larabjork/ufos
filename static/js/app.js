//  Import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear any existing data
    tbody.html("");
    // Loop thru each object in the data, append a row/cells for each val in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

function handleClick() {
    // Grab datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the data using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Rebuild the table using the filtered data 
    // !! If no date was entered, then filteredData will remain the original tableData!!
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

