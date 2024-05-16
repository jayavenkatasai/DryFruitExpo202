
const welcomeIntro = document.querySelector('.welcomeIntro');
const welcomeHsptlText = document.querySelector('.welcomeHsptlText');
const enterExpoButton = document.querySelector('.enterExpoButton');
const Avthartext = document.querySelector('.Avthar-text');
const continuetext = document.querySelector('.continue-text');
const nameInput = document.getElementById('name-value');
const englishRadio = document.querySelector('input[value="english"]');
const hindiRadio = document.querySelector('input[value="hindi"]');
const avtharDescription = document.querySelector('.avtharDescription')


var data = {
    "english": 
    {
      "welcomeIntro": "Welcome to",
      "welcomeHsptlText": 
          "Hospital & Medical Supplies Expo",
       "enterExpoButton":"Continue",
       "Avthartext":"Choose your profile",
       "continuetext":"Enter Expo",
       "nameplaceholder":"Please Enter Your Name",
       "avtharDescription":"This is how you'll appear on the Expo."
    },
    "hindi": 
    {
      "welcomeIntro": "आपका स्वागत है",
      "welcomeHsptlText": 
          "अस्पताल एवं चिकित्सा आपूर्ति एक्सपो",
       "enterExpoButton":"जारी रखना",
       "Avthartext":"अपनी प्रोफ़ाइल चुनें",
       "continuetext":"एक्सपो का प्रवेश करो",
       "nameplaceholder":"कृपया अपना नाम दर्ज करें",
      "avtharDescription":"इस तरह आप एक्सपो में दिखाई देंगे।"
    }
  }

var languageavthar=localStorage.getItem('languageselection')
Avthartext.textContent = data[languageavthar].Avthartext;
continuetext.textContent = data[languageavthar].continuetext;
avtharDescription.textContent=data[languageavthar].avtharDescription