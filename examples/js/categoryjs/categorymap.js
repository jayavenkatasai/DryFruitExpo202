

var urlendpoint = '';
var exhibition_ID=3;
if (window.location.href.includes('digiexpodev.marketcentral')) {
    urlendpoint = 'https://stage.marketcentral.in';
}
// Check if the URL contains "www" or "expodev"
else if (window.location.href.includes('www') || window.location.href.includes('expodev')) {
    urlendpoint = 'https://www.marketcentral.in';
}
// Default to some other URL
else {
    urlendpoint = 'https://stage.marketcentral.in';
}
document.addEventListener("DOMContentLoaded", function() {
    fetch(`${urlendpoint}/rest/virtualExpo/general/getBusinesses/${exhibition_ID}`)
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
                <a href="prototype.html?category=${encrypt(category.CATEGORY)}" href="javascript:void(0)"class="visitCategory" target="_self" onclick="sendbeaconapi(0, '${category.CATEGORY}', ''); return false;">Visit</a>
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
