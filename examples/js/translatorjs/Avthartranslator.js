
const welcomeIntro = document.querySelector('.welcomeIntro');
const welcomeHsptlText = document.querySelector('.welcomeHsptlText');
const enterExpoButton = document.querySelector('.enterExpoButton');
const Avthartext = document.querySelector('.Avthar-text');
const continuetext = document.querySelector('.continue-text');
const nameInput = document.getElementById('name-value');
const englishRadio = document.querySelector('input[value="english"]');
const hindiRadio = document.querySelector('input[value="hindi"]');



var data = {
    "english": 
    {
      "welcomeIntro": "Welcome to",
      "welcomeHsptlText": 
          "Hospital & Medical Supplies Expo",
       "enterExpoButton":"Continue",
       "Avthartext":"Choose Your Avatar",
       "continuetext":"Enter Expo",
       "nameplaceholder":"Please Enter Your Name"
    },
    "hindi": 
    {
      "welcomeIntro": "आपका स्वागत है",
      "welcomeHsptlText": 
          "अस्पताल एवं चिकित्सा आपूर्ति एक्सपो",
       "enterExpoButton":"जारी रखना",
       "Avthartext":"अपना अवतार चुनें",
       "continuetext":"एक्सपो दर्ज करें",
       "nameplaceholder":"कृपया अपना नाम दर्ज करें"
    }
  }

var languageavthar=localStorage.getItem('languageselection')
Avthartext.textContent = data[languageavthar].Avthartext;
continuetext.textContent = data[languageavthar].continuetext;