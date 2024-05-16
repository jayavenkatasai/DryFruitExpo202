
   
AFRAME.registerComponent('cursor-listener', {
    schema: {
        targetPage: { type: 'string' },
        uno: { type: 'string' },
        type: { type: 'string' },
        pdtname: { type: 'string' },
        websitename:{type: 'string'}

    },
    init: function () {
        var data = this.data;
        
        this.el.addEventListener('click', function () {
            console.log('Click event triggered!');
            console.log('Target page:', data.targetPage);
            window.open(data.targetPage, '_blank');
            console.log('Uno:', data.uno);
            console.log('Type:', data.type);
            console.log('pdtname:', data.pdtname);
            if(data.pdtname!=null){
              // trackExpo( data.uno, data.type,data.pdtname,ipAddress)
               tracking(data.uno, data.type,data.pdtname,data.websitename)
            }
            else{
              //  trackExpo( data.uno, data.type,"",ipAddress)
                tracking(data.uno, data.type,"",websitename)
            }
           
            // Redirect to the specified page
           
    //         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    //   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    //   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    //   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    //   })(window,document,'script','dataLayer','GTM-K7WV592');
    //   console.log("the tracking get intiated")  
        //    trackinga(data.type)
           

            // You can use data.uno and data.type as needed
        });
       
    }
});
        AFRAME.registerComponent('cursor-listener5', {
            schema: {
                targetPage: { type: 'string' }
            },
            init: function () {
                var data = this.data;

                this.el.addEventListener('click', function () {
                   
                    window.location.href = data.targetPage;
                    sendBeaconapilobby(0,"lobby-button","")
                });
            }
        });
        // document.addEventListener("wheel", function (e) {
        //     // Get camera entity
        //     var cam = document.getElementById("rig"); // Replace "rig" with the actual ID of your camera entity
        
        //     // Define the angle increment for navigation
        //     var angIncrement = 0.1; // You can adjust this value based on your scene
        
        //     // Update angle with rotation
        //     ang = e.deltaY < 0 ? ang + angIncrement : ang - angIncrement;
        
        //     // Calculate new position in the forward or backward direction based on the scroll direction
        //     var f = 5; // You can adjust this value based on your scene
        
        //     // Get the current rotation of the camera in radians
        //     var camRotationY = (cam.getAttribute('rotation')['y'] % 360) * (Math.PI / 180);
        //     if (camRotationY < 0) {
        //         camRotationY += 2 * Math.PI; // Ensure the angle is in the range [0, 2π)
        //     }
        
        //     // Calculate forward direction based on camera's rotation
        //     var forwardDirection = {
        //         x: -Math.sin(camRotationY),
        //         y: 0,
        //         z: -Math.cos(camRotationY)
        //     };
        
        //     // Adjust forward direction based on rig rotation
        //     var rigRotationY = (cam.getAttribute('rotation')['y'] % 360) * (Math.PI / 180);
        //     if (rigRotationY < 0) {
        //         rigRotationY += 2 * Math.PI; // Ensure the angle is in the range [0, 2π)
        //     }
        
        //     // Rotate the forward direction by the rig rotation
        //     var rotatedForwardDirection = {
        //         x: Math.cos(rigRotationY) * forwardDirection.x + Math.sin(rigRotationY) * forwardDirection.z,
        //         y: 0,
        //         z: -Math.sin(rigRotationY) * forwardDirection.x + Math.cos(rigRotationY) * forwardDirection.z
        //     };
        
        //     // Normalize the direction
        //     var norm = Math.sqrt(rotatedForwardDirection.x ** 2 + rotatedForwardDirection.z ** 2);
        //     rotatedForwardDirection.x /= norm;
        //     rotatedForwardDirection.z /= norm;
        
        //     // Update camera position in the forward or backward direction
        //     var direction = e.deltaY < 0 ? 1 : -1; // 1 for upward scroll (forward), -1 for downward scroll (backward)
        //     var newPosition = {
        //         x: cam.getAttribute("position")["x"] + (f / 15) * rotatedForwardDirection.x * direction,
        //         y: cam.getAttribute("position")["y"],
        //         z: cam.getAttribute("position")["z"] + (f / 15) * rotatedForwardDirection.z * direction
        //     };
        
        //     // Set the new position to the camera
        //     cam.setAttribute("position", newPosition);
        // });
        
        
      

AFRAME.registerComponent('cursor-listener-chat', {
    schema: {
        targetPage: { type: 'string' },
        uno: { type: 'string' },
        type: { type: 'string' },
        pdtname: { type: 'string' }
    },
    init: function () {
        var data = this.data;
        var iframe = document.getElementById('chatui2'); // Assuming the iframe ID is 'chatui'
        var container =document.getElementById('chat-ui-room2')
        this.el.addEventListener('click', function () {
            console.log('Click event triggered!');
            console.log('Target page:', data.targetPage);
         
           
            container.style.display='block'
            
            iframe.setAttribute('src', data.targetPage); // Set the src attribute of the iframe
            console.log('Uno:', data.uno);
            console.log('Type:', data.type);
            console.log('pdtname:', data.pdtname);
            if (data.pdtname != null) {
                tracking(data.uno, data.type, data.pdtname);
            } else {
                tracking(data.uno, data.type, "");
            }
        });
    }
});
