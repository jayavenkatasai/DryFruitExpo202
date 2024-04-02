var usernamelocal=localStorage.getItem('UserName');
var guidd = localStorage.getItem('GUID')
AFRAME.registerComponent('distance-trigger', {
    init: function () {
      this.camera = document.getElementById('player');
      this.triggers = document.querySelectorAll('.trigger');
      this.distanceThreshold = 5; // Adjust as needed
      this.shownBoxes = new Set();
      this.triggeredBoxes = new Set();
      this.triggerEnterEvent = this.triggerEnterEvent.bind(this);
      this.triggerLeaveEvent = this.triggerLeaveEvent.bind(this);
    },
    update: function () {
      this.triggers.forEach(trigger => {
        trigger.addEventListener('triggerenter', this.triggerEnterEvent);
        trigger.addEventListener('triggerleave', this.triggerLeaveEvent);
      });
    },
    remove: function () {
      this.triggers.forEach(trigger => {
        trigger.removeEventListener('triggerenter', this.triggerEnterEvent);
        trigger.removeEventListener('triggerleave', this.triggerLeaveEvent);
      });
    },
    triggerEnterEvent: function (event) {
      const boxId = event.target.getAttribute('id');
      const textValue = event.target.querySelector('a-text').getAttribute('value');
      const message = 'Camera entered ' + boxId + '\nText value: ' + textValue;
      if (!this.shownBoxes.has(boxId)) {
       // alert('Camera entered ' + message);
        this.shownBoxes.add(boxId);
        this.triggeredBoxes.add(boxId);
        //this.createAText(boxId);
       // document.getElementById("iframe-url").setAttribute('src', `http://chatapp.mc.in/cfmchat.cfm?stallid=${textValue}&bname=${textValue}sai&name=${localStorage.getItem('name')}`)
      }
      const textElement = document.getElementById(`txt${boxId}`);
      textElement.setAttribute('visible', 'true');
      textElement.setAttribute('animation', 'property: opacity; from: 1; to: 0; dur: 1000; easing: linear; loop: true');
    },
    triggerLeaveEvent: function (event) {
      const boxId = event.target.getAttribute('id');
      const textElement = document.getElementById(`txt${boxId}`);
      textElement.setAttribute('visible', 'false');
      textElement.removeAttribute('animation');
    },
    createAText: function (boxId) {
      const box = document.getElementById(boxId);
      const text = document.createElement('a-text');
      text.setAttribute('id', `txt${boxId}`)
      text.setAttribute('position', '0 0 0');
      text.setAttribute('value', 'This is ' + boxId);
      text.setAttribute('color', 'black'); // Change text color if necessary
      text.setAttribute('scale', '2 2 2'); // Adjust text size if necessary
      text.setAttribute('visible', 'false');
      box.appendChild(text);
    },
    tick: function () {
      var cameraPosition = this.camera.object3D.position;
      var self = this;

      this.triggers.forEach((trigger) => {
        // Get updated position of the trigger
        var triggerPosition = trigger.object3D.position;
        //  //console.log("trigger position")
        //   //console.log(triggerPosition)
        var distance = self.distance3D(cameraPosition, triggerPosition);
        // //console.log("the distance is ")
        // //console.log(distance)
        var boxId = trigger.getAttribute('id');

        if (distance <= self.distanceThreshold && !self.shownBoxes.has(boxId)) {
          trigger.emit('triggerenter');
        } else if (distance > self.distanceThreshold && self.triggeredBoxes.has(boxId)) {
          trigger.emit('triggerleave');
          self.triggeredBoxes.delete(boxId);
        }
      });
    },
    distance3D: function (point1, point2) {
      var dx = point1.x - point2.x;
      var dy = point1.y - point2.y;
      var dz = point1.z - point2.z;
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
  });

  AFRAME.registerComponent('alert-on-approach', {
    init: function () {
      this.triggered = false;
      this.camera = document.getElementById('player');

      this.stall = this.el;
      var id = this.stall.getAttribute('id');
     

      var textValue = document.getElementById(id).querySelector('a-entity').querySelector('a-text').getAttribute('value');
   
      this.distanceThreshold = 15; // Adjust this threshold as needed

      this.checkDistance = this.checkDistance.bind(this);
      // var resetButton = document.getElementById('restartButton');
      // resetButton.addEventListener('click', () => {
      //   this.triggered = false;
      //   //console.log("triggerd")
      // });
      // resetButton.addEventListener('click', this.reset);

    },
    tick: function () {
      this.checkDistance();
    },
    checkDistance: function () {
      var cameraPosition = this.camera.getAttribute('position');
      var stallPosition = this.stall.getAttribute('position');
      var id = this.stall.getAttribute('id')
      var textValue = document.getElementById(id).querySelector('a-entity').querySelector('a-text').getAttribute('value');
      var numericPart = id.match(/\d+/)[0]
      var bname = document.getElementById(`bname${numericPart}`).getAttribute('value');
      var newelement = document.getElementById('bubbletxt1')
      var planeelement = document.getElementById('bubble1')
   //   console.log(bname)
      //  //console.log("stall position is")
      //  //console.log(stallPosition)
      //  //console.log("camera position is")
      //  //console.log(cameraPosition)
      var distance = this.camera.object3D.position.distanceTo(stallPosition);
      //  //console.log("the distance is")
      //  //console.log(distance)
      //  //console.log(distance < this.distanceThreshold)
      if (distance < this.distanceThreshold && !this.triggered) {
        // Perform your alert action here
        //planeelement.removeAttribute('visible')
      
     // planeelement.setAttribute('visible','true')
     // console.log("type-on is triggering")
     
        //    //console.log('Camera is near the stall');
        if(!isStallVisited(textValue)){
        //alert(`Camera is near the stall is ${id} and value is ${textValue} and bname is${bname}`);
        console.log(`Camera is near the stall is ${id} and value is ${textValue} and bname is${bname}`);
        document.getElementById("iframe-url").setAttribute('src', `https://stage.marketcentral.in/expo/CHAT/cfmchat.cfm?stallid=${textValue}&bname=${bname}testing&name=${usernamelocal}&uid=${guidd}`)
        console.log(`https://stage.marketcentral.in/expo/CHAT/cfmchat.cfm?stallid=${textValue}&bname=${bname}testing&name=${usernamelocal}&uid=${guidd}`)
        this.triggered = true;
        markStallVisited(textValue);
        }
      }else{
        
      }
    //   if (distance < this.distanceThreshold) {
    //     // Check if planeelement is not already visible
    //     if (!planeelement.getAttribute('visible')) {
    //         planeelement.setAttribute('visible', true);
    //     }
    //     // Initialize newelement with a typing animation
    //     newelement.setAttribute('type-on', {
    //         message: `Hai ${localStorage.getItem('UserName')} How can i Help you`,
    //         delay: 100
    //     });
    // } else {
    //     // If distance is beyond threshold, hide planeelement
    //     planeelement.setAttribute('visible', false);
    // }
    },
  
  });


  AFRAME.registerComponent('pulse-on-approach', {
    init: function () {
      // Store original scale and find the camera
      this.originalScale = this.el.getAttribute('scale');
      this.camera = document.getElementById('player');
      if (!this.camera) {
        console.error('Camera not found');
        return;
      }

      // Set up animation
      this.el.setAttribute('animation__pulse', {
        property: 'scale',
        dir: 'alternate',
        dur: 1000,
        easing: 'easeInOutQuad',
        to: {
          x: this.originalScale.x * 2.1,
          y: this.originalScale.y * 2.1,
          z: this.originalScale.z * 2.1
        },
        loop: true,
        enabled: false // Initially disabled
      });
    },
    tick: function () {
      if (!this.camera) return;

      // Get positions
      const cameraPosition = this.camera.object3D.position;
      //console.log('camera is')
      //console.log(cameraPosition)
      const elPosition = this.el.object3D.position;
      //console.log("popup-p is")
      //console.log(elPosition)
      // Calculate distance
      const distance = cameraPosition.distanceTo(elPosition);
      //console.log("distance is")
      //console.log(distance)
      // Toggle animation based on distance
      if (distance < 15) {
        var planeelement = document.getElementById('bubble1')
        //console.log(planeelement.getAttribute('visible'))
       
       
        this.el.setAttribute('animation__pulse', 'enabled', true);

      } else {
        this.el.setAttribute('animation__pulse', 'enabled', false);
      }
    }
  });


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

// new shiv
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
   /// console.log( this.activeElementId)
  },
  tick: function () {
    if (!this.camera) return;

    // Get positions
    const cameraPosition = this.camera.object3D.position;
    const elPosition = this.targetElement.object3D.position;

    // Calculate distance
    const distance = cameraPosition.distanceTo(elPosition);

    // Toggle visibility and apply 'type-on' component based on distance
    if (distance < 13) {
      this.targetElement.setAttribute('visible', true);
     
      if (!this.textElement.components['type-on']) {
        this.textElement.setAttribute('type-on', {
          message: `Hello ${localStorage.getItem('UserName')}, how are you?`,
          delay: 100
        });
      }
      this.activeElementId = this.targetElement.getAttribute('id');
      var numericPart = this.activeElementId.match(/\d+/)[0]
      var bname = document.getElementById(`bname${numericPart}`).getAttribute('value');
      var stallnum = document.getElementById(`txtval${numericPart}`).getAttribute('value');
      //console.log( this.activeElementId)
      document.getElementById( this.activeElementId).setAttribute('cursor-listener',`targetPage:https://stage.marketcentral.in/expo/CHAT/individualstall.cfm?stallid=${stallnum}&bname=${bname}&name=${usernamelocal}&uid=${guidd}`)
    } else {
      this.targetElement.setAttribute('visible', this.originalVisibility);
      if (this.textElement.components['type-on']) {
        this.textElement.removeAttribute('type-on');
      }
     // document.getElementById( this.activeElementId).removeAttribute('cursor-listener')
      
      this.activeElementId = null
    }
  }
});

