//urlendpoint 

var urlendpoint = '';

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
const endpoint_ExhibitionId = '3';


// Get the query string from the current URL

 // calling apis on onload and unload

 const queryString = window.location.search;
let c;
 // Create a new URLSearchParams object from the query string
 const urlParams = new URLSearchParams(queryString);
 var startValue = urlParams.get('start');
 var endValue = urlParams.get('end');
 var hallnum = urlParams.get('hallnum');
 // Get the value of a specific parameter
 var categoryparam = decrypt(urlParams.get('category'));
 checkurlparm(categoryparam);
 if (categoryparam.includes('||')) {
    // Replace '||' with another string
    categoryparam = categoryparam.replace(/\|\|/g, '&');
  }
         

console.log(`the categoryparam is ${categoryparam}`)
 


if (!localStorage.getItem('UserName'))
{
 window.location.replace("index.html")
    }

 let b= 1;
//  categoryparam = categoryparam.replace(/\s/g, '');
var networkcategory = categoryparam.replace(/[,\s&:/]/g, '').substring(0, 12);
console.log(`the networked param is ${networkcategory}`)
 var parser = new UAParser();
 var result = parser.getResult();
 var useragent =result.device.type
 var os =result.os.name

function markStallVisited(stallId) {
    let visitedStalls = JSON.parse(localStorage.getItem('visitedStalls')) || [];
    visitedStalls.push(stallId);
    localStorage.setItem('visitedStalls', JSON.stringify(visitedStalls));
   }
   // Function to check if a stall has been visited
   function isStallVisited(stallId) {
    let visitedStalls = JSON.parse(localStorage.getItem('visitedStalls')) || [];
    return visitedStalls.includes(stallId);
   }
function share(uno,name){
    var currentURL1 = window.location.href;
    var baseURL = currentURL1.substr(0, currentURL1.lastIndexOf('/') + 1); // Extracts the base URL
    console.log(typeof uno)
    console.log(uno)
    var newURL = `${baseURL}sharestall.html?uno=${encryptWithCasePreservation(uno.toString())}&stallno=${name}`;

    console.log(newURL)
    var popupOverlay = document.getElementById('popup-overlay');
    var currentURLInput = document.getElementById('currentURL');
    document.getElementById('urlText').textContent = "Stall Link"
    document.querySelector('.inviteText').textContent = "Share Stall Link"
    currentURLInput.value = newURL;
    popupOverlay.style.display = 'flex';
    tracking(uno, "share-stall", "")
   // trackExpo(uno, "vendorshare", " ", ipAddress)
   // trackinga("sharestall")
}
// if(useragent=='mobile'){

    if(!localStorage.getItem('intiated')){
            localStorage.setItem('intiated','true')
            if(useragent=='mobile'){
                document.getElementById('instructionimg').setAttribute('src','assets/icons/mobilewalkthrough.png')
            }
            else{
                document.getElementById('instructionimg').setAttribute('src','assets/icons/desktopwalkthrough.png')
            }
          //  document.getElementById('instructionimg').setAttribute('src','assets/icons/Walkthrough1.png')
        document.getElementById('instruction-pannel').style.display='flex'
        document.getElementById('closeiconimgipp').addEventListener('click',function(){
            document.getElementById('instruction-pannel').style.display='none'
        })
    }else{
   document.getElementById('instruction-pannel').style.display='none'
    }
 
// }
// else{
//     document.getElementById('instruction-pannel').style.display='none'
// }

// function showPopup() {
//     // Get the current URL
//     var currentURL = window.location.href;

//     // Display the popup with the current URL
//     var popupOverlay = document.getElementById('popup-overlay');
//     var currentURLInput = document.getElementById('currentURL');
//     currentURLInput.value = currentURL;
//     popupOverlay.style.display = 'flex';
// }

function copyToClipboard() {
    // Get the current URL
    var currentURL = document.getElementById('currentURL').value;
    // Copy the URL to the clipboard
    navigator.clipboard.writeText(currentURL)
        .then(function () { 
            // alert('URL copied to clipboard!');
                document.getElementById('url-copied-alert-txt').style.display = 'block';
        })
        .catch(function (err) {
            console.error('Unable to copy to clipboard', err);
        });
}

function closePopup1() {
    // Close the popup
    var popupOverlay = document.getElementById('popup-overlay');
    document.getElementById('url-copied-alert-txt').style.display = 'none';
    popupOverlay.style.display = 'none';
}


