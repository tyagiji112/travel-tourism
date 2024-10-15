document.getElementById('booking-form').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get the hotel name from the input
  const hotelName = document.getElementById('hotel-name').value;

  // Clear previous response
  document.getElementById('response').innerText = '';

  try {
      // Make a POST request to the server
      const response = await fetch('/api/book-hotel', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json', // Indicate JSON payload
          },
          body: JSON.stringify({ name: hotelName }), // Send the hotel name
      });

      // Check if the response is OK
      if (!response.ok) {
          throw new Error('Failed to book hotel');
      }

      // Get the response data
      const result = await response.json();
      // Display success message
      document.getElementById('response').innerText = result.message;

      // Clear the input field after submission
      document.getElementById('hotel-name').value = '';
  } catch (error) {
      // Display error message if something went wrong
      document.getElementById('response').innerText = 'Error: ' + error.message;
  }
});

// Additional functions can be added below for future features
