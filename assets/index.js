document.getElementById("dropdown-toggle").addEventListener("mouseover", function() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("hidden");  
});

document.getElementById("dropdownHoverButton").addEventListener("hover", function() {
  const mobileDropdownMenu = document.getElementById("dropdownHover");
  mobileDropdownMenu.classList.toggle("hidden");
});

  // Fermer le menu si on clique en dehors
window.addEventListener("click", function(e) {
    const dropdownMenu = document.getElementById("dropdown-menu");
    const dropdownToggle = document.getElementById("dropdown-toggle");
    const mobileDropdownMenu = this.document.getElementById("dropdownHover");
    const mobileDropdownToggle = this.document.getElementById("dropdownHoverButton");

    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target) || (!mobileDropdownToggle.contains(e.target) && !mobileDropdownMenu.contains(e.target))) {
      dropdownMenu.classList.add("hidden");
      mobileDropdownMenu.classList.add("hidden");
    }

    if (dropdownToggle.contains(e.target) && dropdownMenu.contains(e.target) || (mobileDropdownToggle.contains(e.target) && mobileDropdownMenu.contains(e.target))) {
      dropdownMenu.classList.remove("hidden");
      mobileDropdownMenu.classList.remove("hidden");
    }

});