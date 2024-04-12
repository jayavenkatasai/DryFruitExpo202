// AFRAME.registerComponent('alert-on-approach', {
  //   init: function () {
  //     this.triggered = false;
  //     this.camera = document.getElementById('player');

  //     this.stall = this.el;
  //     var id = this.stall.getAttribute('id');
     

  //     var textValue = document.getElementById(id).querySelector('a-entity').querySelector('a-text').getAttribute('value');
   
  //     this.distanceThreshold = 15; // Adjust this threshold as needed

  //     this.checkDistance = this.checkDistance.bind(this);
  //     // var resetButton = document.getElementById('restartButton');
  //     // resetButton.addEventListener('click', () => {
  //     //   this.triggered = false;
  //     //   //console.log("triggerd")
  //     // });
  //     // resetButton.addEventListener('click', this.reset);

  //   },
  //   tick: function () {
  //     this.checkDistance();
  //   },
  //   checkDistance: function () {
  //     var cameraPosition = this.camera.getAttribute('position');
  //     var stallPosition = this.stall.getAttribute('position');
  //     var id = this.stall.getAttribute('id')
  //     var textValue = document.getElementById(id).querySelector('a-entity').querySelector('a-text').getAttribute('value');
  //     var numericPart = id.match(/\d+/)[0]
  //     var bname = document.getElementById(`bname${numericPart}`).getAttribute('value');
  //     var newelement = document.getElementById('bubbletxt1')
  //     var planeelement = document.getElementById('bubble1')
  //  //   console.log(bname)
  //     //  //console.log("stall position is")
  //     //  //console.log(stallPosition)
  //     //  //console.log("camera position is")
  //     //  //console.log(cameraPosition)
  //     var distance = this.camera.object3D.position.distanceTo(stallPosition);
  //     //  //console.log("the distance is")
  //     //  //console.log(distance)
  //     //  //console.log(distance < this.distanceThreshold)
  //     if (distance < this.distanceThreshold && !this.triggered) {
  //       // Perform your alert action here
  //       //planeelement.removeAttribute('visible')
      
  //    // planeelement.setAttribute('visible','true')
  //    // console.log("type-on is triggering")
     
  //       //    //console.log('Camera is near the stall');
  //       if(!isStallVisited(textValue)){
  //       //alert(`Camera is near the stall is ${id} and value is ${textValue} and bname is${bname}`);
  //       console.log(`Camera is near the stall is ${id} and value is ${textValue} and bname is${bname}`);
  //       document.getElementById("iframe-url").setAttribute('src', `https://stage.marketcentral.in/expo/CHAT/cfmchat.cfm?stallid=${textValue}&bname=${bname}testing&name=${usernamelocal}&uid=${guidd}`)
  //       console.log(`https://stage.marketcentral.in/expo/CHAT/cfmchat.cfm?stallid=${textValue}&bname=${bname}testing&name=${usernamelocal}&uid=${guidd}`)
  //       this.triggered = true;
  //       markStallVisited(textValue);
  //       }
  //     }else{
        
  //     }
  //   //   if (distance < this.distanceThreshold) {
  //   //     // Check if planeelement is not already visible
  //   //     if (!planeelement.getAttribute('visible')) {
  //   //         planeelement.setAttribute('visible', true);
  //   //     }
  //   //     // Initialize newelement with a typing animation
  //   //     newelement.setAttribute('type-on', {
  //   //         message: `Hai ${localStorage.getItem('UserName')} How can i Help you`,
  //   //         delay: 100
  //   //     });
  //   // } else {
  //   //     // If distance is beyond threshold, hide planeelement
  //   //     planeelement.setAttribute('visible', false);
  //   // }
  //   },
  
  // });