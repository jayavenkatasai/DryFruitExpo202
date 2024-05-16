
var urlendpoint = '';
var guid = localStorage.getItem('GUID')
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
var apiname=localStorage.getItem('UserName')
var addvisitorurl = `${urlendpoint}/rest/virtualExpo/general/AddVisitors`;
        const requestBody = {
            exhibition_ID: 4,
            visitor_guid: guid,
            visitor_name: apiname,
            ipaddress: ipAddress
        };
        
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
                }
            })
            .catch(error => {
                console.error('There was a problem with the request:', error);
               // alert(error)
            });
            

           /* try {
                const response =  fetch(url, {
                    method: 'POST',
                    // headers: {
                    //     'Content-Type': 'application/json'
                    // },
                    body: JSON.stringify(data)
                });
                console.log(response);
                alert(response.ok);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
              //  window.location.replace("categorymapdynmic.html")
                // const responseData = await response.json();
                // console.log('Response:', responseData);
                
            } catch (error) {
                console.error('There was a problem with the request:', error);
                alert(error)
            }*/

            /*try {
                const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
                const success = navigator.sendBeacon(url, blob);
        
                if (!success) {
                    throw new Error('Beacon transmission failed');
                }else{
                    //window.location.href = 'categorymapdynmic.html';
                }
        
                
            } catch (error) {
                console.error('There was a problem with the request:', error);
                alert(error);
            }*/
        }

       
        document.addEventListener("DOMContentLoaded", function() {
            // Your code here
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
           
           // sendBeaconapilobby(0, "enter-HMS-expo", "")
            postData(addvisitorurl, requestBody)
            localStorage.setItem('passed','true')
           // window.location.href="categorymapdynmic.html"
        })
        });
        


