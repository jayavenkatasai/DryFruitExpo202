
var urlendpoint = '';
var exhibition_ID=4;
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
        "categoryDescription": "श्रेणी के आधार पर खोजें कि आपको क्या चाहिए",
        "Agri Machinery and Tools": "कृषि मशीनरी और उपकरण",
        "Agri Practices and Systems": "कृषि प्रथाएं और प्रणालियां",
        "AgTech and Precision Farming": "कृषि प्रौद्योगिकी और सटीक खेती",
        "Animal Agriculture": "पशु कृषि",
        "Greenhouses and Horticulture": "ग्रीनहाउस और बागवानी",
        "Irrigation Equipment": "सिंचाई उपकरण",
        "Organic and Sustainable Farming Supplies": "जैविक और स्थायी खेती की आपूर्ति",
        "Pesticide and Fertilizer Application": "कीटनाशक और उर्वरक अनुप्रयोग",
        "Processing Equipment and Machinery": "प्रसंस्करण उपकरण और मशीनरी",
        "Safety and Protective Gear": "सुरक्षा और सुरक्षात्मक गियर",
        "Storage and Handling": "भंडारण और संचालन"
     },"telugu": {
        "visittext": "విజిట్ హాల్",
        "categoryheading": "ప్రారంభించు",
        "categoryDescription": "స్థాయి ప్రకారం మీరు ఏమి కావాలనుకుంటున్నారు చూడండి",
        "Agri Machinery and Tools": "వ్యవసాయ యంత్రాలు మరియు సాధనాలు",
        "Agri Practices and Systems": "వ్యవసాయ ఆచరణలు మరియు వ్యవస్థలు",
        "AgTech and Precision Farming": "అగ్రిటెక్ మరియు ఖచ్చితమైన వ్యవసాయం",
        "Animal Agriculture": "జంతు వ్యవసాయం",
        "Greenhouses and Horticulture": "హరిత గృహాలు మరియు ఉద్యానవనం",
        "Irrigation Equipment": "నిర్వణ పరికరాలు",
        "Organic and Sustainable Farming Supplies": "సేంద్రియ మరియు స్థిర వ్యవసాయ సరఫరాలు",
        "Pesticide and Fertilizer Application": "కీటకనాశకాలు మరియు ఎరువుల అనువర్తనం",
        "Processing Equipment and Machinery": "ప్రాసెసింగ్ పరికరాలు మరియు యంత్రాలు",
        "Safety and Protective Gear": "భద్రత మరియు రక్షణ గియర్",
        "Storage and Handling": "నిల్వ మరియు నిర్వహణ"
    }
