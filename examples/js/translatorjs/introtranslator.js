
const welcomeIntro = document.querySelector('.welcomeText');
const welcomeHsptlText = document.querySelector('.welcomeDescription');
const enterExpoButton = document.querySelector('.enterExpoButton');
const Avthartext = document.querySelector('.Avthar-text');
const continuetext = document.querySelector('.continue-text');
const nameInput = document.getElementById('name-value');
const englishRadio = document.querySelector('input[value="english"]');
const hindiRadio = document.querySelector('input[value="hindi"]');
const chooseText = document.querySelector('.chooseText')
const TermsText = document.querySelector('.TermsText')
const termc =document.querySelector('.termc')
var data = {
    "english": 
    {
      "welcomeIntro": "Welcome to",
      "welcomeHsptlText": 
          "Agri products online Expo",
       "enterExpoButton":"Enter Expo",
       "Avthartext":"Choose Your Avatar",
       "continuetext":"Enter Expo",
       "nameplaceholder":"Please Enter Your Name",
       "chooseText":"Choose a language :",
       "TermsText":"By clicking on continue, you accept MarketCentral's",
       "termc":"Terms & Conditions"
    },
    "hindi": 
    {
      "welcomeIntro": "आपका स्वागत है",
      "welcomeHsptlText": 
          "अस्पताल एवं चिकित्सा आपूर्ति एक्सपो",
       "enterExpoButton":"एक्सपो में प्रवेश करें",
       "Avthartext":"अपना अवतार चुनें",
       "continuetext":"एक्सपो दर्ज करें",
       "nameplaceholder":"कृपया अपना नाम दर्ज करें",
       "chooseText":"एक भाषा चुनें :",
       "TermsText":"जारी रखें पर क्लिक करके, आप MarketCentral के नियम और शर्तों को स्वीकार करते हैं",
       "termc":"नियम और शर्तों को स्वीकार करते हैं"
    },
    "marati":{
        "welcomeIntro": "स्वागत आहे",
        "welcomeHsptlText": "अस्पताल आणि वैद्यकीय सामग्री एक्सपो",
        "enterExpoButton": "एंटर एक्सपो",
        "Avthartext": "तुमचं अवतार निवडा",
        "continuetext": "एक्सपोमध्ये प्रवेश करा",
        "nameplaceholder": "कृपया आपलं नाव प्रविष्ट करा",
        "chooseText": "भाषा निवडा:",
        "TermsText": "सुरू बटणावर क्लिक करून, आपण मार्केट सेंट्रलच्या",
        "termc": "अटी आणि अटींच्या शर्तींचे स्वीकार करत आहात"
    },
    "bengali":{
        "welcomeIntro": "স্বাগতম",
        "welcomeHsptlText": "হাসপাতাল এবং চিকিৎসা সরবরাহ এক্সপো",
        "enterExpoButton": "এন্টার এক্সপো",
        "Avthartext": "আপনার অবতার চয়ন করুন",
        "continuetext": "এক্সপোতে প্রবেশ করুন",
        "nameplaceholder": "আপনার নাম লিখুন",
        "chooseText": "ভাষা নির্বাচন করুন:",
        "TermsText": "চলতি বোতামে ক্লিক করে, আপনি মার্কেট সেন্ট্রালের",
        "termc": "শর্তাবলী এবং শর্তগুলি গ্রহণ করেছেন"
    },
    "gujrathi":
    {
        "welcomeIntro": "સ્વાગત છે",
        "welcomeHsptlText": "હોસ્પિટલ અને તબીબી સરનામું એક્સપો",
        "enterExpoButton": "એક્સપો પ્રવેશ કરો",
        "Avthartext": "તમારો આવતાર પસંદ કરો",
        "continuetext": "એક્સપોમાં પ્રવેશ કરો",
        "nameplaceholder": "કૃપા કરીને તમારું નામ દાખલ કરો",
        "chooseText": "ભાષા પસંદ કરો:",
        "TermsText": "ચાલુ કરવામાં ક્લિક કર્યા પછી, તમે માર્કેટ સેન્ટ્રલને સ્વીકારો",
        "termc": "શરતો અને શરતોને સ્વીકારો"
    },
    "telugu":{
        "welcomeIntro": "స్వాగతం",
        "welcomeHsptlText": "ఆసుపత్రి మరియు ఆరోగ్య సరఫరాల ఎక్స్‌పో",
        "enterExpoButton": "ఎంటర్ ఎక్స్‌పో",
        "Avthartext": "మీ అవతారాన్ని ఎంచుకోండి",
        "continuetext": "ఎక్స్‌పోలో ప్రవేశించండి",
        "nameplaceholder": "దయచేసి మీ పేరు నమోదు చేయండి",
        "chooseText": "భాషను ఎంచుకోండి:",
        "TermsText": "కన్టిన్యూ పై క్లిక్ చేస్తే, మీరు మార్కెట్ సెంట్రల్‌ను ఆమోదించుకున్నారు",
        "termc": "షరత్లు మరియు షరత్లను ఆమోదించండి"
    }
    
    
    
  }


