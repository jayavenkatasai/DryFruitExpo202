//urlendpoint 
var urlendpoint = '';
if (window.location.href.includes('digiexpodev.marketcentral')) {
    urlendpoint = 'https://stage.marketcentral.in';
}
// Check if the URL contains "www" or "expodev"
else if (window.location.href.includes('www') || window.location.href.includes('expodev')) {
    urlendpoint = 'https://www.marketcentral.in';
}
// Default to some other URL
else {
    urlendpoint = 'https://stage.marketcentral.in';
}
const queryString = window.location.search;
let c;
 // Create a new URLSearchParams object from the query string
 const urlParams = new URLSearchParams(queryString);
 var hallnum = urlParams.get('hallnum')
 var cid = urlParams.get("uno");
 checkurlparm(cid);
cid= decodeURIComponent(urlParams.get("uno"));
 cid=decryptWithCasePreservation(cid)

 console.log(typeof cid)
 console.log(cid)
//  cid=parseInt(cid);//   console.log(cid)
 var parser = new UAParser();
 var result = parser.getResult();
 var useragent =result.device.type
 console.log(useragent)
 var os =result.os.name

function share(uno,name){
    var currentURL1 = window.location.href;
    var baseURL = currentURL1; // Extracts the base URL
    var newURL = baseURL;

    var popupOverlay = document.getElementById('popup-overlay');
    var currentURLInput = document.getElementById('currentURL');
    document.getElementById('urlText').textContent = "Stall Link"
    currentURLInput.value = newURL;
    popupOverlay.style.display = 'flex';
}

function copyToClipboard() {
    // Get the current URL
    var currentURL = document.getElementById('currentURL').value;

    // Copy the URL to the clipboard
    navigator.clipboard.writeText(currentURL)
        .then(function () {
            alert('URL copied to clipboard!');
        })
        .catch(function (err) {
            console.error('Unable to copy to clipboard', err);
        });
}

function closePopup1() {
    // Close the popup
    var popupOverlay = document.getElementById('popup-overlay');
    popupOverlay.style.display = 'none';
}
document.getElementById('fullscreenButton').addEventListener('click', function() {
    toggleFullScreen();
  });
