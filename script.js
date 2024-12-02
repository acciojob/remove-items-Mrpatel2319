//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    // Select the button and dropdown
    const button = document.querySelector('input[type="button"]');
    const colorSelect = document.getElementById("colorSelect");

    // Add event listener to the button
    button.addEventListener("click", function () {
        // Find the selected option
        const selectedOption = colorSelect.options[colorSelect.selectedIndex];
        
        // Remove the selected option
        if (selectedOption) {
            colorSelect.remove(colorSelect.selectedIndex);
        }
    });
});