// remove entities
function removeEntities(stalls) {
    stalls.forEach((stall, stallIndex) => {
    let numberOfImages = stall.products.length;
    const stallContainerId = `stall${stallIndex + 1}`;
    document.getElementById(`stall${stallIndex + 1}`).removeAttribute("instanced-mesh-member");
    document.getElementById(`stall-avatar${stallIndex + 1}`).removeAttribute("instanced-mesh-member");
    document.getElementById(`stall${stallIndex + 1}`).setAttribute("visible","false");
    document.getElementById(`stall-avatar${stallIndex + 1}`).setAttribute("visible","false");
    document.getElementById(`bubble${stallIndex + 1}`).removeAttribute('activate-on-approach')
    document.getElementById(`bubble${stallIndex + 1}`).setAttribute('visible','false')

    // document.getElementById(`vendorname${stallIndex + 1}`).setAttribute("visible","false");
    // document.getElementById(`stall${stallIndex + 1}`).setAttribute("visible","false");
    for (let imageIndex = 0; imageIndex < numberOfImages; imageIndex++) {
        let containerEntityId = `container${imageIndex + 1}_${stallContainerId}`;
        let parentElement = document.getElementById(stallContainerId);
        let entityToRemove = document.getElementById(containerEntityId);
        //document.getElementById(`popupcard${stallIndex + 1}`).setAttribute("visible", false);
        if (parentElement && entityToRemove) {
            // Remove the entity from the parent element
            parentElement.removeChild(entityToRemove);

    //         let popupCardElement = document.getElementById(`popup${stallIndex + 1}`);
    // if (popupCardElement) {
    //     popupCardElement.setAttribute("visible", false);
    // } else {
    //    // console.warn(`Popup card with ID '${popupCardId}' not found.`);
    // }
        } else {
            console.warn(`Entity with ID '${containerEntityId}' not found in parent with ID '${stallContainerId}'.`);
        }
    }
});
}
document.getElementById('fullscreenButton').addEventListener('click', function() {
    toggleFullScreen();
  });
// Function to fetch data from the API and update the scene
let requestBody={
    exhibition_ID:'3',
    start:'1',
    end:'10',
    category:"0",
    businesscategorylevel1:categoryparam,
    uno:'0'
}
// category map body!!
if(startValue){
    c=hallnum;
    console.log(`The value of c is ${c}`)
    requestBody.start=startValue;
    requestBody.end=endValue;
}

