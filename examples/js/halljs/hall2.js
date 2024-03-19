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
    alert("trigger")
    var chaturl=`https://stage.marketcentral.in/expo/CHAT/visitorpannel.cfm?stallid=12&name=${localStorage.getItem('UserName')}&bname=${localStorage.getItem('UserName')}&name=${localStorage.getItem('UserName')}&uid=${localStorage.getItem('GUID')}`

    window.open(chaturl,'_blank')

})