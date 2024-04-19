
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
 
    nameInput.placeholder = data[language].nameplaceholder;
}

// Set initial language to English

let selectedLanguage = "english";

// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Check if the 'lan' parameter exists in the URL
if (urlParams.has('lan')) {
    // Get the value of the 'lan' parameter
    const languageParam = urlParams.get('lan');
    // If 'lan' parameter is 'hindi', set selectedLanguage to 'hindi', otherwise keep it 'english'
    selectedLanguage = languageParam === 'hindi' ? 'hindi' : 'english';
   if(selectedLanguage=='hindi'){
    document.querySelector('.inputone').removeAttribute('checked')
    document.querySelector('.inputtwo').setAttribute('checked','true')
   }else if(selectedLanguage=='english'){
    document.querySelector('.inputtwo').removeAttribute('checked')
    document.querySelector('.inputone').setAttribute('checked','true')
   }
}

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