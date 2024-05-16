
const welcomeback = document.querySelector('.welcomebackstart');
console.log(welcomeback.textContent)
const welcomeBackHsptlText = document.querySelector('.welcomeBackHsptlText');
console.log(welcomeBackHsptlText.textContent)
const continue_statement = document.querySelector('.continuestatement');
console.log(continue_statement.textContent)
const suppliestext = document.querySelector('.suppliestext');
console.log(suppliestext.textContent)

var data = {
    "english": 
    {
      "welcomeText": "Welcome Back",
      "welcomeBackHsptlText": 
          "Hospital and Medical",
       "continuestatement":"Continue to Expo",
       "suppliestext":"Supplies Expo"
    },
    "hindi": 
    {
        "welcomeText": "आपका स्वागत है",
        "welcomeBackHsptlText": 
            "अस्पताल एवं चिकित्सा",
         "continuestatement":"एक्सपो जारी रखें",
         "suppliestext":"आपूर्ति एक्सपो"
         
    },
    "marathi": 
{
    "welcomeText": "स्वागत आहे",
    "welcomeBackHsptlText": 
        "रुग्णालय आणि वैद्यकीय",
     "continuestatement":"एक्सपो सुरू ठेवा",
     "suppliestext":"आपूर्ती एक्सपो"
},
"gujrathi": 
{
    "welcomeText": "સ્વાગત છે",
    "welcomeBackHsptlText": 
        "હોસ્પિટલ અને તબીબી",
     "continuestatement":"એક્સપો ચાલુ રાખો",
     "suppliestext":"સરપ્લાયો એક્સપો"
},
"bengali": 
{
    "welcomeText": "স্বাগতম",
    "welcomeBackHsptlText": 
        "হাসপাতাল এবং চিকিৎসা",
     "continuestatement":"এক্সপো চালিয়ে যান",
     "suppliestext":"সরবরাহ এক্সপো"
},
"telugu": 
{
    "welcomeText": "స్వాగతం",
    "welcomeBackHsptlText": 
        "ఆసుపత్రి మరియు వైద్యశాల",
     "continuestatement":"ఎక్స్‌పో కొనసాగించు",
     "suppliestext":"సరఫరా ఎక్స్‌పో"
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
    welcomeback.textContent = data[language].welcomeText;
    welcomeBackHsptlText.textContent = data[language].welcomeBackHsptlText;
    continue_statement.textContent = data[language].continuestatement;
    suppliestext.textContent = data[language].suppliestext;
    // continuetext.textContent = data[language].continuetext;
    // nameInput.placeholder = data[language].nameplaceholder;
}

// Set initial language to English
let selectedLanguage = localStorage.getItem('languageselection');
updateUI(selectedLanguage);
