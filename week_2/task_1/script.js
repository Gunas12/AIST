 // Function to toggle between light and dark mode
 function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Change button text based on current mode
    const button = document.querySelector('.toggle-btn');
    if (body.classList.contains('dark-mode')) {
      button.textContent = 'Light Mode';
    } else {
      button.textContent = 'Dark Mode';
    }
    
    // Store the theme preference in local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  }

  // Check if dark mode preference is stored and apply it
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    document.querySelector('.toggle-btn').textContent = 'Light Mode';
  }