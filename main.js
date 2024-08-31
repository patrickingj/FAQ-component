function toggleFaq(button) {
  // Get the associated answer div
  const answer = button.nextElementSibling;
  
  const icon = button.querySelector('.faq-img');
  
  // Toggle the display of the answer
  if (answer.style.display === "none") {
    answer.style.display = "block";
    if (icon.src.includes("assets/images/icon-plus.svg")) {
    icon.src = "assets/images/icon-minus.svg"; // Change to the up arrow image
  }
  } else {
    answer.style.display = "none";
      if (icon.src.includes("assets/images/icon-minus.svg")) {
        icon.src = "assets/images/icon-plus.svg"; // Change to the up arrow image
      }
    }
  }