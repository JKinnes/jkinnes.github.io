const fishContainer = document.querySelector('.fish-container');
const fishElements = document.querySelectorAll('.fish');

// Set random positions for each fish
fishElements.forEach((fish) => {
  const randomX = Math.floor(Math.random() * fishContainer.offsetWidth);
  const randomY = Math.floor(Math.random() * fishContainer.offsetHeight);
  fish.style.left = `${randomX}px`;
  fish.style.top = `${randomY}px`;
  fish.dataset.originalTop = randomY; // Store the original top position
});

function applyFishParallax(scrollPosition) {
  fishElements.forEach((fish, index) => {
    // Adjust the factor to control the parallax speed
    const parallaxFactorFish = (index % 3 + 1) * 0.2;


    const translateYFish = parseInt(fish.dataset.originalTop) + scrollPosition * parallaxFactorFish;

    // Update the fish position
    fish.style.top = `${translateYFish}px`;
  });
}

document.addEventListener('scroll', function () {
  const headerContent = document.querySelector('.header-content');
  const orgText = document.querySelector('.Org');
  const scrollPosition = window.pageYOffset;

  // Adjust the factors to control the parallax speed
  const parallaxFactorBackground = 0.5;
  const parallaxFactorText = -0.2;
  const translateYBackground = scrollPosition * parallaxFactorBackground;
  const translateYText = scrollPosition * parallaxFactorText;

  headerContent.style.transform = `translateY(${translateYBackground}px)`;
  orgText.style.transform = `translateY(${translateYText}px)`;

  // Apply parallax effect to fish elements
  applyFishParallax(scrollPosition);
});


function updateFishContainerHeight() {
    const headerHeight = 200; // The height of your header
    const bodyHeight = document.body.scrollHeight;
    const fishContainer = document.querySelector('.fish-container');

    if (fishContainer) {
      fishContainer.style.height = `${bodyHeight - headerHeight}px`;
    }
  }

  window.addEventListener('load', updateFishContainerHeight);
  window.addEventListener('resize', updateFishContainerHeight);