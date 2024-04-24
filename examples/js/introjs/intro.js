
// require('dotenv').config(); // Load environment variables from .env file

// const apiEndpoint = process.env.API_ENDPOINT ;
// alert(apiEndpoint)

// alert(urlendpoint)
// Now you can use baseUrl for API calls

function generateGUID() {
    // Generate random hexadecimal digits
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    
    // Concatenate random hexadecimal digits to form a GUID
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}


// 
var urlendpoint = '';

if (window.location.href.includes('digiexpodev.marketcentral')) {
    urlendpoint = 'https://www.marketcentral.in';
}
// Check if the URL contains "www" or "expodev"
else if (window.location.href.includes('www') || window.location.href.includes('expodev')) {
    urlendpoint = 'https://www.marketcentral.in';
}
else if(window.location.href.includes('localhost')){
    urlendpoint = 'https://www.marketcentral.in';
}
// Default to some other URL
else {
    urlendpoint = 'https://www.marketcentral.in';
}
// API CALLLLLLLL

       
// 
var guid;
guid = generateGUID();
// console.log(guid)
if(!localStorage.getItem('GUID')){
    localStorage.setItem('GUID',guid)
    localStorage.setItem('sessionActive', JSON.stringify({
        active: true,
        startTime: new Date().getTime()
    }));
}
guid=localStorage.getItem('GUID')
//console.log(guid);
var languageselectionitem=localStorage.getItem('languageselection')
//console.log(languageselectionitem)
// Example usage
if(localStorage.getItem('sessionActive')){
    const sessionData = JSON.parse(localStorage.getItem('sessionActive'));
    console.log("madee")
    // Check if session is active
    if (sessionData.active) {
        // Get current time
        const currentTime = new Date().getTime();
         
        // Calculate time difference in minutes
        const timeDifference = (currentTime - sessionData.startTime) / (1000 * 60);

        // Check if at least 5 minutes have passed since session started
        if (timeDifference >= 2) {
            // Redirect to welcomeback.html
            window.location.replace('welcomeback.html');
            console.log("triggerd")
        }
    }
}

// var apiname=localStorage.getItem('UserName')
// console.log(apiname)
var addvisitorurl = `${urlendpoint}/rest/virtualExpo/general/AddVisitors`;
       
      //  console.log(requestBody) 
        function postData(url, data) {
            
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data)
            })
            .then(response => {
                console.log(response);
                //alert(response.ok);
                if (!response.ok) {
                    //throw new Error('Network response was not ok');
                    // need to add to error log
                 
                    window.location.href="categorymapdynmic.html"
                }else{
                    window.location.href="categorymapdynmic.html"
                    console.log(requestBody) 
                }
            })
            .catch(error => {
                console.error('There was a problem with the request:', error);
               // alert(error)
            });
        }


// if (!localStorage.getItem('UserName')) {
document.getElementById("enterExpo-btn").addEventListener('click',function(){
    var names = document.getElementById("name-value").value;
    names=names.trim();
    //alert(names.length)
    if(/^[a-zA-Z\s]{3,}$/.test(names)){
        localStorage.setItem('UserName',names)
        sendbeaconapi(0,localStorage.getItem('languageselection'),'','')
        const requestBody = {
            exhibition_ID: 3,
            visitor_guid: guid,
            visitor_name: localStorage.getItem('UserName'),
            ipaddress: ipAddress
        };
        console.log(requestBody)
       // window.location.href='Avthar.html'; 
        postData(addvisitorurl, requestBody)  
    }
    else if (names.length > 16) {
        errorMessage.textContent = "Name should not exceed 16 characters";
        document.querySelector('.wrongText').style.display = 'block';
        if(languageselectionitem=="hindi"){
            document.querySelector('.wrongText').textContent = '* नाम 16 अक्षरों से अधिक नहीं होना चाहिए';
        }else{
            document.querySelector('.wrongText').textContent = '* Name should not exceed 16 characters';
        }
        
    }else{
        validateName(names) 
    }
})



 function validateName(names) {
    let nameInput = document.getElementById("name-value");
    let nameContainer = document.getElementById("name-container");
    let name = names
    let errorMessage = document.getElementById("error-message");
    let errorPopup = document.getElementById("error-popup");

    // Check if name is empty
 
    if (name.trim() === "") {
        nameInput.focus();
        nameInput.style.border = "2px solid red";
        errorMessage.textContent = "Please enter your name";
        document.querySelector('.wrongText').style.display='block'
        if(languageselectionitem=="hindi"){
            document.querySelector('.wrongText').textContent='* कृपया अपना नाम दर्ज करें'
        }
        else{
            document.querySelector('.wrongText').textContent='* Please enter your name'
        }
        
       // alert("Please enter your name");
       // showPopup();
        return;
    }
    else if (name.length < 3 || /[^a-zA-Z]/.test(name)) {
        // Check if name has less than three characters
        if (name.length < 3) {
            errorMessage.textContent = "Name should contain minimum 3 characters";
         
            document.querySelector('.wrongText').style.display='block'
            if(languageselectionitem=="hindi"){
                document.querySelector('.wrongText').textContent='* नाम में कम से कम 3 अक्षर होने चाहिए'
            }else{
                document.querySelector('.wrongText').textContent='* Name should contain minimum 3 characters'
            }
            
          //  alert("Name should contain minimum 3 characters");
          //  showPopup();
        }
        // Check if name contains special characters
        if (/[^a-zA-Z]/.test(name)) {
            errorMessage.textContent = "Name should not contain special characters and numbers";
            document.querySelector('.wrongText').style.display='block'
            if(languageselectionitem=="hindi"){
                document.querySelector('.wrongText').textContent='* नाम में विशेष वर्ण और संख्याएँ नहीं होनी चाहिए'
            }else{
                document.querySelector('.wrongText').textContent='* Name should not contain special characters and numbers'
            }
           
            
        //    alert("Name should not contain special characters and numbers");
           // showPopup();
        }

        nameInput.focus();
        nameInput.style.borderColor = "red";
        return;
    }

    // If name passes validation, reset border color
    nameContainer.style.borderColor = "black";
    //hidePopup();
}

function showPopup() {
    let errorPopup = document.getElementById("error-popup");
    let overlay = document.getElementById("overlay");
    errorPopup.style.display = "block";
    overlay.style.display = "block";
}

function hidePopup() {
    let errorPopup = document.getElementById("error-popup");
    let overlay = document.getElementById("overlay");
    errorPopup.style.display = "none";
    overlay.style.display = "none";
}
