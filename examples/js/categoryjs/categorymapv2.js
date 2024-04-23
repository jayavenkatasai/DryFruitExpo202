var urlendpoint = '';
var exhibition_ID=3;
const hindiCategories = {
    "Diagnostic Supplies, Products & Equipment": "डायग्नोस्टिक सप्लाईज़, प्रोडक्ट्स और इक्विपमेंट",
    "Durable medical equipment": "ड्यूरेबल मेडिकल इक्विपमेंट",
    "Emergency Medical Supplies & Equipment": "इमर्जेंसी मेडिकल सप्लाईज़ और इक्विपमेंट",
    "Home medical equipments/ supplies": "होम मेडिकल इक्विपमेंट्स/ सप्लाईज़",
    "Implantable Devices": "इम्प्लांटेबल डिवाइसेस",
    "Medical Education Supplies": "मेडिकल एजुकेशन सप्लाईज़",
    "Medical Software": "मेडिकल सॉफ्टवेयर",
    "Medical Uniforms, Scrubs & Apparel": "मेडिकल यूनिफ़ॉर्म्स, स्क्रब्स और अपारल",
    "Medical/ surgical instruments": "मेडिकल/ सर्जिकल इंस्ट्रूमेंट्स",
    "Patient care": "पेशेंट केयर",
    "Patient mobility aids": "पेशेंट मोबिलिटी एड्स",
    "Sterile Processing & Infection Control": "स्टेराइल प्रोसेसिंग और इन्फेक्शन कंट्रोल"
};
const visitTranslations = {
    "english": 
    {
       "visittext": "Visit hall",
       "categoryheading":"Get Started",
       "categoryDescription": "Find what you need by Category"
    },
   
    "hindi":
    {
        "visittext": "विजिट हॉल",
        "categoryheading":"शुरू हो जाओ",
        "categoryDescription": "श्रेणी के आधार पर खोजें कि आपको क्या चाहिए"
     },
    
};

if (window.location.href.includes('digiexpodev.marketcentral')) {
    urlendpoint = 'https://www.marketcentral.in';
}
// Check if the URL contains "www" or "expodev"
else if (window.location.href.includes('www') || window.location.href.includes('expodev')) {
    urlendpoint = 'https://www.marketcentral.in';
}
else if(window.location.href.includes('localhost')){
    urlendpoint = 'https://www.marketcentral.in';
}
// Default to some other URL
else {
    urlendpoint = 'https://www.marketcentral.in';
}
document.addEventListener("DOMContentLoaded", function() {
    fetch(`${urlendpoint}/rest/virtualExpo/general/getBusinesses/${exhibition_ID}`)
        .then(response => response.json())
        .then(data => {
            // Log the response to the console
            //console.log(data);
            // Call function to populate categories with the fetched data
            const language = localStorage.getItem('languageselection')
            const categoryheading = visitTranslations[language].categoryheading;
            const categoryDescription = visitTranslations[language].categoryDescription;
           // console.log(categoryheading)
            document.querySelector('.categoryheading').textContent = categoryheading;
            document.querySelector('.categoryDescription').textContent = categoryDescription;
            populateCategories(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to dynamically generate category HTML
    function generateCategoryHTML(categoryName, index,category,categorynew) {
        const language = localStorage.getItem('languageselection')
        const visitText = visitTranslations[language].visittext;
        const hallCount = categorynew.HALL_COUNT;
        let dropdownItemsHTML = ''; // Initialize an empty string to store dropdown items

        for (let i = 0; i < hallCount; i++) {
            let startpoint = i * 10 + 1;
            let endpoint = (i + 1) * 10;
            dropdownItemsHTML += `<a class="dropdown-item" onclick="sendbeaconapi(0, '${category}', '')" href="prototypev2.html?category=${encrypt(category)}&start=${startpoint}&end=${endpoint}&hallnum=${i + 1}">Hall ${i + 1} </a>`;
        }
    
        return `
            <div class="category">
                <img src="assets/categorymap_images/category${index+1}.png"> <!-- Assuming you have images with corresponding index names -->
                <p class="categoryName">${categoryName}</p>
                <div class="dropdownSection">
                    <div class="visitHallButton">
                        <a href="prototypev2.html?category=${encrypt(category)}" href="javascript:void(0)"class="visitCategory" target="_self" onclick="sendbeaconapi(0, '${category}', ''); trackinga('${category}','category_page');return true;">${visitText}</a>
                    </div>
                    <div class="dropdown">
                    <button type="button" class="btn btn-primary numberToggle dropdown-toggle" data-toggle="dropdown">
                        1
                    </button>
                    <div class="dropdown-menu">
                        ${dropdownItemsHTML}
                    </div>
                </div> 
                </div>

            </div>
        `;
    }

    // Function to populate categories with data
    function populateCategories(data) {
        const categoriesContainer = document.getElementById('categoryContents');
        // Clear previous content
        categoriesContainer.innerHTML = '';
        const language = localStorage.getItem('languageselection')
        const visitText = visitTranslations[language];
        // Iterate over each category and generate HTML
        data.forEach((category, index) => {
            const categoryName = (language === 'hindi') ? hindiCategories[category.CATEGORY] : category.CATEGORY;
            const categoryHTML = generateCategoryHTML(categoryName, index,category.CATEGORY,category);
            categoriesContainer.innerHTML += categoryHTML;
        });
        // Iterate over each category and generate HTML
        data.forEach((category, index) => {
            const categoryHTML = generateCategoryHTML(category, index);
            categoriesContainer.innerHTML += categoryHTML;
        });
    }

});
