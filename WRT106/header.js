const headerHTML = `
<header class="header">
    <div class="header-content">
      <div class="title">
        <p class="Org">Make the Call, Stop the Trawl</p>
      </div>
    </div>
  </header>
  <div class = "header-content">
  <nav>
    <ul class="menu">
    <div class="menu-background"></div>
      <li class="dropdown">
          <a href="Main.html#services" class="menu-item dropdown-header">Home</a>
    
          <ul class="submenu">
            <li class="menu-item first-submenu-item"><a href="Main.html#mission-statement">Mission Statement</a></li>
            <li class="menu-item"><a href="Main.html#trawling-at-a-glance">Trawling</a></li>
            <li class="menu-item"><a href="Main.html#quick-look">Quick Look</a></li>
          </ul>
        </li>
  
      <li class="dropdown">
        <a href="About.html#services" class="menu-item dropdown-header">About Trawling</a>
  
        <ul class="submenu">
          <li class="menu-item first-submenu-item"><a href="About.html#about-trawling">What is trawling</a></li>
          <li class="menu-item"><a href="About.html#equipment">Equipment</a></li>
          <li class="menu-item"><a href="About.html#pros">Pros/Cons</a></li>
        </ul>
      </li>
      <li class="dropdown">
          <a href="Impacts.html#services" class="menu-item dropdown-header">Impacts</a>
    
          <ul class="submenu">
            <li class="menu-item first-submenu-item"><a href="#service1">Population Reduction</a></li>
            <li class="menu-item"><a href="#service2">Bycatch</a></li>
            <li class="menu-item"><a href="#service3">Discards</a></li>
            <li class="menu-item"><a href="#service3">Habitat Destruction</a></li>
          </ul>
        </li>
        <li class="dropdown">
            <a href="About.html#services" class="menu-item dropdown-header">Trawl Survey</a>
          
            <ul class="submenu dropdown-submenu">
              <li class="menu-item first-submenu-item"><a href="#service1">Mortality Rates</a></li>
              <li class="menu-item"><a href="#service2">Information</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="Contact.html#services" class="menu-item dropdown-header">Contact</a>
          
            <ul class="submenu dropdown-submenu">
              <li class="menu-item first-submenu-item"><a href="#service1">Section 1</a></li>
              <li class="menu-item"><a href="#service2">Section 2</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="WorkCited.html#services" class="menu-item dropdown-header">Work cited</a>
          
            <ul class="submenu dropdown-submenu">
              <li class="menu-item first-submenu-item"><a href="#service1">Section 1</a></li>
              <li class="menu-item"><a href="#service2">Section 2</a></li>
            </ul>
          </li>
    </ul>
  </nav>
  </div>
  



`;


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("header-placeholder").innerHTML = headerHTML;
  setupIntersectionObserver(); // Call the function after the header is inserted
});

function setupIntersectionObserver() {
  // Start observing all the .column-left, .sub-header, and .column-right elements
  const elementsToObserve = document.querySelectorAll('.column-left, .sub-header, .column-right');
  elementsToObserve.forEach(element => {
    if (element) {
      observer.observe(element);
    }
  });
}
// Function to handle the intersection event
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('column-left')) {
        entry.target.classList.add('slide-in-1');
      } else if (entry.target.classList.contains('sub-header')) {
        entry.target.classList.add('slide-in-0');
      } else if (entry.target.classList.contains('column-right')) {
        entry.target.classList.add('slide-in-2');
      } else if (entry.target.classList.contains('image')) {
        entry.target.classList.add('slide-in-2');
      }
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the browser viewport as the root
  threshold: 0.1 // Trigger the callback when at least 10% of the element is visible
});




