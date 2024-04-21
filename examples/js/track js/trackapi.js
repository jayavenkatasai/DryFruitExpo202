let pagetitle = window.location.href
if(pagetitle.includes('lobby')){
pagetitle ='lobby'
}
else if(pagetitle.includes('prototype')){
  pagetitle ='prototype'
}
else if(pagetitle.includes('sharestall')){
  pagetitle ='sharestall'
}
else if(pagetitle.includes('index')){
  pagetitle ='index'

}else if(pagetitle.includes('category')){
  pagetitle ='category'
}
else{
  pagetitle=pagetitle
}
var urlendpoint = '';
if (window.location.href.includes('digiexpodev.marketcentral')) {
    urlendpoint = 'https://www.marketcentral.in';
}
// Check if the URL contains "www" or "expodev"
else if (window.location.href.includes('www') || window.location.href.includes('expodev')) {
    urlendpoint = 'https://www.marketcentral.in';
}
else if(window.location.href.includes('localhost')){
  urlendpoint = 'https://www..marketcentral.in';
}
// Default to some other URL
else {
    urlendpoint = 'https://www.marketcentral.in';
}
const url=`${urlendpoint}/rest/virtualExpo/general/insertTrackingDetails`

var parser = new UAParser();
var result = parser.getResult();
var guid = localStorage.getItem('GUID')
var browser=result.browser.name

async function trackinga(dataparameter,pagetitle){
  gtag("event", dataparameter, {
    'page_title':pagetitle
  });
  }
  // async function trackinga_website(dataparameter,pagetitle){
  //   gtag("event", dataparameter, {
  //     'page_title':pagetitle
  //   });
  //   }
function tracking(uno=0,track_type,pname="",websitename=""){
    const requestBody = {
        "U_NO":uno,
        "track_type":track_type,
        "pname":pname,
        "Source":"Direct",
        "browser":browser,
        "ipaddress":ipAddress,
        "exhibition_ID":3,
        "visitor_guid":guid
    }
    console.log(requestBody)
     trackinga(websitename,pagetitle)
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
           
          //  window.location.replace("categorymapdynmic.html")
            // const responseData = await response.json();
            // console.log('Response:', responseData);
            
        } catch (error) {
            console.error('There was a problem with the request:', error);
            //alert(error)
        }
    }
    postData(url, requestBody);
}

// Load another page

//send beacon api function for category selection
function sendbeaconapi (uno=0,track_type,pname=""){
const requestBodybeacon = {
    "U_NO":uno,
    "track_type":track_type,
    "pname":pname,
    "Source":"Direct",
    "browser":browser,
    "ipaddress":ipAddress,
    "exhibition_ID":3,
    "visitor_guid":guid
}
trackinga(track_type,pagetitle)
var data =  JSON.stringify(requestBodybeacon);
const result = navigator.sendBeacon(
   url,
    data
  );

  // Log the result of the sendBeacon call
  if (result) {
    console.log(data)
    console.log("Data successfully queued for sending.");
   // window.location.href =`prototype.html?category=${encrypt(category.CATEGORY)}`
  } else {
    console.log("Failed to queue data for sending.");
  }
}


function sendBeaconapilobby (uno=0,track_type,pname=""){
    const requestBodybeacon = {
        "U_NO":uno,
        "track_type":track_type,
        "pname":pname,
        "Source":"Direct",
        "browser":browser,
        "ipaddress":ipAddress,
        "exhibition_ID":3,
        "visitor_guid":guid
    }
    trackinga(track_type,pagetitle)
    var data =  JSON.stringify(requestBodybeacon);
    const result = navigator.sendBeacon(
       url,
        data
      );
    
      // Log the result of the sendBeacon call
      if (result) {
        console.log("Data successfully queued for sending.");
      } else {
        console.log("Failed to queue data for sending.");
      }
    }


    function sendBeaconapicategorylb (uno=0,track_type,pname="",links,pagetitle){
        const requestBodybeacon = 
        {
            "U_NO":uno,
            "track_type":track_type,
            "pname":pname,
            "Source":"Direct",
            "browser":browser,
            "ipaddress":ipAddress,
            "exhibition_ID":3,
            "visitor_guid":guid
        }
        trackinga(track_type,pagetitle)
        var data =  JSON.stringify(requestBodybeacon);
        const result = navigator.sendBeacon(
           url,
            data
          );
        
          // Log the result of the sendBeacon call
          if (result) {
            console.log("Data successfully queued for sending.");
            window.location.href = links; 
          } else {
            console.log("Failed to queue data for sending.");
          }
        }

        async function chattracking_ga(websiteName) {
          const eventLabel = websiteName + " chat";
          gtag("event", "chat_tracking", {
              'event_category': 'Chat',
              'event_label': eventLabel
          });
      }