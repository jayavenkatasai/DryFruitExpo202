// async function notification(){
//     try{
//       //get api call
//       fetch(apiurl,{
//         method: 'GET'
//     }).then(response=>{
       
//         if (response.ok) {
//             const urlObject = new URL(apiurl);
//            // console.log(`before api change url :${apiurl}`);
    
//             return response.json();
//         }
//         else {
           
//            // console.log(`failed url is :${apiurl}`)
//             throw new Error(`Network response was not ok.and failed url is :${apiurl}`);
//         }
//     }).then(data => {
//         console.log(data)
//     })
//     }
//     catch{

//     }
// }
var userid = localStorage.getItem('GUID')
var apirulnotify = `https://www.marketcentral.in/rest/virtualExpo/general/getChatCount/${userid}`
async function notification() {
    try {
        const response = await fetch(apirulnotify);
        
        if (!response.ok) {
            throw new Error(`Network response was not ok. Failed URL: ${apiurl}`);
        }
        
        const data = await response.json();
        console.log(data);
        if (data.success && data.data.message > 0) {
            // alert("hey")
            document.querySelector('.chatSlide').style.display = 'block';
            document.getElementById('desktop-notification').style.display = "flex";
            document.getElementById('smallscreennot').style.display = 'flex';
            document.getElementById('desktop-notification').textContent = data.data.message;
            // alert("hey")
            document.getElementById('smallscreennot').textContent = data.data.message;
            document.querySelector('.slideText').style.display='block'
            // alert("hey")
            
            // alert("hey")
        
            // Hide the chat slide after 5 seconds (5000 milliseconds)
            setTimeout(function() {
                document.querySelector('.chatSlide').style.display = 'none';
            }, 5000); // Adjust the delay as needed
        } else {
            document.getElementById('desktop-notification').style.display = "none";
            document.getElementById('smallscreennot').style.display = 'none';
            document.querySelector('.chatSlide').style.display = 'none';
            document.querySelector('.slideText').style.display='none'
        }

    } catch (error) {
        console.error(error);
        // Handle errors here, such as showing an error message to the user or retrying the request.
    }
}
notification()
setInterval(notification,60000)
document.querySelector('.visitorChatClose').addEventListener('click',function(){
    notification()
})
// post data
// async function sendNotification(dataToSend) {
//     try {
//         const response = await fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json', // Specify the content type if sending JSON data
//                 // You may need to include other headers as needed
//             },
//             body: JSON.stringify(dataToSend), // Convert the data to JSON format
//         });
        
//         if (!response.ok) {
//             throw new Error(`Network response was not ok. Failed URL: ${apiUrl}`);
//         }
        
//         const responseData = await response.json();
//         console.log('Response:', responseData);
//     } catch (error) {
//         console.error('Error:', error);
//         // Handle errors here, such as showing an error message to the user or retrying the request.
//     }
// }
