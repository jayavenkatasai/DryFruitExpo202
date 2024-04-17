
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
       "enterExpoButton":"Enter Expo",
       "Avthartext":"Choose Your Avatar",
       "continuetext":"Continue",
       "nameplaceholder":"Please Enter Your Name"
    },
    "hindi": 
    {
      "welcomeIntro": "आपका स्वागत है",
      "welcomeHsptlText": 
          "अस्पताल एवं चिकित्सा आपूर्ति एक्सपो",
       "enterExpoButton":"एक्सपो दर्ज करें",
       "Avthartext":"अपना अवतार चुनें",
       "continuetext":"जारी रखना",
       "nameplaceholder":"कृपया अपना नाम दर्ज करें"
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
    Avthartext.textContent = data[language].Avthartext;
    continuetext.textContent = data[language].continuetext;
    nameInput.placeholder = data[language].nameplaceholder;
}

// Set initial language to English
let selectedLanguage = "english";
updateUI(selectedLanguage);

// Event listener for language change
function languageChangeHandler(event) {
    selectedLanguage = event.target.value;
    localStorage.setItem('languageselection',selectedLanguage)
    updateUI(selectedLanguage);
}

// Attach change event listener to radio buttons
englishRadio.addEventListener('change', languageChangeHandler);
hindiRadio.addEventListener('change', languageChangeHandler);
if(!localStorage.getItem('languageselection')){
    localStorage.setItem('languageselection',selectedLanguage)
}