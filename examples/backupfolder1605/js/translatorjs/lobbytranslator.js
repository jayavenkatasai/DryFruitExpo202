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
         "HelpDesk":"Help Desk",
         "followus":"follow us",
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
         "HelpDesk":"सहायता केंद्र",
         "followus":"सोशल मीडिया पर हमें फॉलो करें",
         "Rotateyourmobile":"Rotate your mobile"
     },
    
};

const language = localStorage.getItem('languageselection')
const helpdesk = document.querySelector('.helpText')
const followus = document.querySelector('.followText')
const rotateyourmobile=document.querySelector('.rotateyourmobile')
const loadingtext = document.querySelector('.loading-text')
helpdesk.textContent=datalanguage[language].HelpDesk
followus.textContent=datalanguage[language].followus
rotateyourmobile.textContent=datalanguage[language].rotateyourmobile
loadingtext.textContent=datalanguage[language].loadingtext