console.log(requestBody)
let apivariable;
const fetchDataFromAPI = () => {
    let apiurl = `${urlendpoint}/rest/virtualExpo/general/virtualExhibitionDetails`;
    fetch(apiurl,
        {
            method: 'POST',
            body: JSON.stringify(requestBody)
        }

    )
        .then(response => {

            if (response.ok) {
                const urlObject = new URL(apiurl);
                console.log(`before api change url :${apiurl}`);

                return response.json();
            }
            else {
               
                console.log(`failed url is :${apiurl}`)
                throw new Error(`Network response was not ok.and failed url is :${apiurl}`);
            }
        })

        .then(data => {

            console.log('Fetched-data123:', data);

            if (data.data) {
                console.log(data.data.message);
               if(data.data.message==='No records found'){
                // document.getElementById('overLaySection').style.display="flex";
                // document.getElementById('player').removeAttribute('wasd-controls')
                   // document.getElementById("scene1").removeAttribute('joystick');
                    window.location.replace("categorymapdynmic.html")
               }
                //need to do navigation stop and popup showing no vendors available
             
            } else {
                apivariable = data;
                console.log(apivariable)
                 // banners logic
                 if(c){
                    console.log("we have the c as switch case")
                    console.log(c)
                    c = parseInt(c);
                switch (c) {
                    case 1:
                    var bannerElements = document.getElementById("ban");
                  bannerElements.setAttribute('gltf-model','assets/banners/banner1.glb')
                    break;
                    case 2:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner2.glb')
                    break;
                    case 3:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner3.glb')
                    break;
                    case 4:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner4.glb')
                    break;
                    case 5:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner5.glb')
                    break;
                    case 6:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner6.glb')
                    break;
                    case 7:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner7.glb')
                    break;
                    case 8:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner8.glb')
                    break;
                    case 9:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner9.glb')
                    break;
                    case 10:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner10.glb')
                    break;
                }
                console.log("The switch case is exceuted succesfully")
                }
                else{
                    console.log("switch case odd is behaving")
                    switch (b) {
                    case 1:
                       // alert("success1")
                    //var bannerElements = document.getElementsByClassName("banner1");
                    var bannerElements = document.getElementById("ban");
                     bannerElements.setAttribute('gltf-model','assets/banners/banner1.glb')   
                    break;
                    case 2:
                        // alert("success2")
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner2.glb') 
                    break;
                    case 3:
                       // alert("success3")
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner3.glb') 
                    break;
                    case 4:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner4.glb') 
                    break;
                    case 5:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner5.glb') 
                    break;
                    case 6:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner6.glb') 
                    break;
                    case 7:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner7.glb') 
                    break;
                    case 8:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner8.glb') 
                    break;
                    case 9:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner9.glb') 
                    break;
                    case 10:
                        var bannerElements = document.getElementById("ban");
                        bannerElements.setAttribute('gltf-model','assets/banners/banner10.glb') 
                    break;
                }
                     checkhallfive(apivariable.stalls.length);
                }
                // banners logic end 
                data.stalls.forEach((stall, stallIndex) => {
                        const stallContainerId = `stall${stallIndex + 1}`;  
                        document.getElementById(`txtval${stallIndex + 1}`).setAttribute('value',stall.uno)

                        document.getElementById(`stall${stallIndex + 1}`).setAttribute("visible","true");
                        document.getElementById(`stall${stallIndex + 1}`).setAttribute("instanced-mesh-member","mesh:#mesh1");
                        document.getElementById(`stall-avatar${stallIndex + 1}`).setAttribute("visible","true");
                        document.getElementById(`stall-avatar${stallIndex + 1}`).setAttribute("instanced-mesh-member","mesh:#mesh2");
                   
                        document.getElementById(`bubble${stallIndex + 1}`).setAttribute('activate-on-approach', 'true')
                        document.getElementById(`bname${stallIndex + 1}`).setAttribute('value',stall.vendorInfo.companyname)
                       // document.getElementById(`pp${stallIndex + 1}`).setAttribute(`targetPage:${`https://stage.marketcentral.in/expo/CHAT/individualstall.cfm?stallid=${stall.uno}&bname=${stall.vendorInfo.companyname}testing&name=${localStorage.getItem('UserName')}&uid=${localStorage.getItem('GUID')}`}`)
                        // document.getElementById(`pp${stallIndex + 1}`).setAttribute("cursor-listener", `targetPage:https://stage.marketcentral.in/expo/CHAT/individualstall.cfm?stallid=${stall.uno}&bname=${stall.vendorInfo.companyname}testing&name=${localStorage.getItem('UserName')}&uid=${localStorage.getItem('GUID')}`);
                        if(stall.websiteLink){
                        document.getElementById(`website${stallIndex + 1}`).setAttribute("cursor-listener",`targetPage:${stall.websiteLink};uno:${stall.uno};type:websitevisit;websitename:${stall.vendorInfo.companyname}`)
                        }
                        if(stall.vendorInfo.email){
                            document.getElementById(`email${stallIndex + 1}`).setAttribute("cursor-listener",`targetPage:mailto:${stall.vendorInfo.email};uno:${stall.uno};type:email`)
                            }
                            if (stall.broucherlinkAvailable=="yes") {
                                document.getElementById(`broucher${stallIndex + 1}`).setAttribute("cursor-listener",`targetPage:${stall.broucherlink}`)
                        }
                        else{
                            document.getElementById(`broucher${stallIndex + 1}`).addEventListener('click',function(){
                                document.getElementById(`broucherinfo${stallIndex + 1}`).setAttribute('visible','true')
                            })
                            document.getElementById(`broucher${stallIndex + 1}`).addEventListener('mouseleave',function(){
                                document.getElementById(`broucherinfo${stallIndex + 1}`).setAttribute('visible','false')
                            })
                           
                        }
                        if (stall.businesscard) {
                            document.getElementById(`businesscard${stallIndex + 1}`).setAttribute("cursor-listener",`targetPage:${stall.businesscard};uno:${stall.uno};type:businesscard`)
                    }
                    if(stall.vendorInfo.contactNumber){
                        document.getElementById(`phone${stallIndex + 1}`).setAttribute("cursor-listener",`targetPage:tel:91+${stall.vendorInfo.contactNumber};uno:${stall.uno};type:conatctnumber`)
                    }

                         //document.getElementById(`stall${stallIndex + 1}`).setAttribute("visible", "true");
                document.getElementById(`vendorname${stallIndex + 1}`).setAttribute("value", stall.vendorInfo.vendorName);
              //  document.getElementById(`vendorname${stallIndex + 1}`).setAttribute("visible", "true");
                document.getElementById(`vendorphoneno${stallIndex + 1}`).setAttribute("value", stall.vendorInfo.contactNumber);
                document.getElementById(`vendorimage${stallIndex + 1}`).setAttribute("src", stall.vendorInfo.vendorimage);
                document.getElementById(`vendorbusinessname${stallIndex + 1}`).setAttribute("value", stall.vendorInfo.companyname);
                document.getElementById(`vendorlogo${stallIndex + 1}`).setAttribute("src", stall.logo);
                document.getElementById(`vendorlogo2${stallIndex + 1}`).setAttribute("src", stall.logo);
                document.getElementById(`stallno${stallIndex + 1}`).setAttribute("value", stall.name);
                document.getElementById(`board-name`).setAttribute('value',categoryparam)
                document.getElementById(`sharebutton${stallIndex + 1}`).addEventListener('click',function(){
                    share(stall.uno,stall.name)
                });
                if(apivariable.Hallcount.nextHall=="yes"){
                    document.getElementById("next-hall").setAttribute('visible','true')
                    //   document.getElementById("next-hall1").setAttribute('visible','true')
                    //     document.getElementById("next-hall2").setAttribute('visible','true')
                }
                else{
                    document.getElementById("next-hall").setAttribute('visible','false')
                    //  document.getElementById("next-hall1").setAttribute('visible','false')
                    //     document.getElementById("next-hall2").setAttribute('visible','false')
                }
                if(apivariable.Hallcount.PrevHall=="yes"){
                    document.getElementById("prev-hall").setAttribute('visible','true')
                    //   document.getElementById("next-hall1").setAttribute('visible','true')
                    //     document.getElementById("next-hall2").setAttribute('visible','true')
                }
                else{
                    document.getElementById("prev-hall").setAttribute('visible','false')
                    //  document.getElementById("next-hall1").setAttribute('visible','false')
                    //     document.getElementById("next-hall2").setAttribute('visible','false')
                }
                if(apivariable.Hallcount.nextHall=="yes"){
                    document.getElementById("next-hall").setAttribute('visible','true')
                    //   document.getElementById("next-hall1").setAttribute('visible','true')
                    //     document.getElementById("next-hall2").setAttribute('visible','true')
                }
                else{
                    document.getElementById("next-hall").setAttribute('visible','false')
                    //  document.getElementById("next-hall1").setAttribute('visible','false')
                    //     document.getElementById("next-hall2").setAttribute('visible','false')
                }
              


                       // console.log(`https://stage.marketcentral.in/expo/CHAT/individualstall.cfm?stallid=${stall.uno}&bname=${stall.vendorInfo.companyname}testing&name=${localStorage.getItem('UserName')}&uid=${localStorage.getItem('GUID')}`)

//                     document.getElementById(`stall${stallIndex + 1}`).setAttribute("visible", "true");
//                     document.getElementById(`vendorname${stallIndex + 1}`).setAttribute("value", stall.vendorInfo.vendorName);
//                     document.getElementById(`vendorname${stallIndex + 1}`).setAttribute("visible", "true");
//                     document.getElementById(`vendorBusinessname${stallIndex + 1}`).setAttribute("value", stall.vendorInfo.contactNumber);
//                     document.getElementById(`vendorimage${stallIndex + 1}`).setAttribute("src", stall.vendorInfo.vendorimage);
//                     document.getElementById(`businessname${stallIndex + 1}`).setAttribute("value", stall.vendorInfo.companyname);
//                     document.getElementById(`stall${stallIndex + 1}logo1`).setAttribute("src", stall.logo);
//                     document.getElementById(`stallvalue${stallIndex + 1}`).setAttribute("value", stall.name);
//                     document.getElementById(`website${stallIndex + 1}`).setAttribute("cursor-listener",
//                         `targetPage:${stall.websiteLink};uno:${stall.uno};type:websitevisit`);
//                     if (document.getElementById(`broucher-dum1${stallIndex + 1}`)) {
//                         document.getElementById(`broucher-dum1${stallIndex + 1}`).remove()
//                     }
//                     if (document.getElementById(`call-dum1${stallIndex + 1}`)) {
//                         document.getElementById(`call-dum1${stallIndex + 1}`).remove()
//                     }
//                     if (document.getElementById(`mail-dum1${stallIndex + 1}`)) {
//                         document.getElementById(`mail-dum1${stallIndex + 1}`).remove()
//                     }
//                     if (document.getElementById(`business-dum1${stallIndex + 1}`)) {
//                         document.getElementById(`business-dum1${stallIndex + 1}`).remove()
//                     }
//                     if (document.getElementById(`brc-dum1${stallIndex + 1}`)) {
//                         document.getElementById(`brc-dum1${stallIndex + 1}`).remove()
//                     }
//                     document.getElementById(`business${stallIndex + 1}`).setAttribute("cursor-listener",
//                         `targetPage:${stall.businesscard};uno:${stall.uno};type:businesscard`)
//                     document.getElementById(`mail${stallIndex + 1}`).setAttribute("cursor-listener", `targetPage:mailto:${stall.vendorInfo.email};uno:${stall.uno};type:vendoremail`);
//                     document.getElementById(`phone${stallIndex + 1}`).setAttribute("cursor-listener", `targetPage:tel:+91${stall.vendorInfo.contactNumber};uno:${stall.uno};type:vendorcontact`);
//                     if (stall.broucherlinkAvailable == "yes") {
//                         let dumimAage = document.getElementById(`broucher-dum${stallIndex + 1}`)
//                         if (dumimAage) {
//                             dumimAage.remove();
//                         }
//                         document.getElementById(`broucher${stallIndex + 1}`).setAttribute("cursor-listener",
//                             `targetPage:${stall.broucherlink};uno:${stall.uno};type:vendorbroucher`)
//                         document.getElementById(`brouchertext${stallIndex + 1}`).setAttribute("value", "Broucher")
//                     } else {

//                         const containerEntityb = document.createElement("a-entity");
//                         containerEntityb.setAttribute("position", "5.39 0.6 10.64");
//                         containerEntityb.setAttribute("rotation", "0 90 0");

//                         containerEntityb.setAttribute("id", `broucher-dum${stallIndex + 1}`);
//                         const planedummy = document.createElement("a-circle");
// planedummy.setAttribute("position", "0 0 0");
//                         planedummy.setAttribute("visible", "false");
//                         planedummy.setAttribute("radius", "0.15");
//                         planedummy.setAttribute("color", "red");
//                         planedummy.setAttribute("height", "5");
//                         planedummy.setAttribute("width", "5");
// document.getElementById(stallContainerId).appendChild(containerEntityb)
//                         containerEntityb.appendChild(planedummy)
//                         planedummy.addEventListener("mouseenter", function () { document.getElementById(`broucherinfo${stallIndex + 1}`).setAttribute("visible", "true") });
//                         planedummy.addEventListener("mouseleave", function () { document.getElementById(`broucherinfo${stallIndex + 1}`).setAttribute("visible", "false") });
//                         document.getElementById(`broucher${stallIndex + 1}`).removeAttribute("cursor-listener");
//                         document.getElementById(`brouchertext${stallIndex + 1}`).setAttribute("value", "No Broucher")
//                         document.getElementById(`broucherinfo${stallIndex + 1}`).addEventListener("click", function () {
//                             document.getElementById(`broucherinfo${stallIndex + 1}`).setAttribute("visible", "true")
//                         })

//                     };
//                     /// -----Here for copy code popup
//                     document.getElementById(`chatstall${stallIndex + 1}`).setAttribute('cursor-listener', `targetPage:Chat/cfmchat.cfm?stallid=${stall.uno}&bname=${stall.vendorInfo.vendorName}`);
//                     document.getElementById(`sharestall${stallIndex + 1}`).addEventListener('click',
//                         function showPopup() {
//                             var currentURL1 = window.location.href;
//                             var baseURL = currentURL1.substr(0, currentURL1.lastIndexOf('/') + 1); // Extracts the base URL
//                             var newURL = `${baseURL}sharestall.html?uno=${stall.uno}&stallno=${stall.name}`;
//                             var popupOverlay = document.getElementById('popup-overlay');
//                             var currentURLInput = document.getElementById('currentURL');
//                             document.getElementById('urlText').textContent = "Stall Link"
//                             currentURLInput.value = newURL;
//                             popupOverlay.style.display = 'flex';
//                             trackExpo(stall.uno, "vendorshare", " ", ipAddress)
//                             trackinga("sharestall")
//                         }

//                     );



                    //numberOfImages2 = data.stalls.length;
                   
                    /// -----Here for copy code popup endd----
                    // Ensure that stall.products exists and has a length
                    console.log(stall.products && stall.products.length)
                    console.log(stall.products.length)
                    if (stall.products && stall.products.length) {
                        let numberOfImages = stall.products.length;  //10
                        console.log(numberOfImages)

                        // Create a unique ID for each stall
                        //  const stallContainerId = `stall${stallIndex + 1}`;       
                        // Loop through images in the current stall
                        for (let imageIndex = 0; imageIndex < numberOfImages; imageIndex++) {
                            const imageUrl = stall.products[imageIndex].producturl;
                            console.log(imageUrl)
                            const imageDescription = stall.products[imageIndex].productname;

                            // Define positions based on image index using a switch statement
                            let position;
                            let width;
                            let height;
                            switch (imageIndex) {
                                case 0:
                                    position = "2.362 2.6 3";
                                    width = "1.6";
                                    height = "1.6";
                                    break;
                                //center second row
                                case 1:
                                    position = "1.5 3.17 1";
                                    width = "1.6";
                                    height = "1.6";
                                    break;
                                //left second row
                                case 2:
                                    position = "0.5 3.8 -0.8";
                                    width = "1.6";
                                    height = "1.6";
                                    break;
                                //right second row
                                case 3:
                                    position = "1.5 3.2 -2.7";
                                    width = "1.6";
                                    height = "1.6";
                                    break;
                                //first layer rightsidemiddle
                                case 4:
                                    position = "2.362 2.6 -4.7";
                                    width = "1.6";
                                    height = "1.6";
                                    break;
                            
                                // first layer leftside right 
                                // Add more cases for additional images
                                // ...
                                default:
                                    // Default case for handling unexpected image indices
                                    console.error(`Unhandled image index: ${imageIndex}`);
                                    break;
                            }
                            const containerEntity = document.createElement("a-entity");
                            containerEntity.setAttribute("position", position);
                            containerEntity.setAttribute("rotation", "0 0 0");
                            containerEntity.setAttribute("id", `container${imageIndex + 1}_${stallContainerId}`);
                            // Create sphere entity (ball)
                            // Create image element
                            const imageElement = document.createElement("a-image");
                            imageElement.setAttribute("id", `img${imageIndex + 1}_${stallContainerId}`); //img1 img2 img3 img4 img5 img6 img7 img8 img9 
                            imageElement.setAttribute("width", width);
                            imageElement.setAttribute("height", height);
                           imageElement.setAttribute("src", imageUrl); 
                            imageElement.setAttribute("rotation", "0 90 0");
                            imageElement.addEventListener('click', function () {
                            document.getElementById('popup').style.display='flex'
                            document.getElementById('productimge').setAttribute('src',imageUrl)
                            document.getElementById('prdt-name').textContent=imageDescription
                            document.getElementById('cost').textContent=stall.products[imageIndex].price
                            document.getElementById('prdt-units').textContent=stall.products[imageIndex].unit
                            document.getElementById('visit-prdt-btn').setAttribute('href',stall.products[imageIndex].productlink)
                         
                            document.getElementById('visit-prdt-btn').setAttribute('onclick', `tracking(${stall.uno}, "visit-product-website",''); return true;`);
                            
                            document.getElementById('share-prdt').addEventListener('click', function showPopup() {
                                    // var currentURL1 = window.location.href;
                                    // var baseURL = currentURL1.substr(0, currentURL1.lastIndexOf('/') + 1); // Extracts the base URL
                                    var newURL = `${stall.products[imageIndex].productlink}`;
                                    var popupOverlay = document.getElementById('popup-overlay');
                                    var currentURLInput = document.getElementById('currentURL');
                                    currentURLInput.value = newURL;
                                    document.getElementById('urlText').textContent = "Product Link"
                                    document.querySelector('.inviteText').textContent = "Share Product Link"
                                    popupOverlay.style.display = 'flex';
                                    // trackExpo(stall.uno, "share-product", imageDescription, ipAddress);
                                    tracking(stall.uno, "share-product", imageDescription)
                                    // gtag("event", "share-stall", { 'page_title': "Hall-Page" });
                                })
                               
                                // Update the text and image source of the popup
                                // document.getElementById(`popup${stallIndex + 1}`).setAttribute("visible", true);
                                // document.getElementById(`productName${stallIndex + 1}`).setAttribute("value", imageDescription);
                                // document.getElementById(`popupimage${stallIndex + 1}`).setAttribute("src", imageUrl);
                                // document.getElementById(`productPrice${stallIndex + 1}`).setAttribute("value", `Price: ${stall.products[imageIndex].price} / ${stall.products[imageIndex].unit}`);
                                // Make the popuplane1 visible
                                // document.getElementById(`visitiproduct${stallIndex + 1}`).setAttribute("cursor-listener",
                                //     `targetPage:${stall.products[imageIndex].productlink}; uno: ${stall.uno}; type: visiting-website-via-products; pdtname: ${imageDescription}`);
                                // document.getElementById(`shareproduct${stallIndex + 1}`).addEventListener('click',
                        //  );


                                // trackExpo(stall.uno, "product", imageDescription, ipAddress);
                                tracking(stall.uno, "product", imageDescription)
                           });


                            // // Create popup element
                            const popupElement = document.createElement("a-entity");

                            popupElement.setAttribute("id", `popup-img${imageIndex + 1}_${stallContainerId}`);


                            // Create the content inside the popup
                            const popupContent = `
                                            <a-plane color="#333" width="5" height="2"></a-plane>
                                            <a-text value="${imageDescription}" align="center" color="white" width="5" height="5" wrap-count="20" position="0 0 0.25"></a-text>
                                        `;

                            popupElement.innerHTML = popupContent;
                            // Append image and popup to the container
                            containerEntity.appendChild(imageElement);
                            containerEntity.appendChild(popupElement);
                            popupElement.setAttribute("position", "0.8 1.5 0");
                            popupElement.setAttribute("rotation", "0 90 0");
                            popupElement.setAttribute("scale", "0.5 0.5 0.5");
                            // popupElement.setAttribute("width","0.1")
                            // popupElement.setAttribute("height","0.1")
                            popupElement.setAttribute("visible", "false");
                            //popupElement.setAttribute("visible", "false");
                            // console.log("the popup is the following");
                            // console.log(popupElement); 8
                            // Append container entity to the 
                            document.getElementById(stallContainerId).appendChild(containerEntity);

                            imageElement.addEventListener('mouseenter', function () {
                                document.getElementById(`popup-img${imageIndex + 1}_${stallContainerId}`).setAttribute('visible', 'true');
                            })

                            imageElement.addEventListener('mouseleave', function () {
                                document.getElementById(`popup-img${imageIndex + 1}_${stallContainerId}`).setAttribute('visible', 'false');
                            })


                        }

                    } else {
                        // Log a message if the products array is missing or empty for the current stall
                        console.error(`Products array missing or empty for stall ${stallIndex + 1}`);
                    }
                });
                // Handle the fetched data as needed
                console.log('Fetched data:', data);
                // Reset the A-Frame scene
                // const scene = document.querySelector('a-scene');
                // scene.innerHTML = '';
                // // Update the A-Frame scene with the new data
                // updateSceneWithData(data);
            }
        })
        .catch(error => {
            // Handle fetch errors
            document.getElementById('overLaySection').style.display="flex";
            document.querySelector('h3').textContent = 'Something Went Wrong Please Try Again Later';
            console.error('Error fetching data:', error);
            document.getElementById('player').removeAttribute('wasd-controls')
            document.getElementById("scene1").removeAttribute('joystick');

        });
};
fetchDataFromAPI();

