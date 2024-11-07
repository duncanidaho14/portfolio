document.getElementById("triggerEl").addEventListener("click", function() {
    const dropdownMenu = document.getElementById("navbar-sticky");
    dropdownMenu.classList.toggle("hidden");
});

  // Fermer le menu si on clique en dehors
window.addEventListener("click", function(e) {
    const dropdownToggle = document.getElementById("triggerEl");
    const dropdownMenu = document.getElementById("navbar-sticky");
    
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.add("hidden");
    }

});