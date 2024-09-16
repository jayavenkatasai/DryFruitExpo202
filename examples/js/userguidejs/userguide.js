const driver = window.driver.js.driver;
var parser = new UAParser();
var result = parser.getResult();
var useragent = result.device.type
var DesktopInstructions = [
    { element: '.tooltipone ', popover: { title: 'Category Map', description: 'Click here to view all the Categories in the Agri Expo', side: "left", align: 'start' , offset: { top: 5, left: 20 }}},
    { element: '.tooltiptwo '},
    { element: '.tooltipthree ', popover: { title: 'Lobby', description: 'Click here to go to the Lobby. Visit the Live Webinar or contact our Helpdesk for assistance', side: "left", align: 'start' , offset: { top: 5, left: 20 }}},
    { element: '#Help-icon ', popover: { title: 'Directions', description: 'Click here to get Directions on navigating the Agri Expo', side: "left", align: 'start' , offset: { top: 5, left: 20 }}},
    { element: '#chat-icon123 ', popover: { title: 'Chat', description: 'Reach out to exhibitors directly. Learn more about their products, ask questions, or even negotiate deals!', side: "left", align: 'start' , offset: { top: 5, left: 20 }}},
  ]
var MobileInstructions =[
    { element: '.mblhelpicondisplay ', popover: { title: 'Help', description: 'Click here to get Directions on navigating the Agri Expo', side: "left", align: 'start' , offset: { top: 5, left: 20 }}},
    { element: '.tooltipone ', popover: { title: 'Category Map', description: 'Click here to view all the Categories in the Agri Expo', side: "left", align: 'start' , offset: { top: 5, left: 20 }}},
    { element: '.tooltiptwo ', popover: { title: 'Expo Directory', description: 'Click here to explore the Halls and Stalls by Category', side: "left", align: 'start' , offset: { top: 5, left: 20 }}},
    { element: '.tooltipthree ', popover: { title: 'Lobby', description: 'Click here to go to the Lobby. Visit the Live Webinar or contact our Helpdesk for assistance', side: "left", align: 'start' , offset: { top: 5, left: 20 }}},
   // { element: '#chat-icon123 ', popover: { title: 'Chat', description: 'Here is the code example showing animated tour. Let\'s walk you through it.', side: "left", align: 'start' , offset: { top: 5, left: 20 }}},
    { element: '.mblchatDisplay ', popover: { title: 'Chat', description: 'Reach out to exhibitors directly. Learn more about their products, ask questions, or even negotiate deals!', side: "left", align: 'start' , offset: { top: 5, left: 20 }}},
    { element: '#joy ', popover: { title: 'Joystick', description: 'Hold and drag the Joystick to move forward, backward, left, or right.', side: "left", align: 'start' , offset: { top: 5, left: 20 }}},
  ]
var instructions;
if(useragent=='mobile'){
    instructions = MobileInstructions
}else{
    instructions = DesktopInstructions
}

const driverObj = driver({
    showProgress: true,
    //allowClose: false,
    steps: instructions,

    onNextClick: (element, step, options) => {
        console.log('Next button clicked');
        checkForCompletion(); // Check if tour is completed

    },
    onPrevClick: (element, step, options) => {
        console.log('Previous button clicked');
        driverObj.movePrevious()
    },
    onCloseClick: (element, step, options) => {
        handleTourClose();
    },
    // onDestroyStarted: (element, step, options) => {
    //     console.log('Tour is about to be destroyed');
    // },
    // onDestroyed: (element, step, options) => {
    //     console.log('Tour has been destroyed');
    // }
  });


  function handleTourComplete() {
    console.log('Tour completed!');
    driverObj.destroy(); 
    openInstruction()
    // Trigger other actions here
}

// Function to handle tour manual closure
function handleTourClose() {
    console.log('Tour manually closed!');
    driverObj.destroy();
    openInstruction()
    // Trigger other actions here
}

// Function to check if the tour is completed
function checkForCompletion() {
    if (!driverObj.hasNextStep()) {
        handleTourComplete();
    }
    driverObj.moveNext()
}

//console.log(driverObj)

//  driver.onNext()
//   driverObj.drive();


