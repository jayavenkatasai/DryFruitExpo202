 // Fetch data from the API
// Wrap your code in a DOMContentLoaded event listener to ensure it executes after the DOM has loaded
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://stage.marketcentral.in/rest/virtualExpo/general/getBusinesses/3')
        .then(response => response.json())
        .then(data => {
            // Log the response to the console
            console.log(data);
            // Call function to populate categories with the fetched data
            populateCategories(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to dynamically generate category HTML
    function generateCategoryHTML(category) {
        return `
            <div class="category">
                <img src="assets/categorymap_images/${category.CATEGORY}.png"> <!-- Assuming you have images with the same name as category -->
                <p class="categoryName">${category.CATEGORY}</p>
                <a href="prototype.html?category=${category.CATEGORY}" class="visitCategory" target="_self">Visit</a>
            </div>
        `;
    }

    // Function to populate categories
    function populateCategories(categories) {
        const categoryContents = document.getElementById("categoryContents");
        if (categoryContents) {
            categories.forEach(category => {
                const categoryHTML = generateCategoryHTML(category);
                categoryContents.insertAdjacentHTML("beforeend", categoryHTML);
            });
        } else {
            console.error("Element with ID 'categoryContents' not found.");
        }
    }
});
