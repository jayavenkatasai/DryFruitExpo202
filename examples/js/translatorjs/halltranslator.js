const datalanguage = {
    "english": 
    {
       "labelchat": "Chat",
       "labelexplore":"Explore",
       "labelexit":"Exit",
       "labelcategory":"Category",
       "fullscreenButton":"Enter Full Screen",
       "Exitfullscreen":"Exit Full Screen",
       "loadingtext":"Please wait while your virtual experience loads"
    },
   
    "hindi":
    {
        "labelchat": "चैट",
        "labelexplore":"एक्सप्लोर",
        "labelexit":"निकास",
        "labelcategory":"श्रेणी",
        "fullscreenButton":"पूर्ण स्क्रीन दर्ज करें",
        "Exitfullscreen":"पूर्ण स्क्रीन से बाहर निकलें",
        "loadingtext":"कृपया अपने आभासी अनुभव के लोड होने तक प्रतीक्षा करें!"
     },
    
};

const language = localStorage.getItem('languageselection')

const chat = document.querySelector('.labelchat')
const explore = document.querySelector('.labelexplore')
const exit = document.querySelector('.labelexit')
const category = document.querySelector('.labelcategory')
const fullscreenButton = document.querySelector('#fullscreenButton')
const loadingtext = document.querySelector('.loading-text')
const buttonText = fullscreenButton.textContent;
chat.textContent=datalanguage[language].labelchat
explore.textContent=datalanguage[language].labelexplore
exit.textContent=datalanguage[language].labelexit
category.textContent=datalanguage[language].labelcategory
loadingtext.textContent=datalanguage[language].loadingtext
if(buttonText=="Enter Full Screen"){
    fullscreenButton.textContent=datalanguage[language].fullscreenButton
}
// else{
//     fullscreenButton.textContent=data[language].Exitfullscreen
// }

