//* Get the toggle button and the buttons container
const toggleButton = document.querySelector("#toggle-button");
const buttonsContainer = document.querySelector("#buttons-container");

//* Add event listener to the toggle button
toggleButton.addEventListener("click", () => {
    buttonsContainer.classList.toggle("scale-out");
    buttonsContainer.classList.toggle("scale-in");
});
