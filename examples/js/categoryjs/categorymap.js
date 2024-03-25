
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
    function generateCategoryHTML(category, index) {
        return `
            <div class="category">
                <img src="assets/categorymap_images/category${index+1}.png"> <!-- Assuming you have images with corresponding index names -->
                <p class="categoryName">${category.CATEGORY}</p>
                <a href="prototype.html?category=${encrypt(category.CATEGORY)}" class="visitCategory" target="_self">Visit</a>
            </div>
        `;
    }

    // Function to populate categories with data
    function populateCategories(data) {
        const categoriesContainer = document.getElementById('categoryContents');
        // Clear previous content
        categoriesContainer.innerHTML = '';
        // Iterate over each category and generate HTML
        data.forEach((category, index) => {
            const categoryHTML = generateCategoryHTML(category, index);
            categoriesContainer.innerHTML += categoryHTML;
        });
    }

});
