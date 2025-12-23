// scripts/myScripts.js

// ScrollSpy: reduce "highlight off by one" by adjusting rootMargin and refreshing after load
let scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-main',
  rootMargin: '-90px 0px -40% 0px'
});

window.addEventListener('load', () => {
  scrollSpy.refresh();
});

// Dropdown filtering (now includes Final Year Project)
function showGalleryCategoryImages() {
  const value = document.getElementById("gallerySelect").value;

  const software = document.getElementById("SoftwareProjects");
  const webdb = document.getElementById("WebDatabase");
  const fyp = document.getElementById("finalYearProject");

  // If Select Category or All, show everything
  if (value === "1" || value === "Select Category") {
    software.style.display = "block";
    webdb.style.display = "block";
    fyp.style.display = "block";
    return;
  }

  // Hide all first
  software.style.display = "none";
  webdb.style.display = "none";
  fyp.style.display = "none";

  if (value === "2") software.style.display = "block";
  if (value === "3") webdb.style.display = "block";
  if (value === "4") fyp.style.display = "block";
}

// Contact form demo success message
function messageSent() {
  document.getElementById("successEmail").style.display = "block";
  document.getElementById("emailAddressInput").value = "";
  document.getElementById("phoneNumberInput").value = "";
  document.getElementById("messageInput").value = "";
  document.getElementById("categoryInput").value = "Projects";
}
