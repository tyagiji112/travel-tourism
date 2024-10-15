// Handle the destination form submission
document.getElementById('destination-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const travelDate = document.getElementById('travel-date').value;

    try {
        const response = await fetch('/api/get-destination-insights', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ destination, travelDate }),
        });

        const data = await response.json();
        displayDestinationInsights(data);
    } catch (error) {
        console.error('Error fetching AI data:', error);
        document.getElementById('destination-response').innerText = 'Error fetching data.';
    }
});

// Function to display AI-generated travel insights and render the chart
function displayDestinationInsights(data) {
    const responseDiv = document.getElementById('destination-response');

    // Display events, weather, and other details
    responseDiv.innerHTML = `
        <h4>Events in ${data.destination}</h4>
        <ul>
            ${data.events.map(event => `<li>${event.name} on ${event.date}</li>`).join('')}
        </ul>
        <h4>Weather Forecast: ${data.weather}</h4>
        <h4>Total Estimated Expenditure: $${data.totalExpenditure}</h4>
    `;

    // Generate the expenditure chart
    const ctx = document.getElementById('expenditureChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Flights', 'Hotels', 'Car Rental', 'Daily Expenses'],
            datasets: [{
                label: 'Cost in USD',
                data: [
                    data.expenditures.flights,
                    data.expenditures.hotels,
                    data.expenditures.cars,
                    data.expenditures.dailyExpenses
                ],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
