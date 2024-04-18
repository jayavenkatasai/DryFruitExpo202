var boardposition = document.getElementById('category-name-board')
var positioncord=boardposition.getAttribute('position')
var cameras = document.getElementById('player');
var camerastand = document.getElementById('rig');
var cameraPosition = cameras.getAttribute('position')

// Extract X, Y, and Z positions of the board and the camera
var boardX = parseFloat(positioncord.x);
var boardY = parseFloat(positioncord.y);
var boardZ = parseFloat(positioncord.z);
var boardrotationX = parseFloat(positioncord.x);
var boardrotationy = parseFloat(positioncord.y);
var boardrotationz = parseFloat(positioncord.z);
var cameraX = parseFloat(cameraPosition.x);
var cameraY = parseFloat(cameraPosition.y);
var cameraZ = parseFloat(cameraPosition.z);

// Adjust camera position relative to the board position
var adjustedX = boardX + 5; // Add X positions
var adjustedY = boardY + 2; // Add Y positions and add 1 for some additional height
var adjustedZ = boardZ - 15; // Add Z positions

let count=1;
boardposition.addEventListener('click',function(){
    
    if(count<=1){
        cameras.remove('look-controls')
        //camerastand.setAttribute('rotation', { x: 0, y: boardrotationy+90, z: 0 });
        cameras.setAttribute('position', { x: adjustedX, y: adjustedY, z: adjustedZ });
    // Rotate the camera over 90 degrees (assuming you want to rotate it around the Y axis)
    
    cameras.setAttribute('look-controls', 'magicWindowTrackingEnabled:false')
    count=count+1;
    }
})