document.addEventListener("DOMContentLoaded", function() {
    updatestatus()
const previousbutton = document.getElementById('prev-hall');
document.getElementById('next-hall').addEventListener('click',function(){
    removeEntities(apivariable.stalls); 
    console.log(apivariable.stalls);
    let start1=apivariable.stalls[0].start
    console.log(start1)
    let end1=apivariable.stalls[0].end
    console.log(end1)
    //removeEntities(apivariable.stalls);
    start= parseInt(end1)+1;
    console.log(`the next start is ${start}`)
    end=parseInt(start)+9;
    console.log(`the next start is ${start}`)
    console.log(end)
    console.log('Start:', start); // Output: 1
    console.log('End:', end); 
    requestBody = {
    exhibition_ID:'3',
    start: `${start}`,
    end: `${end}`,
    category:"0",
    businesscategorylevel1:categoryparam,
    uno:'0'
}; 
b=b+1;
if(c){
   // console.log(`the c value is ${c}`)
    c=c+1
}
// posistioning the camera to original
var stallPosition= document.getElementById('hall1').getAttribute('position')
// Assuming 'stall1' has attributes x, y, and z
var stallX = stallPosition.x;
console.log(`posistion-of-stall is ${stallX}`)
var stallY = stallPosition.y;
console.log(`posistion-of-stall is ${stallY}`)
var stallZ = stallPosition.z;

console.log(`posistion-of-stall is ${stallZ}`)

// Perform some math operations on stallX, stallY, stallZ
var newX = stallX+0; // for example, adding 2 to the x position
var newY = stallY+2; // subtracting 1 from the y position
var newZ = stallZ+0; // multiplying the z position by 2
document.getElementById('player').removeAttribute('look-controls')

document.getElementById('player').setAttribute('rotation', { 
x: 0, 
y:  0, 
z: 0
});
// Set the new position to the 'camera'
document.getElementById('player').setAttribute('position', { x: newX, y: newY, z: newZ });

 fetchDataFromAPI()
 document.getElementById('player').setAttribute('look-controls', 'magicWindowTrackingEnabled:false');
})

previousbutton.addEventListener('click',function(){
    removeEntities(apivariable.stalls); 
    console.log("button is clicked for nex button")
                let start1=apivariable.stalls[0].start
                console.log(start1)
                let end1=apivariable.stalls[0].end
               start= parseInt(start1)-10;
               end=parseInt(start)+9;
               console.log('Start:', start1); // Output: 1
               console.log('End:', end1);
           //    debugger
               requestBody = {
                exhibition_ID:'3',
                start: `${start}`,
                end: `${end}`,
                category:"0",
                businesscategorylevel1:categoryparam,
                uno:'0'
                // Add other data as needed
            };
            if(c){
                console.log(`the c value is ${c}`)
                c=c-1
            }
            b=b-1;
            var stallPosition= document.getElementById('hall1').getAttribute('position')
// Assuming 'stall1' has attributes x, y, and z
var stallX = stallPosition.x;
console.log(`posistion-of-stall is ${stallX}`)
var stallY = stallPosition.y;
console.log(`posistion-of-stall is ${stallY}`)
var stallZ = stallPosition.z;

console.log(`posistion-of-stall is ${stallZ}`)

// Perform some math operations on stallX, stallY, stallZ
var newX = stallX+0; // for example, adding 2 to the x position
var newY = stallY+2; // subtracting 1 from the y position
var newZ = stallZ+0; // multiplying the z position by 2
document.getElementById('player').removeAttribute('look-controls')

document.getElementById('player').setAttribute('rotation', { 
x: 0, 
y:  0, 
z: 0
});
// Set the new position to the 'camera'
document.getElementById('player').setAttribute('position', { x: newX, y: newY, z: newZ });
fetchDataFromAPI()   
document.getElementById('player').setAttribute('look-controls', 'magicWindowTrackingEnabled:false');
})
})


