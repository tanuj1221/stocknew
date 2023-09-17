var chartElement = document.createElement('div');
chartElement.classList.add('chart-container');

$(document).ready(function() {
    // Select the container and append the chart element
    var eleElement = document.getElementById('ele');
    eleElement.appendChild(chartElement);

    // Create the chart
    var chart = LightweightCharts.createChart(chartElement, {
        // Chart options
    });

    // Variable to store fetched data
    var cachedChartData = null;

    function fetchHistoricalData(interval, symbol) {
        // ... (unchanged code)
    }

    // Fetch and display default 1-year data when the page loads
    var defaultSymbol = 'AAPL'; // Default symbol
    fetchHistoricalData('1year', defaultSymbol);

    // Example usage
    $('#7daysButton').click(function() {
        fetchHistoricalData('7days', defaultSymbol);
    });

    $('#1monthButton').click(function() {
        fetchHistoricalData('1month', defaultSymbol);
    });
});

// Search button function (outside of $(document).ready())
$('#searchButton').click(function() {
    var symbol = $('#searchInput').val();
    if (symbol) {
        fetchDataAndUpdate(symbol);
        // Perform other actions related to stock search
    }
});

// Function to fetch and update data (outside of $(document).ready())
function fetchDataAndUpdate(symbol) {
    fetchHistoricalData('1year', symbol);
    // ... (perform other related updates)
}