// link.forEach(el => {
//     el.addEventListener('click', () => {
//         langEl.querySelector('.active').classList.remove('active');
//         el.classList.add('active');

        // const attr = "hindi"
        // welcomeIntro.textContent=data[attr].welcomeIntro
        // welcomeHsptlText.textContent=data[attr].welcomeHsptlText
        // enterExpoButton.textContent=data[attr].enterExpoButton
        // Avthartext.textContent=data[attr].Avthartext
        // continuetext.textContent=data[attr].continuetext
        // nameInput.placeholder = data[attr].nameplaceholder;
//     });
// });
function updateUI(language) {
    welcomeIntro.textContent = data[language].welcomeIntro;
    welcomeHsptlText.textContent = data[language].welcomeHsptlText;
    enterExpoButton.textContent = data[language].enterExpoButton;
    chooseText.textContent=data[language].chooseText;
   // nameInput.placeholder = data[language].nameplaceholder;
    TermsText.textContent=data[language].TermsText
    termc.textContent=data[language].termc
}

// Set initial language to English

let selectedLanguage = "english";

// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Check if the 'lan' parameter exists in the URL
if (urlParams.has('lan')) {
    // Get the value of the 'lan' parameter
    const languageParam = urlParams.get('lan').toLowerCase();
    // If 'lan' parameter is one of the supported languages, set selectedLanguage to that language
    if (['english', 'hindi', 'telugu', 'gujrathi', 'bengali', 'marathi'].includes(languageParam)) {
        selectedLanguage = languageParam;
        updateUI(selectedLanguage);
    }
}

updateUI(selectedLanguage);

// Event listener for language change
function languageChangeHandler(event) {
    selectedLanguage = event.target.value.toLowerCase();
    localStorage.setItem('languageselection', selectedLanguage);
    if (selectedLanguage === "hindi") {
        termc.href = 'hindit&c.html';
        // document.querySelector('.inputone').removeAttribute('checked');
        // document.querySelector('.inputtwo').setAttribute('checked', 'true');
    } else {
        termc.href = 'expot&c.html';
    }
    updateUI(selectedLanguage);
}

// Attach change event listener to language dropdown
const languageDropdown = document.querySelector('.languageDropdown select');
languageDropdown.addEventListener('change', languageChangeHandler);

// Set options in the dropdown
const languageOptions = ['english', 'hindi', 'telugu', 'gujrathi', 'bengali', 'marati'];
languageOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.textContent = option.charAt(0).toUpperCase() + option.slice(1);
    optionElement.value = option;
    if (option === selectedLanguage) {
        optionElement.selected = true;
    }
    languageDropdown.appendChild(optionElement);
});

// Initial language selection based on localStorage or default
if (localStorage.getItem('languageselection')) {
    selectedLanguage = localStorage.getItem('languageselection');
}

// Trigger change event to reflect initial language selection
languageDropdown.dispatchEvent(new Event('change'));

