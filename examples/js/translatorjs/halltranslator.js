const data = {
    "english": 
    {
       "labelchat": "Chat",
       "labelexplore":"Explore",
       "labelexit":"Exit",
       "labelcategory":"Category",
       "fullscreenButton":"Enter Full Screen",
       "Exitfullscreen":"Exit Full Screen"
    },
   
    "hindi":
    {
        "labelchat": "चैट",
        "labelexplore":"एक्सप्लोर",
        "labelexit":"निकास",
        "labelcategory":"श्रेणी",
        "fullscreenButton":"पूर्ण स्क्रीन दर्ज करें",
        "Exitfullscreen":"पूर्ण स्क्रीन से बाहर निकलें"
     },
    
};

const language = localStorage.getItem('languageselection')

const chat = document.querySelector('.labelchat')
const explore = document.querySelector('.labelexplore')
const exit = document.querySelector('.labelexit')
const category = document.querySelector('.labelcategory')
const fullscreenButton = document.querySelector('#fullscreenButton')
const buttonText = fullscreenButton.textContent;
chat.textContent=data[language].labelchat
explore.textContent=data[language].labelexplore
exit.textContent=data[language].labelexit
category.textContent=data[language].labelcategory
if(buttonText=="Enter Full Screen"){
    fullscreenButton.textContent=data[language].fullscreenButton
}
// else{
//     fullscreenButton.textContent=data[language].Exitfullscreen
// }

