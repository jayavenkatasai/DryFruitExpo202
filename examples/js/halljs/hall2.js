//urlendpoint 
var urlendpoint = ' ';
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

var parser = new UAParser();
var result = parser.getResult();
var useragent =result.device.type
var os =result.os.name


document.getElementById('fullscreenButton').addEventListener('click', function() {
    toggleFullScreen();
  });

  
function toggleFullScreen() {
    var elem = document.documentElement;
    var fullscreenButton = document.getElementById('fullscreenButton');
  
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  
        // Enter fullscreen mode
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        fullscreenButton.textContent = 'Exit Full Screen';
    } else {
        // Exit fullscreen mode
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        fullscreenButton.textContent = 'Enter Full Screen';
    }
  }
  

  
  // Update button text based on full-screen state
  function updateButton() {
    var fullscreenButton = document.getElementById('fullscreenButton');
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        fullscreenButton.textContent = 'Exit Full Screen';
    } else {
        fullscreenButton.textContent = 'Enter Full Screen';
    }
  }
  
  // Event listeners for fullscreen change and visibility change
  document.addEventListener('fullscreenchange', updateButton);
  document.addEventListener('mozfullscreenchange', updateButton);
  document.addEventListener('webkitfullscreenchange', updateButton);
  document.addEventListener('MSFullscreenChange', updateButton);
  document.addEventListener('visibilitychange', updateButton);
// full screen and exit full screen code
//console.log(`The os is ${os}`)

if(os=="iOS"|| os=="Mac OS"){
    document.getElementById("fullscreenButton").style.display="none"
  //   console.log("os code executed")
  }

document.getElementById('chat-img').addEventListener('click',function(){
    //alert("trigger")
    var chatRoom = document.getElementById('chat-ui-room');
    if (chatRoom.style.display === "block") {
        // If visible, hide it
        chatRoom.style.display = "none";
    } else {
        // If not visible, show it
        var chaturl = `https://expo1.marketcentral.in/CHAT/visitorpannel.cfm?stallid=12&name=${localStorage.getItem('UserName')}&bname=${localStorage.getItem('UserName')}&name=${localStorage.getItem('UserName')}&uid=${localStorage.getItem('GUID')}`;
        tracking(0, 'visitor-chat-icon', ipAddress);
        chatRoom.style.display = "block";
        document.getElementById('chatui').setAttribute('src', chaturl);
   
    }
  

})


document.getElementById('mblchatplaceholder').addEventListener('click',function(){
    //alert("trigger")
    var chatRoom = document.getElementById('chat-ui-room');
    if (chatRoom.style.display === "block") {
        // If visible, hide it
        chatRoom.style.display = "none";
    } else {
        // If not visible, show it
        var chaturl = `https://expo1.marketcentral.in/CHAT/visitorpannel.cfm?stallid=12&name=${localStorage.getItem('UserName')}&bname=${localStorage.getItem('UserName')}&name=${localStorage.getItem('UserName')}&uid=${localStorage.getItem('GUID')}`;
        tracking(0, 'visitor-chat-icon', ipAddress);
        chatRoom.style.display = "block";
        document.getElementById('chatui').setAttribute('src', chaturl);
   
    }
  

})
// document.getElementById('visitorChatFullScreen').addEventListener('click',function(){
//     //alert("trigger")
   
//         var chaturl = `https://stage.marketcentral.in/expo/CHAT/visitorpannel.cfm?stallid=12&name=${localStorage.getItem('UserName')}&bname=${localStorage.getItem('UserName')}&name=${localStorage.getItem('UserName')}&uid=${localStorage.getItem('GUID')}`;
        
//         tracking(0, 'visitor-chat-icon', ipAddress);
//         window.open(chaturl, '_blank'); 
//         return false;
// })

function avtharassign(avthar){
// alert(`trigger:${avthar}`)

var headTemplate = document.getElementById('head-template').content;

var modelEntity = headTemplate.querySelector('#model-id');
modelEntity.setAttribute('gltf-model', `url(assets/3dmodels/${avthar}.glb)`);
//console.log(`trigger:success2`)
    // document.getElementById('model-id').setAttribute('gltf-model',``)
 
}
// Assuming you have a reference to the template content


// // Function to change the GLTF model dynamically
// function changeModel(modelURL) {
//     // Find the entity with the model ID
//     var modelEntity = headTemplate.querySelector('#model-id');
    
//     // Set the GLTF model attribute to the new URL
//     modelEntity.setAttribute('gltf-model', modelURL);
// }

// // Example usage: change the model to a different GLTF file
// changeModel('#new-boy-character');


// document.getElementById('nextbutton').addEventListener('click',function(){

//      var cam=document.getElementById('player')
    
//      cam.removeAttribute('look-controls')
//      cam.removeAttribute('position')
//      cam.setAttribute('posistion','-26.677 2 -11.412')
//      cam.setAttribute('userheight',4)
//      cam.setAttribute('rotation','0 90 0')
   
//      cam.setAttribute('look-controls', 'magicWindowTrackingEnabled:false')
 
//      //console.log(cam.getAttribute('position'))

// })