if(useragent=="mobile"){
  document.getElementById("iframe-expoDir").setAttribute("src",`https://expo.marketcentral.in/expoDirectoryMobile.cfm`)
}else{
  document.getElementById("iframe-expoDir").setAttribute("src",`https://expo.marketcentral.in/expoDirectory.cfm`)

  document.querySelector(".scenea").removeAttribute('joystick');

}

var bgContainer = document.getElementById('mapText');
var cards = [];
var currentIndex=0;
let buttonid=0;
// category map js

fetch(`${urlendpoint}/rest/virtualExpo/general/getBusinesses/${endpoint_ExhibitionId}`)
.then(response => response.json())
.then(apiData => {
    data = apiData; // Assign data from API to the global variable
    console.log(data);
    createCards(data);
     // Enter fullscreen mode
    //  const doc = window.document;
    // const docEl = doc.documentElement;
    // const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    // requestFullScreen.call(docEl);
 
})
.catch(error => console.error('Error fetching data:', error));

document.getElementById('mapbutton1').addEventListener('click',showPrevious );
document.getElementById('mapbutton2').addEventListener('click', showNext);

function createCards(data) {
for (var i = 0; i < data.length; i++) {
    var card = document.createElement('div');
    card.className = 'card';
    card.id = 'card' + (i + 1);

    var img = document.createElement('img');
    img.id = 'img' + (i + 1);
    img.src = `assets/categorymap_images/category${data[i].CATEGORY}.png`;
    img.src = `assets/categorymap_images/category${i+1}.png`;
    img.style.width = '50px';
    img.style.height = '50px';

    var h3 = document.createElement('h3');
    h3.id = `categoryname${i + 1}`;
    h3.textContent = data[i].CATEGORY;

    var button = document.createElement('button');
    button.id = 'button' + (i + 1);
    button.textContent = 'Visit';
    button.dataset.categoryIndex = i;
    button.addEventListener('click', openLink);

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(button);

    bgContainer.appendChild(card);
    cards.push(card);
}

showCard(currentIndex);
}
function showCard(index) {
for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = 'none';
}

