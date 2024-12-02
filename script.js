let selectedPrice = 0;

function expandBox(element, price, discount) {
  // Collapse other boxes and hide dropdowns
  const boxes = document.querySelectorAll('.interactive-box');
  boxes.forEach(box => {
    if (box !== element) {
      box.classList.remove('expanded');  // Collapse other boxes
      box.querySelector('.dropdowns').classList.add('hidden');  // Hide dropdowns of other boxes
    }
  });

  // Expand the clicked box and show the dropdown options
  element.classList.add('expanded');  // Keep box expanded
  const dropdowns = element.querySelector('.dropdowns');
  dropdowns.classList.remove('hidden');  // Show the dropdown container
  
  // Update the total price for the selected bundle
  if (price) {
    selectedPrice = price;
    document.getElementById('total-dkk').textContent = selectedPrice;
  }
}

function addToCart() {
  if (selectedPrice > 0) {
    alert(`Added to cart!!! Total: DKK ${selectedPrice}`);
  } else {
    alert('Please select a bundle before adding to cart.');
  }
}

// Close dropdowns when clicked outside
document.addEventListener('click', function(event) {
  const dropdowns = document.querySelectorAll('.dropdowns');
  dropdowns.forEach(dropdown => {
    // const box = dropdown.closest('.interactive-box');
    if (!box.contains(event.target)) {
      dropdown.classList.add('hidden');  // Close dropdown if clicked outside
    }
  });
});

// Prevent closing dropdown when clicking inside the dropdown
document.addEventListener('click', function(event) {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
      e.stopPropagation();  // Prevent dropdown from closing when clicking inside
    });
  });
});

// Detect selection in dropdown and close dropdown after selecting
document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('change', function() {
    const dropdownContainer = this.closest('.dropdowns');
    dropdownContainer.classList.add('hidden');  // Close dropdown after selection
  });
});
