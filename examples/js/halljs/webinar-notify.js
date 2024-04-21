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
        //checkWebinarStatus(webinar.WEBINAR_END_TIME, webinar.WEBINAR_END_TIME);
        if(webinar.NOTIFY===true){
            if( document.querySelector('.webinarPopUp')){
              //  alert("pass")
                document.querySelector('.webinarPopUp').style.display='flex'
                
            }
            document.querySelector('.thumbnail_img').style.display='none'
            document.querySelector('.webinar_video_link').setAttribute('src',webinar.WEBINAR_LINK)
        }else{
           // alert("false")
            document.querySelector('.thumbnail_img').style.display='block'
            document.querySelector('.thumbnail_img').src=webinar.WEBINAR_LINK
        }
console.log(webinar)
    });
}).catch(error => {
    console.log(error)
})
}
fetchapiforwebinar();
// checks the webinar status for every 5 minutes and updates ui
setInterval(fetchapiforwebinar,300000);