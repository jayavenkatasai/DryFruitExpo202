
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
     },"telugu": {
        "visittext": "భేటీ హాల్",
        "categoryheading": "ప్రారంభించు",
        "categoryDescription": "స్థాయి ప్రకారం మీరు ఏమి కావాలనుకుంటున్నారు చూడండి",
        "Diagnostic Supplies, Products & Equipment": "డయాగ్నోస్టిక్ సరఫరాలు, ఉత్పాదాలు మరియు సాధనాలు",
        "Durable medical equipment": "దిగుమతి మెడికల్ ఉపకరణాలు",
        "Emergency Medical Supplies & Equipment": "అత్యావశ్యక మెడికల్ సరఫరాలు మరియు ఉపకరణాలు",
        "Home medical equipments/ supplies": "హోమ్ మెడికల్ ఉపకరణాలు/ సరఫరాలు",
        "Implantable Devices": "ఇంప్లాంటబుల్ పరికరాలు",
        "Medical Education Supplies": "మెడికల్ ఎజ్యుకేషన్ సరఫరాలు",
        "Medical Software": "మెడికల్ సాఫ్ట్‌వేర్",
        "Medical Uniforms, Scrubs & Apparel": "మెడికల్ యూనిఫార్మ్‌లు, స్క్రబ్స్ మరియు అపారెల్",
        "Medical/ surgical instruments": "మెడికల్/ సర్జికల్ ఉపకరణాలు",
        "Patient care": "పేషెంట్ సంరక్షణ",
        "Patient mobility aids": "పేషెంట్ మాబిలిటీ సహాయాలు",
        "Sterile Processing & Infection Control": "స్టెరైల్ ప్రాసెసింగ్ & ఇన్‌ఫెక్షన్ కంట్రోల్"
    }
,    "gujrathi": {
    "visittext": "હોલ મુલાકાત",
    "categoryheading": "શરૂ કરો",
    "categoryDescription": "શ્રેણી પ્રમાણે શોધો શું તમે શોધો છો",
    "Diagnostic Supplies, Products & Equipment": "નિદાનાત્મક સરનામાં, ઉત્પાદો અને સાધનો",
    "Durable medical equipment": "ટિકાઊ તબીબી સાધનો",
    "Emergency Medical Supplies & Equipment": "આત્મજીવન તબીબી સરનામાં અને સાધનો",
    "Home medical equipments/ supplies": "ઘરેલું તબીબી સાધનો/ સરનામાં",
    "Implantable Devices": "અંતર્ગત સાધનો",
    "Medical Education Supplies": "તબીબી શિક્ષણ સરનામાં",
    "Medical Software": "તબીબી સોફ્ટવેર",
    "Medical Uniforms, Scrubs & Apparel": "તબીબી યુનિફોર્મ્સ, સ્ક્રબ્સ અને અપારલ",
    "Medical/ surgical instruments": "તબીબી/ શસ્ત્રક્રિયાત્મક સાધનો",
    "Patient care": "રોગી સારવાર",
    "Patient mobility aids": "રોગી ચળવણી સહાયાં",
    "Sterile Processing & Infection Control": "સ્ટેરાઇલ પ્રક્રિયા અને સંક્રમણ નિયંત્રણ"
}
,
"marati": {
    "visittext": "हॉल भेट",
    "categoryheading": "सुरुवात करा",
    "categoryDescription": "आपल्या आवडत्या वस्तू श्रेणीनुसार शोधा",
    "Diagnostic Supplies, Products & Equipment": "आयुर्वेदिक आणि मेडिकल वस्तू",
    "Durable medical equipment": "दायरात व ठोस मेडिकल साधने",
    "Emergency Medical Supplies & Equipment": "आधारात्मक और आवश्यक आयुर्वेदिक सामग्री आणि उपकरणे",
    "Home medical equipments/ supplies": "घरातील मेडिकल उपकरणे/साहित्य",
    "Implantable Devices": "ईंप्लांटेबल उपकरणे",
    "Medical Education Supplies": "मेडिकल शिक्षणाची साहित्य",
    "Medical Software": "मेडिकल सॉफ्टवेअर",
    "Medical Uniforms, Scrubs & Apparel": "मेडिकल युनिफॉर्म, उभ्या कपड्यांची आणि अपारल",
    "Medical/ surgical instruments": "मेडिकल/ क्षत्रिय उपकरणे",
    "Patient care": "रुग्ण सेवा",
    "Patient mobility aids": "रुग्ण मोबिलिटी साहाय्या",
    "Sterile Processing & Infection Control": "स्टेराइल प्रक्रिया आणि संक्रमण नियंत्रण"
}
,
"bengali": {
    "visittext": "হল দেখুন",
    "categoryheading": "আরম্ভ করুন",
    "categoryDescription": "আপনি কী খুঁজছেন সেটা শ্রেণী অনুযায়ী খুঁজে নিন",
    "Diagnostic Supplies, Products & Equipment": "ডায়াগনস্টিক সাপ্লাইস, পণ্য এবং সরঞ্জাম",
    "Durable medical equipment": "টিকে থাকা চিকিৎসা সরঞ্জাম",
    "Emergency Medical Supplies & Equipment": "অত্যাবশ্যক চিকিৎসা সরঞ্জাম এবং সরঞ্জাম",
    "Home medical equipments/ supplies": "বাড়িতে চিকিৎসা সরঞ্জাম/ সামগ্রী",
    "Implantable Devices": "ইম্প্ল্যান্টেবল ডিভাইস",
    "Medical Education Supplies": "চিকিৎসা শিক্ষা সরঞ্জাম",
    "Medical Software": "চিকিৎসা সফটওয়্যার",
    "Medical Uniforms, Scrubs & Apparel": "চিকিৎসা ইউনিফর্ম, স্ক্রাব এবং আপারেল",
    "Medical/ surgical instruments": "চিকিৎসা/ অপারেশনাল উপকরণ",
    "Patient care": "রোগীর যত্ন",
    "Patient mobility aids": "রোগী চলার সাহায্য",
    "Sterile Processing & Infection Control": "স্টেরাইল প্রসেসিং এবং সংক্রামক নিয়ন্ত্রণ"
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
    if (internetspeed_kbps < 1000) {
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
