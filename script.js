const body = document.body;
const btnTheme = document.querySelector('#btn-theme');
const themeToggle = document.querySelector('#theme-toggle');

// Function to add theme class
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.remove('fa-moon', 'fa-sun'); // Remove any existing classes
  btnTheme.classList.add(btnClass);
};

// Get saved theme from localStorage or set to light by default
const currentTheme = localStorage.getItem('portfolio-theme') || 'light';
const currentIcon = localStorage.getItem('portfolio-btn-theme') || 'fa-moon';

// Apply saved theme on page load
addThemeClass(currentTheme, currentIcon);

// Function to check if dark theme is applied
const isDark = () => body.classList.contains('dark');

// Function to toggle between light and dark themes
const toggleTheme = () => {
  if (isDark()) {
    setTheme('light', 'fa-moon');
  } else {
    setTheme('dark', 'fa-sun');
  }
};

// Set the theme and store it in localStorage
const setTheme = (bodyClass, btnClass) => {
  body.classList.remove('light', 'dark');
  body.classList.add(bodyClass);
  btnTheme.classList.remove('fa-moon', 'fa-sun');
  btnTheme.classList.add(btnClass);
  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

// Add event listener to the theme toggle button
themeToggle.addEventListener('click', toggleTheme);
