const datalanguage = {
    "english": 
    {
       "labelchat": "Chat",
       "labelexplore":"Explore",
       "labelexit":"Exit",
       "labelcategory":"Category",
       "fullscreenButton":"Enter Full Screen",
       "Exitfullscreen":"Exit Full Screen",
       "loadingtext":"Please wait while your virtual experience loads",
       "sharestalllink": "Share Stall Link",
       "stalllink": 
           "Stall Link",
        "copy":"Copy",
        "shareproductlink":"Share Product Link",
        "productlink":"Product Link",
        "visitproduct":"Visit Product",
        "shareproduct":"Share Product",
        "jointhewebinar":"Join the Webinar",
        "jointhesession":"Join the session",
        "URLcopiedtoclipboard":"URL copied to clipboard!",
        "Rotateyourmobile":"Rotate your mobile"
    },
   
    "hindi":
    {
        "labelchat": "चैट",
        "labelexplore":"एक्सप्लोर",
        "labelexit":"निकास",
        "labelcategory":"श्रेणी",
        "fullscreenButton":"पूर्ण स्क्रीन दर्ज करें",
        "Exitfullscreen":"पूर्ण स्क्रीन से बाहर निकलें",
        "loadingtext":"कृपया अपने आभासी अनुभव के लोड होने तक प्रतीक्षा करें!",
        "sharestalllink": "शेयर स्टाल लिंक",
        "stalllink": 
            "स्टाल लिंक",
         "copy":"प्रतिलिपि",
        "shareproductlink":"उत्पाद लिंक साझा करें",
       "productlink":"उत्पाद लिंक",
         "visitproduct":"उत्पाद पर जाएँ",
         "shareproduct":"शेयर उत्पाद",
         "jointhewebinar":"वेबिनार में शामिल हों",
         "jointhesession":"सत्र में शामिल हों",
         "URLcopiedtoclipboard":"URL क्लिपबोर्ड पर कॉपी किया गया!",
         "Rotateyourmobile":"अपने मोबाइल को घुमाएं"
     },
    
};

const language = localStorage.getItem('languageselection')

const chat = document.querySelector('.labelchat')
const explore = document.querySelector('.labelexplore')
const exit = document.querySelector('.labelexit')
const category = document.querySelector('.labelcategory')
const fullscreenButton = document.querySelector('#fullscreenButton')
const loadingtext = document.querySelector('.loading-text')
const copytext = document.getElementById('copyButton') 
const urlcopied = document.querySelector('#url-copied-alert-txt')
const visitButton = document.querySelector('.visitButton')
const shareproduct = document.querySelector('.shareButton')
const joinText = document.querySelector('.joinText')
const sessionText= document.querySelector('.sessionText')
const rotateyourmobile=document.querySelector('.rotateyourmobile')
const buttonText = fullscreenButton.textContent;
chat.textContent=datalanguage[language].labelchat
explore.textContent=datalanguage[language].labelexplore
exit.textContent=datalanguage[language].labelexit
category.textContent=datalanguage[language].labelcategory
loadingtext.textContent=datalanguage[language].loadingtext
copytext.textContent=datalanguage[language].copy
urlcopied.textContent = datalanguage[language].URLcopiedtoclipboard
visitButton.textContent = datalanguage[language].visitproduct
shareproduct.textContent= datalanguage[language].shareproduct
joinText.textContent=datalanguage[language].joinText
sessionText.textContent =datalanguage[language].jointhesession
rotateyourmobile.textContent=datalanguage[language].rotateyourmobile
if(buttonText=="Enter Full Screen"){
    fullscreenButton.textContent=datalanguage[language].fullscreenButton
}
// else{
//     fullscreenButton.textContent=data[language].Exitfullscreen
// }

