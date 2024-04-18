var usernamelocal=localStorage.getItem('UserName');
var guidd = localStorage.getItem('GUID')
  


// text animation word by word
AFRAME.registerComponent("type-on", {
  schema: {
    message: { type: "string", default: "" },
    delay: { type: "number", default: 50 }
  },
  init: function () {
    this.el.setAttribute("text", { value: "" });
    this.typeNextLetter();
  },
  typeNextLetter: function () {
    var message = this.data.message;
    var delay = this.data.delay;
    var currentIndex = this.el.getAttribute("text").value.length;

    if (currentIndex < message.length) {
      var currentText = this.el.getAttribute("text").value;
      var nextLetter = message[currentIndex];
      this.el.setAttribute("text", { value: currentText + nextLetter });
      setTimeout(
        this.typeNextLetter.bind(this),
        delay
      );
    }
  }
});
// optimizwd

AFRAME.registerComponent('activate-on-approach', {
  init: function () {
    // Store reference to the camera
    this.camera = document.getElementById('player');
    if (!this.camera) {
      console.error('Camera not found');
      return;
    }
    
    // Store reference to the target element and original visibility
    this.targetElement = this.el;
    this.activeElementId = null; // Initialize active element ID
    this.originalVisibility = this.el.getAttribute('visible');

    // Find the text element within the target element
    this.textElement = this.el.querySelector('a-text');
    if (!this.textElement) {
      console.error('Text element not found');
      return;
    }
    
    // Disable visibility and the 'type-on' component initially
    this.targetElement.setAttribute('visible', false);
    if (this.textElement.components['type-on']) {
      this.textElement.removeAttribute('type-on');
    }
    
    // Cache frequently accessed values
    this.cameraPosition = new THREE.Vector3();
    this.elPosition = new THREE.Vector3();
  },
  tick: function () {
    if (!this.camera) return;

    // Get positions (cached values)
    this.camera.object3D.getWorldPosition(this.cameraPosition);
    this.targetElement.object3D.getWorldPosition(this.elPosition);

    // Calculate distance
    const distance = this.cameraPosition.distanceTo(this.elPosition);

    // Toggle visibility and apply 'type-on' component based on distance
    if (distance < 14) {
      this.targetElement.setAttribute('visible', true);

      if (!this.textElement.components['type-on']) {
        this.textElement.setAttribute('type-on', {
          message: `Hello ${localStorage.getItem('UserName')}, how can i help you?`,
          delay: 100
        });
      }

      this.activeElementId = this.targetElement.getAttribute('id');
      var numericPart = this.activeElementId.match(/\d+/)[0];
      var bname = document.getElementById(`bname${numericPart}`).getAttribute('value');
      var stallnum = document.getElementById(`txtval${numericPart}`).getAttribute('value');

      if (!isStallVisited(stallnum)) {
        document.getElementById("iframe-url").setAttribute('src', `https://expo.marketcentral.in/CHAT/cfmchat.cfm?stallid=${stallnum}&bname=${bname}testing&name=${usernamelocal}&uid=${guidd}`);
        trackinga(`visitor passed through - ${stallnum}`,'hall')
        markStallVisited(stallnum);
      }

      // Set cursor listener attribute
      this.targetElement.setAttribute('cursor-listener-chat', `targetPage:https://expo.marketcentral.in/CHAT/individualstall.cfm?stallid=${stallnum}&bname=${bname}&name=${usernamelocal}&uid=${guidd}`);
    //   document.getElementById('indivdualChatFullScreen').addEventListener('click',function(){
    //     //alert("trigger")
       
    //         var chaturl = `https://stage.marketcentral.in/expo/CHAT/individualstall.cfm?stallid=${stallnum}&bname=${bname}&name=${usernamelocal}&uid=${guidd}`;
            
    //         tracking(0, 'visitor-chat-icon', ipAddress);
    //         window.open(chaturl, '_blank'); 
    
    // })
    } else {
      this.targetElement.setAttribute('visible', this.originalVisibility);
      if (this.textElement.components['type-on']) {
        this.textElement.removeAttribute('type-on');
      }
      this.activeElementId = null;
    }
  }
});

// new shiv
// AFRAME.registerComponent('activate-on-approach', {
//   init: function () {
    
    
//     // Store reference to the camera
//     this.camera = document.getElementById('player');
//     if (!this.camera) {
//       console.error('Camera not found');
//       return;
//     }
    
//     // Store reference to the target element and original visibility
//     this.targetElement = this.el;
//     this.activeElementId = null; // Initialize active element ID
//     this.originalVisibility = this.el.getAttribute('visible');

//     // Find the text element within the target element
//     this.textElement = this.el.querySelector('a-text');
//     if (!this.textElement) {
//       console.error('Text element not found');
//       return;
//     }
    
//     // Disable visibility and the 'type-on' component initially
//     this.targetElement.setAttribute('visible', false);
//     if (this.textElement.components['type-on']) {
//       this.textElement.removeAttribute('type-on');
//     }
//    /// console.log( this.activeElementId)
//   },
//   tick: function () {
//     if (!this.camera) return
//     this.triggered = false;
//     // Get positions
//     const cameraPosition = this.camera.object3D.position;
//     const elPosition = this.targetElement.object3D.position;

//     // Calculate distance
//     const distance = cameraPosition.distanceTo(elPosition);

//     // Toggle visibility and apply 'type-on' component based on distance
//     if (distance < 14) {
//       this.targetElement.setAttribute('visible', true);
     
//       if (!this.textElement.components['type-on']) {
//         this.textElement.setAttribute('type-on', {
//           message: `Hello ${localStorage.getItem('UserName')}, how are you?`,
//           delay: 100
//         });
//       }
//       this.activeElementId = this.targetElement.getAttribute('id');
//       var numericPart = this.activeElementId.match(/\d+/)[0]
//       var bname = document.getElementById(`bname${numericPart}`).getAttribute('value');
//       var stallnum = document.getElementById(`txtval${numericPart}`).getAttribute('value');

//         if(!isStallVisited(stallnum)){
//         //alert(`Camera is near the stall is ${id} and value is ${textValue} and bname is${bname}`);
//         // console.log(`Camera is near the stall is ${id} and value is ${stallnum} and bname is${bname}`);
//         document.getElementById("iframe-url").setAttribute('src', `https://stage.marketcentral.in/expo/CHAT/cfmchat.cfm?stallid=${stallnum}&bname=${bname}testing&name=${usernamelocal}&uid=${guidd}`)
//         console.log(`https://stage.marketcentral.in/expo/CHAT/cfmchat.cfm?stallid=${stallnum}&bname=${bname}testing&name=${usernamelocal}&uid=${guidd}`)
//         this.triggered = true;
//         markStallVisited(stallnum);
//         }
//       else{

//       }
//       //console.log( this.activeElementId)
//       document.getElementById( this.activeElementId).setAttribute('cursor-listener-chat',`targetPage:https://stage.marketcentral.in/expo/CHAT/individualstall.cfm?stallid=${stallnum}&bname=${bname}&name=${usernamelocal}&uid=${guidd}`)
//     } else {
//       this.targetElement.setAttribute('visible', this.originalVisibility);
//       if (this.textElement.components['type-on']) {
//         this.textElement.removeAttribute('type-on');
//       }
//      // document.getElementById( this.activeElementId).removeAttribute('cursor-listener')
      
//       this.activeElementId = null
//     }
//   }
// });


