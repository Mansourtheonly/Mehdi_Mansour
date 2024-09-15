const body = document.body;
const btnTheme = document.querySelector('.fa-moon');

// Function to add the theme class to the body and icon
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

// Get the stored theme from localStorage
const getBodyTheme = localStorage.getItem('portfolio-theme') || 'light';
const getBtnTheme = localStorage.getItem('portfolio-btn-theme') || 'fa-moon';

// Apply the stored theme on page load
addThemeClass(getBodyTheme, getBtnTheme);

// Check if the current theme is dark
const isDark = () => body.classList.contains('dark');

// Set the theme and save it to localStorage
const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem('portfolio-theme'));
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

// Toggle theme on button click
const toggleTheme = () =>
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');

btnTheme.addEventListener('click', toggleTheme);