for (var i = 0; i < 10 ; i++) {
    if([index + i]<cards.length){
    cards[index + i].style.display = 'flex';
    document.getElementById('mapbutton2').style.display="flex"
    }
    else{
        document.getElementById('mapbutton2').style.display="none"
    }
}
}

function showNext() {
currentIndex = (currentIndex + 10) % cards.length;
console.log(currentIndex)
buttonid+=1;
console.log(`the button is ${buttonid}`)
if(buttonid>=1){
console.log("before execution")
document.getElementById('mapbutton1').style.display="flex"

}
showCard(currentIndex);

}

function showPrevious() {
currentIndex = (currentIndex - 10 + cards.length) % cards.length;
console.log(`the before button index is ${currentIndex}`)
buttonid-=1;
if(buttonid==0){
console.log("before execution")
document.getElementById('mapbutton1').style.display="none"
document.getElementById('mapbutton2').style.display="flex"

}
showCard(currentIndex);

}
// function showCard(index) {
//     for (var i = 0; i < cards.length; i++) {
//         cards[i].style.display = 'none';
//     }

//     for (var i = 0; i < 10 ; i++) {
//         cards[index + i].style.display = 'flex';
//     }
// }

// function showNext() {
//     currentIndex = (currentIndex + 10) % cards.length;
//     showCard(currentIndex);
// }

