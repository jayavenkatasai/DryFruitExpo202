
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
var guid;
guid = generateGUID();
// console.log(guid)
if(!localStorage.getItem('GUID')){
    localStorage.setItem('GUID',guid)
}
guid=localStorage.getItem('GUID')
console.log(guid);
// Example usage

if (!localStorage.getItem('UserName')) {
document.getElementById("enterExpo-btn").addEventListener('click',function(){
    var names = document.getElementById("name-value").value;
    names=names.trim();
    //alert(names.length)
    if(/^[a-zA-Z\s]{3,}$/.test(names)){
        localStorage.setItem('UserName',names)
      
        sessionStorage.setItem('anotherPageLoaded', true);
       
       // alert(guid);
       
        var apiname=localStorage.getItem('UserName')
        const url = `${urlendpoint}/rest/virtualExpo/general/AddVisitors`;
        const requestBody = {
            exhibition_ID: 3,
            visitor_guid: guid,
            visitor_name: apiname,
            ipaddress: ipAddress
        };
        
        async function postData(url, data) {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    // headers: {
                    //     'Content-Type': 'application/json'
                    // },
                    body: JSON.stringify(data)
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                document.querySelectorAll('.introText').forEach(function(element) {
                    element.style.display = "none";
                });
                
                document.querySelectorAll('.threeImages').forEach(function(element) {
                    element.style.display = "block";
                });
              //  window.location.replace("categorymapdynmic.html")
                // const responseData = await response.json();
                // console.log('Response:', responseData);
                
            } catch (error) {
                console.error('There was a problem with the request:', error);
                alert(error)
            }
        }
        
        postData(url, requestBody);
        // Load another page
       
      
        

    }else{
        alert("Name Should not contain special charcters and numbers")
    }
    // alert(names)
    // console.log(`the local storage name is${localStorage.getItem('UserName')}`)
})
}
else{
    window.location.replace("welcomeback.html")
}

// $('.images img').click(function(){
//     $('.continueExpoButton button').css("background","#F65927");
//     $('.images img').removeClass("mainImg");
//     $(this).addClass("mainImg")
//     // $(this).removeClass("active")
// })
// Select all elements with class 'images' and 'continueExpoButton'
document.querySelectorAll('.images').forEach(function(image) {
    image.addEventListener('click', function() {
        document.querySelector('.continueExpoButton button').style.background = "#F65927";
        document.querySelectorAll('.images').forEach(function(img) {
            img.classList.remove('mainImg');
        });
        this.classList.add('mainImg');
    });
});


document.querySelector('.continueExpoButton').addEventListener('click',function(){
    // trackExpo(0, "enter-expo-3", "", ipAddress)
    sendBeaconapilobby(0, "enter-HMS-expo", "")
    window.location.replace("categorymapdynmic.html")
})

function displayImageId(img) {

    // document.getElementById('displayId').textContent = img.id;
   localStorage.setItem('Avthar',img.id) 
 }
 localStorage.setItem('Avthar','avthar1')