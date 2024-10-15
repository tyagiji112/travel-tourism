// Function to handle form submissions
async function handleFormSubmission(formId, endpoint, responseDivId, payload) {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();
        document.getElementById(responseDivId).innerText = result.message;
    } catch (error) {
        document.getElementById(responseDivId).innerText = 'Error: ' + error.message;
    }
}

// Hotel Booking Submission
document.getElementById('hotel-booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const hotelName = document.getElementById('hotel-name').value;
    const checkin = document.getElementById('hotel-checkin').value;
    const checkout = document.getElementById('hotel-checkout').value;

    handleFormSubmission(
        'hotel-booking-form',
        '/api/book-hotel',
        'hotel-response',
        { name: hotelName, checkinDate: checkin, checkoutDate: checkout }
    );
});

// Flight Booking Submission
document.getElementById('flight-booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const flightNumber = document.getElementById('flight-number').value;
    const destination = document.getElementById('flight-destination').value;
    const travelDate = document.getElementById('flight-date').value;

    handleFormSubmission(
        'flight-booking-form',
        '/api/book-flight',
        'flight-response',
        { flightNumber, destination, travelDate }
    );
});

// Car Booking Submission
document.getElementById('car-booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const carModel = document.getElementById('car-model').value;
    const rentalDays = document.getElementById('car-rental-days').value;

    handleFormSubmission(
        'car-booking-form',
        '/api/book-car',
        'car-response',
        { carModel, rentalDays }
    );
});