// function showPrevious() {
//     currentIndex = (currentIndex - 10 + cards.length) % cards.length;
//     showCard(currentIndex);
// }

function closePopup() {
var popupcontainer = document.getElementById('mappopup');
popupcontainer.style.display = 'none';
}

document.getElementById('close').addEventListener('click', closePopup);

function openLink(event) {
var index = event.currentTarget.dataset.categoryIndex;

// Assuming 'data' is the array obtained from the API
var categories = data.map(item => item.CATEGORY);

// Generate links based on categories
var links = categories.map(category => `prototype.html?category=${encrypt(category.replace(/&/g, '||'))}`);
var categoriesselect=categories.map(category=>category);
console.log(`the categories select is ${categoriesselect}`)
console.log(categoriesselect)
console.log(links);
console.log(categoriesselect[index])
trackinga(categoriesselect[index],'prototype')
//  trackExpo(0,categoriesselect[index],"")
//trackExpoCategory(0,categoriesselect[index],"",links[index],ipAddress)
// Open the link in the same window
window.location.href = links[index];
}
 
function checkhallfive(x){
   if(x<=5){
    document.getElementById('five-hall').setAttribute('visible','true')
    // document.getElementById('area5').setAttribute('rotation','90 -90 0')
    // document.getElementById('area5').removeAttribute('position')
   
    document.getElementById('stall5').setAttribute('rotation','0 -90 0')
    document.getElementById('stall5').setAttribute('position','1.109 0.000 -65')
    document.getElementById('bubble5').setAttribute('rotation','0 0 0')
    document.getElementById('bubble5').setAttribute('position','-4 5.2 -67.506')
    document.getElementById('navmeshmodel_10').removeAttribute('gltf-model')
    document.getElementById('navmeshmodel_10').setAttribute('gltf-model','url(assets/navmesh/Hall @5 navmesh.glb)')
    document.getElementById('navmeshmodel_10').setAttribute('position','0 0 0')
    document.getElementById('navmeshmodel_10').setAttribute('visible','false')

   }
}
function checkurlparm(urlparameter){
    console.log("triggerd checkurlparam")
    if (!urlparameter) {
        if (!localStorage.getItem('UserName')) {
            window.location.replace("index.html")
        }
        else {
            window.location.replace("categorymapdynmic.html")
        }
 }
}


/// loading 


    