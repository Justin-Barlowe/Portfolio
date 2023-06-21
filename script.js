// Load the header
fetch('header.html')
  .then(response => response.text())
  .then(headerHtml => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    headerPlaceholder.innerHTML = headerHtml;
  });

  
// Load the footer
fetch('footer.html')
  .then(response => response.text())
  .then(footerHtml => {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    footerPlaceholder.innerHTML = footerHtml;
  });