// Function to fetch data from the API and update the scene
let requestBody={
    exhibition_ID:'3',
    start:'1',
    end:'1',
    category:"0",
    businesscategorylevel1:'0',
    uno:cid
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
               
                //need to do navigation stop and popup showing no vendors available
             
            } else {
                apivariable = data;
                console.log(apivariable)
                 // banners logic
            
                
                // banners logic end 
                data.stalls.forEach((stall, stallIndex) => {
                        const stallContainerId = `stall${stallIndex + 1}`;  
                        document.getElementById(`txtval${stallIndex + 1}`).setAttribute('value',stall.uno)
                        
                        document.getElementById(`bname${stallIndex + 1}`).setAttribute('value',stall.vendorInfo.companyname)
                       // document.getElementById(`pp${stallIndex + 1}`).setAttribute(`targetPage:${`https://stage.marketcentral.in/expo/CHAT/individualstall.cfm?stallid=${stall.uno}&bname=${stall.vendorInfo.companyname}testing&name=${localStorage.getItem('UserName')}&uid=${localStorage.getItem('GUID')}`}`)
                        // document.getElementById(`pp${stallIndex + 1}`).setAttribute("cursor-listener", `targetPage:https://stage.marketcentral.in/expo/CHAT/individualstall.cfm?stallid=${stall.uno}&bname=${stall.vendorInfo.companyname}testing&name=${localStorage.getItem('UserName')}&uid=${localStorage.getItem('GUID')}`);
                        if(stall.websiteLink){
                        document.getElementById(`website${stallIndex + 1}`).setAttribute("cursor-listener",`targetPage:${stall.websiteLink}`)
                        }
                        if(stall.vendorInfo.email){
                            document.getElementById(`email${stallIndex + 1}`).setAttribute("cursor-listener",`targetPage:mailto:${stall.vendorInfo.email}`)
                            }
                        if (stall.broucherlinkAvailable) {
                                document.getElementById(`broucher${stallIndex + 1}`).setAttribute("cursor-listener",`targetPage:${stall.broucherlink}`)
                        }
                        if (stall.businesscard) {
                            document.getElementById(`businesscard${stallIndex + 1}`).setAttribute("cursor-listener",`targetPage:${stall.businesscard}`)
                    }
                    if(stall.vendorInfo.contactNumber){
                        document.getElementById(`phone${stallIndex + 1}`).setAttribute("cursor-listener",`targetPage:tel:91+${stall.vendorInfo.contactNumber}`)
                    }

                         //document.getElementById(`stall${stallIndex + 1}`).setAttribute("visible", "true");
                document.getElementById(`vendorname${stallIndex + 1}`).setAttribute("value", stall.vendorInfo.vendorName);
              //  document.getElementById(`vendorname${stallIndex + 1}`).setAttribute("visible", "true");
                document.getElementById(`vendorphoneno${stallIndex + 1}`).setAttribute("value", stall.vendorInfo.contactNumber);
                document.getElementById(`vendorimage${stallIndex + 1}`).setAttribute("src", stall.vendorInfo.vendorimage);
                document.getElementById(`vendorbusinessname${stallIndex + 1}`).setAttribute("value", stall.vendorInfo.companyname);
                document.getElementById(`vendorlogo${stallIndex + 1}`).setAttribute("src", stall.logo);
                document.getElementById(`stallno${stallIndex + 1}`).setAttribute("value", stall.name);
              //  document.getElementById(`board-name`).setAttribute('value',categoryparam)
                document.getElementById(`sharebutton${stallIndex + 1}`).addEventListener('click',function(){
                    share(stall.uno,stall.name)
                });

                   
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
                                    position = "2.362 2.185 3.162";
                                    width = "2";
                                    height = "2";
                                    break;
                                //center second row
                                case 1:
                                    position = "1.5 2.802 1";
                                    width = "2";
                                    height = "2";
                                    break;
                                //left second row
                                case 2:
                                    position = "0.5 3.380 -0.8";
                                    width = "2";
                                    height = "2";
                                    break;
                                //right second row
                                case 3:
                                    position = "1.5 2.802 -2.7";
                                    width = "2";
                                    height = "2";
                                    break;
                                //first layer rightsidemiddle
                                case 4:
                                    position = "2.362 2.185 -4.7";
                                    width = "2";
                                    height = "2";
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
                            document.getElementById('share-prdt').addEventListener('click', function showPopup() {
                                    // var currentURL1 = window.location.href;
                                    // var baseURL = currentURL1.substr(0, currentURL1.lastIndexOf('/') + 1); // Extracts the base URL
                                    var newURL = `${stall.products[imageIndex].productlink}`;
                                    var popupOverlay = document.getElementById('popup-overlay');
                                    var currentURLInput = document.getElementById('currentURL');
                                    currentURLInput.value = newURL;
                                    document.getElementById('urlText').textContent = "Product Link"
                                    popupOverlay.style.display = 'flex';
                                    // trackExpo(stall.uno, "share-product", imageDescription, ipAddress);
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
            console.error('Error fetching data:', error);

        });
};
fetchDataFromAPI();

var bgContainer = document.getElementById('mapText');
var cards = [];
var currentIndex=0;
// category map js

fetch(`${urlendpoint}/rest/virtualExpo/general/getBusinesses/3`)
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
//  trackExpo(0,categoriesselect[index],"")
//trackExpoCategory(0,categoriesselect[index],"",links[index],ipAddress)
// Open the link in the same window
window.location.href = links[index];
}
function checkurlparm(urlparameter){
    console.log("triggerd checkurlparam")
 if(!urlparameter){
    window.location.replace("index.html")
 }
}
