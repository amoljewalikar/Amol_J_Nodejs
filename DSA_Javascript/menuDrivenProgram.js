const readline = require('readline');
// Create interface for reading and writing to the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to display the menu
function displayMenu() {
  console.log('\n===== Menu =====');
  console.log('1. Queue\n');
  console.log('2. Stack\n');
  console.log('3. Linked List\n');
  console.log('4. Exit');
}

// Function to handle user input based on selected option
function handleInput(option) {
  switch (option) {
    case '1':
      console.log('\nYou have selected Queue.');
      require('./queue');
      break;
    case '2':
      console.log('\nYou have selected Stack.');
      require('./stack');
      break;
    case '3':
      console.log('\nYou have selected Linked List.');
      require('./linkedList');
      break;
    case '4':
      console.log('Exiting the program.');
      rl.close();
      process.exit(0);
    default:
      console.log('Invalid option. Please select a valid option.');
  }
}

// Function to prompt user for input
function promptUser() {
  rl.question('\nEnter your choice (1-4): ', (answer) => {
    handleInput(answer);
    promptUser(); // Continue prompting for input
  });
}

// Initial display and start prompting for input
displayMenu();
promptUser();