,    "gujrathi": {
    "visittext": "હોલ મુલાકાત",
    "categoryheading": "શરૂ કરો",
    "categoryDescription": "શ્રેણી પ્રમાણે શોધો શું તમે શોધો છો",
    "Agri Machinery and Tools": "કૃષિ મશીનરી અને સાધનો",
    "Agri Practices and Systems": "કૃષિ પ્રથાઓ અને સિસ્ટમો",
    "AgTech and Precision Farming": "એગ્રિટેક અને પ્રિસિશન ફાર્મિંગ",
    "Animal Agriculture": "પશુપાલન",
    "Greenhouses and Horticulture": "ગ્રીનહાઉસ અને બાગાયત",
    "Irrigation Equipment": "સિંચાઈ સાધનો",
    "Organic and Sustainable Farming Supplies": "જૈવિક અને ટકાઉ ખેતી પુરવઠો",
    "Pesticide and Fertilizer Application": "જંતુનાશક અને ખાતર લાગણી",
    "Processing Equipment and Machinery": "પ્રોસેસિંગ સાધનો અને મશીનરી",
    "Safety and Protective Gear": "સુરક્ષા અને સુરક્ષાત્મક ગિયર",
    "Storage and Handling": "સંગ્રહ અને સંભાળ"
}
,
"marati": {
    "visittext": "हॉल भेट",
    "categoryheading": "सुरुवात करा",
    "categoryDescription": "आपल्या आवडत्या वस्तू श्रेणीनुसार शोधा",
    "Agri Machinery and Tools": "कृषि यंत्रे आणि साधने",
        "Agri Practices and Systems": "कृषि पद्धती आणि प्रणाली",
        "AgTech and Precision Farming": "अ‍ॅग्रीटेक आणि अचूक शेती",
        "Animal Agriculture": "प्राणी शेती",
        "Greenhouses and Horticulture": "ग्रीनहाऊस आणि बागायती",
        "Irrigation Equipment": "सिंचन उपकरणे",
        "Organic and Sustainable Farming Supplies": "सेंद्रिय आणि शाश्वत शेती पुरवठा",
        "Pesticide and Fertilizer Application": "किटकनाशक आणि खत अनुप्रयोग",
        "Processing Equipment and Machinery": "प्रक्रिया उपकरणे आणि यंत्रसामग्री",
        "Safety and Protective Gear": "सुरक्षा आणि संरक्षणात्मक गियर",
        "Storage and Handling": "साठवण आणि हाताळणी"
}
,
"bengali": {
    "visittext": "হল দেখুন",
    "categoryheading": "আরম্ভ করুন",
    "categoryDescription": "আপনি কী খুঁজছেন সেটা শ্রেণী অনুযায়ী খুঁজে নিন",
   "Agri Machinery and Tools": "কৃষি যন্ত্রপাতি এবং সরঞ্জাম",
        "Agri Practices and Systems": "কৃষি প্রথা এবং সিস্টেম",
        "AgTech and Precision Farming": "অ্যাগ্রিটেক এবং নির্ভুল কৃষিকাজ",
        "Animal Agriculture": "প্রাণী কৃষি",
        "Greenhouses and Horticulture": "গ্রিনহাউস এবং উদ্যানপালন",
        "Irrigation Equipment": "সেচ সরঞ্জাম",
        "Organic and Sustainable Farming Supplies": "জৈব এবং টেকসই কৃষি সরবরাহ",
        "Pesticide and Fertilizer Application": "কীটনাশক এবং সার প্রয়োগ",
        "Processing Equipment and Machinery": "প্রক্রিয়াকরণ সরঞ্জাম এবং যন্ত্রপাতি",
        "Safety and Protective Gear": "নিরাপত্তা এবং প্রতিরক্ষামূলক গিয়ার",
        "Storage and Handling": "সংগ্রহ এবং পরিচালনা"
}   
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
var dynamicpoint;
var internetspeed_kbps;
var internetspeed_mbps;
var parser = new UAParser();
var result = parser.getResult();
var useragent =result.device.type
var os =result.os.name
document.addEventListener("DOMContentLoaded", function() {
    // if (navigator.connection) {
    //     console.log(`Effective network type: ${navigator.connection.effectiveType}`);
    //     console.log(`Downlink Speed: ${navigator.connection.downlink}Mb/s`);
    //     console.log(`Round Trip Time: ${navigator.connection.rtt}ms`);
    //   } else {
    //     console.log('Navigator Connection API not supported');

    //   }
    

function calculateInternetSpeed(callback) {
    var imageAddr = "https://www.sefram.com/images/products/photos/hi_res/5372DC.jpg" + "?n=" + Math.random();
    
    //https://www.sefram.com/images/products/photos/hi_res/5372DC.jpg
    var startTime, endTime;
    var downloadSize = 2 * 1024 * 1024; // Size of the file to download in bytes (2 MB)

    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }

    startTime = (new Date()).getTime();
    download.src = imageAddr;

    function showResults() {
        var duration = (endTime - startTime) / 1000; // Duration in seconds
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);  
        console.log("Download duration:", duration.toFixed(2) + " seconds");
        console.log("Downloaded bits:", bitsLoaded);
        console.log("Speed (Bps):", speedBps);
        console.log("Speed (Kbps):", speedKbps);
        console.log("Speed (Mbps):", speedMbps);
        //alert(speedMbps)
        internetspeed_kbps = parseInt(speedKbps);
        internetspeed_mbps = speedMbps;
        if (callback) {
            callback(); // Call the callback function once the values are set
        }
    }
}
calculateInternetSpeed(function() {
    console.log("Internetspeed in kbps:", internetspeed_kbps);
    if (internetspeed_kbps < 900) {
    //    if(useragent=="mobile"){
    //     dynamicpoint = '2d-AgriExpo/hall';
    //    }
     //  dynamicpoint = 'prototype';
     dynamicpoint = '2d-AgriExpo/hall';
    } else {
        dynamicpoint = 'prototype';
    }
    console.log("Dynamic point:", dynamicpoint);
});
        console.log("Dynamic point:", dynamicpoint);
        // Fetch data and update UI based on dynamicpoint
        fetch(`${urlendpoint}/rest/virtualExpo/general/getBusinesses/${exhibition_ID}`)
          .then(response => response.json())
          .then(data => {
                const language = localStorage.getItem('languageselection');
                console.log(language)
                const categoryheading = visitTranslations[language].categoryheading;
                const categoryDescription = visitTranslations[language].categoryDescription;
                document.querySelector('.categoryheading').textContent = categoryheading;
                document.querySelector('.categoryDescription').textContent = categoryDescription;
                populateCategories(data);
            })
          .catch(error => console.error('Error fetching data:', error));
        // Populate categories with data
        // Function to dynamically generate category HTML
        function generateCategoryHTML(categoryName, index, category, categorynew) {
            const language = localStorage.getItem('languageselection');
            const visitText = visitTranslations[language].visittext;
            const hallCount = categorynew.HALL_COUNT;
            let dropdownItemsHTML = '';

            for (let i = 0; i < hallCount; i++) {
                let startpoint = i * 10 + 1;
                let endpoint = (i + 1) * 10;
                dropdownItemsHTML += `<a class="dropdown-item" onclick="sendnavdropdown('${category}','${startpoint}','${endpoint}','${i + 1}')">Hall ${i + 1} </a>`;
            }

            return `
                <div class="category">
                    <img src="assets/categorymap_images/category${index+1}.png">
                    <p class="categoryName">${categoryName}</p>
                    <div class="dropdownSection">
                        <div class="visitHallButton">
                        <a class="visitCategory" target="_self" onclick="sendnav('${category}')">${visitText}</a>

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
        function populateCategories(data) {
            
            const categoriesContainer = document.getElementById('categoryContents');
            categoriesContainer.innerHTML = '';
            const language = localStorage.getItem('languageselection');
            const visitText = visitTranslations[language].visittext;
            data.forEach((category, index) => {
                const categoryName = visitTranslations[language][category.CATEGORY] || category.CATEGORY;
                const categoryHTML = generateCategoryHTML(categoryName, index, category.CATEGORY, category);
                categoriesContainer.innerHTML += categoryHTML;      
 const visitHallButtons = document.getElementsByClassName('visitHallButton');
          for (let button of visitHallButtons) {
              button.style.display = 'flex';
          }
            });
        }
    });
async function sendnav(category){
// debugger
//     console.log(dynamicpoint)
//     sendbeaconapi(0, `${category}`, '');
//      trackinga(`${category}`,'category_page');
//    window.location.href =`${dynamicpoint}.html?category=${encrypt(category)}`

   await waitForDynamicPoint(); // Wait until dynamicpoint is defined
    console.log(dynamicpoint);
    
    if (dynamicpoint === undefined) {
        window.location.href = `prototype.html?category=${encrypt(category)}`;
    }else{
        window.location.href = `${dynamicpoint}.html?category=${encrypt(category)}`;
    }
   
    sendbeaconapi(0, `${category}`, '');
    trackinga(`${category}`, 'category_page');
}
async function sendnavdropdown(category, startpoint, endpoint, hallnum) {
    await waitForDynamicPoint(); // Wait until dynamicpoint is defined
    console.log(dynamicpoint);
    
    if (dynamicpoint === undefined) {
        window.location.href = `prototype.html?category=${encrypt(category)}&start=${startpoint}&end=${endpoint}&hallnum=${hallnum}`;
    }else{
        window.location.href = `${dynamicpoint}.html?category=${encrypt(category)}&start=${startpoint}&end=${endpoint}&hallnum=${hallnum}`;
    }
   
    sendbeaconapi(0, `${category}`, '');
    trackinga(`${category}`, 'category_page');
  
}

async function checkDynamicPoint() {
    return new Promise((resolve) => {
        let interval = setInterval(() => {
            if (typeof dynamicpoint !== 'undefined') {
                clearInterval(interval);
                resolve(dynamicpoint);
            }
        }, 1000); // Check every second
    });
}

async function waitForDynamicPoint() {
   // dynamicpoint = undefined; // Reset dynamicpoint
    await checkDynamicPoint();
    // Dynamic point is now defined, do something
    console.log("Dynamic point is now defined:", dynamicpoint);
    // Further actions here
}
