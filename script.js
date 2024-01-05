function performSearch() {
  // Get the search input value
  var searchTerm = document.getElementById('portfolio-search').value.toLowerCase();

  // Perform search logic
  if (searchTerm) {
    // Select all sections in the portfolio
    var sections = document.querySelectorAll('section');

    // Variables to store the nearest section and its distance
    var nearestSection = null;
    var nearestDistance = Infinity;

    // Iterate through each section
    sections.forEach(function (section) {
      // Get the text content of the section in lowercase
      var sectionText = section.textContent.toLowerCase();

      // Check if the section text includes the search term
      if (sectionText.includes(searchTerm)) {
        // Find the index of the first occurrence of the search term
        var index = sectionText.indexOf(searchTerm);

        // Calculate the distance from the start of the section
        var distance = Math.abs(index);

        // Check if this section is closer than the current nearest one
        if (distance < nearestDistance) {
          nearestSection = section;
          nearestDistance = distance;
        }
      }
    });

    // If a matching section is found, scroll to it
    if (nearestSection) {
      // Scroll to the nearest section
      nearestSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}
