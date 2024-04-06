// Async function to fetch data from an API
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the async function
  fetchData();

  


// Async function to simulate delay
async function simulateDelay() {
    console.log('Start');
    
    // Use await with setTimeout to simulate a delay of 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('End after delay');
  }
  
  // Call the async function
  simulateDelay();
  