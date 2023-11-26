// A function that adds and removes the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");

  // Select the description and toggle its display
  const description = element.nextElementSibling;
  if (description.style.display === "block" || description.style.display === "") {
    description.style.display = "none";
  } else {
    description.style.display = "block";
  }
}

// Selects HTML elements, and calls the toggle function when the elements are clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

