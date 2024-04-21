var apiurl='https://www.marketcentral.in/rest/virtualExpo/general/getWebinar/3'
function fetchapiforwebinar () {
fetch(apiurl,{
    method: 'GET'
}).then(response=>{
   
    if (response.ok) {
        const urlObject = new URL(apiurl);
       // console.log(`before api change url :${apiurl}`);

        return response.json();
    }
    else {
       
       // console.log(`failed url is :${apiurl}`)
        throw new Error(`Network response was not ok.and failed url is :${apiurl}`);
    }
}).then(data => {

    //console.log('Fetched-data123:', data);
    data.forEach(webinar => {
        checkWebinarStatus(webinar.WEBINAR_END_TIME, webinar.WEBINAR_END_TIME);
        document.querySelector('.speakerName').textContent=webinar.WEBINAR_SPEAKER
        document.querySelector('.cmpnyName').textContent=webinar.WEBINAR_CONDUCTED_BY
    });
}).catch(error => {
    //console.log(error)
})
}
// Function to check if the webinar is live
function checkWebinarStatus(webinarStartTime, webinarEndTime) {
    const currentDateTime = new Date();
    const webinarStartDateTime = new Date(webinarStartTime);
    const webinarEndDateTime = new Date(webinarEndTime);

    // Extract current date and time
    const currentDate = currentDateTime.getDate();
    const currentHour = currentDateTime.getHours()-12;

    // Extract webinar start and end date and time
    const webinarStartDate = webinarStartDateTime.getDate();
   // console.log(webinarStartDate)
    const webinarStartHour = webinarStartDateTime.getHours();
   // console.log(webinarStartHour)
   // console.log(`the webinarStartHour  is ${webinarStartHour}`)
    const webinarEndHour = webinarEndDateTime.getHours();
  //  console.log(webinarEndHour)
  //  console.log(`the webinarEndHour  is ${webinarEndHour}`)
//console.log(`the current hour is ${currentHour}`)
   
    // Check if current date matches webinar start date
    if (currentDate <= webinarStartDate) {
        // Check if current hour is between webinar start and end hours
        if (currentHour >= webinarStartHour && currentHour <= webinarEndHour) {
            // need to write the ui webinar popup 
            document.querySelector('.webinarPopUp').style.display='flex'
            console.log("Webinar is live.");
        } else {
            console.log("Webinar is not live...");
        }
    } else {
        console.log("Webinar is not live.");
    }
}
fetchapiforwebinar();
// checks the webinar status for every 5 minutes and updates ui
setInterval(fetchapiforwebinar,300000);