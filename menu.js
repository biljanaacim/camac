// Prvo, omoguci dropdown u offcanvas meniju
const offcanvasMenu = document.querySelector('#offcanvasMenu .offcanvas-body');
const contactLink = offcanvasMenu.querySelector("a[href='#contact']"); // Dohvati kontakt link
const dropdown = document.createElement('div');
dropdown.classList.add('dropdown');

dropdown.innerHTML = `
  <a href="#" class="nav-link dropdown-toggle" id="certificatesDropdownMobile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sertifikati
  </a>
  <ul class="dropdown-menu" aria-labelledby="certificatesDropdownMobile">
    <li><a class="dropdown-item" href="sertifikat1.pdf" target="_blank">DNV</a></li>
    <li><a class="dropdown-item" href="sertifikat2.pdf" target="_blank">CRS</a></li>
  </ul>
`;

// Ubaci dropdown iznad kontakt linka
offcanvasMenu.insertBefore(dropdown, contactLink);

// Zabrani zatvaranje offcanvas menija kada se klikne na dropdown link
const dropdownToggle = document.querySelector('#certificatesDropdownMobile');
dropdownToggle.addEventListener('click', (event) => {
  event.stopPropagation(); // Sprečava zatvaranje menija
});
