// This code adds a scroll event listener to the window
$(document).ready(function () {
  $(window).scroll(function () {
    // When the user scrolls more than 400 pixels from the top of the document,
    // the "active" class is added to the navbar and logo elements using the jQuery "addClass" function.
    // Otherwise, the "active" class is removed from these elements using the "removeClass" function.
    if ($(document).scrollTop() > 400) {
      $("nav").addClass("active");
      $(".logo").addClass("active");
    } else {
      $("nav").removeClass("active");
      $(".logo").removeClass("active");
    }
  });
});

// Navbar Toggler
$(document).ready(function () {
  // This code adds click event listeners to the elements with the classes "fa-bars" and "fa-times"
  const openMenu = $(".fa-bars");
  const closeMenu = $(".fa-times");
  // These variables select the elements to show/hide when the menu is opened/closed
  const showMenu = $(".links");
  const sections = $("section");
  const overlay = $(".overlay");
  const navLinkClose = $(".link");

  openMenu.click(function () {
    // When the "fa-bars" element is clicked, the "active" class is toggled on the elements selected by the variables above using the "toggleClass" function.
    showMenu.toggleClass("active");
    sections.toggleClass("active");
    overlay.toggleClass("active");
  });

  closeMenu.click(function () {
    // When the "fa-times" element is clicked, the "active" class is toggled on the elements selected by the variables above using the "toggleClass" function.
    showMenu.toggleClass("active");
    sections.toggleClass("active");
    overlay.toggleClass("active");
  });

  navLinkClose.click(function () {
    showMenu.toggleClass("active");
    sections.toggleClass("active");
    overlay.toggleClass("active");

  });
});


// Add smooth scrolling to all links
$("a").on('click', function (e) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    e.preventDefault();
    // Store hash
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000)
  };
});

// Select all section elements on the page
const sections = document.querySelectorAll("section");
// Select all the list items in the navigation menu
const navLi = document.querySelectorAll("nav .menu .links li");
// When the user scrolls the page, run this function
window.onscroll = () => {
  // Initialize a variable to keep track of the current section
  var current = "";
  // For each section on the page, check if the user has scrolled to it
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    } 
  });
  // For each list item in the navigation menu, update its active state
  navLi.forEach((li) => {
    // Remove the "active" class from all list items
    li.classList.remove("active");
    // If the list item's class matches the current section, add the "active" class
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

// Add border to the Accordim body
$(document).ready(function () {
  const addBorder = $(".accordion-button");
  const borderItem =  $(".accordion-body");
  addBorder.click(function () {
    borderItem.toggleClass("active");
  });
});


