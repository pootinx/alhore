// Rating Initialization
$(document).ready(function() {
    $('#rateMe2').mdbRate();
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll to Home section
    document.querySelector('.nav-link[href="#home"]').addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    });
  
    // Smooth scroll to Products section
    document.querySelector('.nav-link[href="#products"]').addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('.nav-link[href="#questions"]').addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('#questions').scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('.nav-link[href="#contact"]').addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('getProductsButton').addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
    });
    
  });


 