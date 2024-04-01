var urlendpoint = '';
if (window.location.href.includes('digiexpodev.marketcentral')) {
    urlendpoint = 'https://stage.marketcentral.in';
}
// Check if the URL contains "www" or "expodev"
else if (window.location.href.includes('www') || window.location.href.includes('expodev')) {
    urlendpoint = 'https://www.marketcentral.in';
}
// Default to some other URL
else {
    urlendpoint = 'https://stage.marketcentral.in';
}
const url=`${urlendpoint}/rest/virtualExpo/general/insertTrackingDetails`

var parser = new UAParser();
var result = parser.getResult();

var browser=result.browser.name
function tracking(uno=0,track_type,pname=""){
    const requestBody = {
        "U_NO":uno,
        "track_type":track_type,
        "pname":pname,
        "Source":"Direct",
        "browser":browser,
        "ipaddress":ipAddress,
        "exhibition_ID":3
    }
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
            alert(error)
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
    "exhibition_ID":3
}
var data =  JSON.stringify(requestBodybeacon);
const result = navigator.sendBeacon(
   url,
    data
  );

  // Log the result of the sendBeacon call
  if (result) {
    console.log("Data successfully queued for sending.");
    window.location.href =`prototype.html?category=${encrypt(category.CATEGORY)}`
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
        "exhibition_ID":3
    }
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


    function sendBeaconapicategorylb (uno=0,track_type,pname="",links){
        const requestBodybeacon = {
            "U_NO":uno,
            "track_type":track_type,
            "pname":pname,
            "Source":"Direct",
            "browser":browser,
            "ipaddress":ipAddress,
            "exhibition_ID":3
        }
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