let stallsData;

var urlendpoint = '';
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
//var selectedLanguages = localStorage.getItem('languageselection')
if (window.location.href.includes('digiexpodev.marketcentral')) {
    urlendpoint = 'https://www.marketcentral.in';
}
// Check if the URL contains "www" or "expodev"
else if (window.location.href.includes('www') || window.location.href.includes('expodev')) {
    urlendpoint = 'https://www.marketcentral.in';
}
else if (window.location.href.includes('localhost')) {
    urlendpoint = 'https://www.marketcentral.in';
}
// Default to some other URL
else {
    urlendpoint = 'https://www.marketcentral.in';
}
let requestBody = {
    exhibition_ID: '4',
    start: '1',
    end: '10',
    category: "0",
    businesscategorylevel1: categoryparam,
    uno: '0'
};
if (startValue && endValue && hallnum) {
    requestBody.start = startValue;
    requestBody.end = endValue
}
let url = `${urlendpoint}/rest/virtualExpo/general/virtualExhibitionDetails`;

const fetchdata = () => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Network response was not ok.and failed url is :${url}`);
            }
        })
        .then(data => {
            if (data.data) {
                if (data.data.message === 'No records found') {
                    window.location.replace("categorymapdynmic.html");
                }
            } else {
                stallsData = data;
                console.log(stallsData); // Log stallsData to see what it contains
                renderStalls();
                //  hallbuttonsui() // Call renderStalls after successfully fetching data
            }
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
};

const expoContainer = document.getElementById("expo-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentStallIndex = 0;
// Function to render stalls
function renderStalls() {

    // let hallbtndata;
    // let filterdata
    // let hallbtnurl="https://www.marketcentral.in/rest/virtualExpo/general/getBusinesses/4"

    // fetch(hallbtnurl)
    // .then(response => response.json())
    // .then(hallbtndata => {
    //     // Use hallbtndata only for generating footer hall numbers
    //     const hallNumbersContainer = document.querySelector('.hallNumbers');
    //     const filterdata = hallbtndata.filter(item => item.CATEGORY === categoryparam);

    //     if (filterdata.length > 0) {
    //         let numberitems = '';
    //         for (let i = 1; i <= filterdata[0].HALL_COUNT; i++) {
    //             numberitems += `<p class="numbers" data-index="${i}" onclick="changehall(${i})">${i}</p>`;
    //         }
    //         hallNumbersContainer.innerHTML = numberitems;
    //     }
    // })
    // .catch(error => console.error('Error fetching hall button data:', error));

    //  //     .catch(error => console.error('Error fetching data:', error))
    //       console.log(categoryparam)
    //       console.log(hallbtndata)
    //       console.log(filterdata)

    stallsData.stalls.forEach((stall, index) => {
        const stallElement = document.createElement("div");
        stallElement.classList.add("stall");

        //     stallElement.classList.add("stallPage")
        stallElement.innerHTML = `
        <div class="stallHeader">
         <div class="toggler">
            <div class="dropdown">
                <button type="button" data-toggle="dropdown">
                    <p><img src="./assets/logo/toggleImg.png">
                        Stalls</p>
                </button>
                <div class="dropdown-menu" id="dropdownid">
                ${(() => {
                let dropdownItems = '';
                for (let i = 1; i <= stallsData.stalls.length; i++) {
                    dropdownItems += `<a class="dropdown-item"  data-index="${i}" onclick="showStall(${i - 1})">Stall ${i}</a>`;
                }
                return dropdownItems;
            })()}
                </div>
              </div>
        </div>
        <div class="expoHeading">
            <p class="expoHeadinng">AGRI EXPO</p>
        </div>
        <div class="lobbyClass" onclick="navigatetolobby()">
            <p class="lobbyName">Lobby</p>
        </div>
    </div>
             <div class="stallPage">
                <div class="stallPageBg">
                    <!-- <img src="./assets/background_images/bgImg.png"> -->
                </div>
                <div class="stallContent" id="stallcontent">
                    <div class="stallContentInner">
                        <div class="custDetails">
                            <img class="custImg" src="${stall.vendorInfo.vendorimage}">
                            <div class="custNameDetails">
                                <p class="custName">${stall.vendorInfo.vendorName}</p>
                                <p class="custNum">${stall.vendorInfo.contactNumber}</p>
                            </div>
                            <div class="mediaIconsSection">
                                <img class="mediaIcons"   id="sharestall_${index}" onClick="shaerestall(${stall.uno},${index + 1},${index})"  src="./assets/logo/share stall.png">
                                <img class="mediaIcons" id="chaticon_${index}" onclick="showchat(${index}, ${stall.uno}, '${stall.vendorInfo.companyname}')"src="./assets/logo/msg.png">
                            </div>
                        </div>
                        <div class="companyNameContents">
                            <img src="${stall.logo}" alt="${stall.vendorInfo.vendorName}">
                            <p class="companyName">${stall.vendorInfo.companyname}</p>
                        </div>
                        <div class="agriProducts">
                            <div class="agriProductsContents">
                                <div class="productSection" id="productSection_${index}">
                                    <!-- Product images will be added here dynamically -->
                                </div>
                                <div class="hallNum">
                                    <p class="stallNum">Stall No:<span>${index + 1}</span></p>
                                    <div class="icons">
                                        <a href="${stall.websiteLink}" target="_blank"><img src="./assets/logo/web.png"></a>
                                        ${stall.broucherlinkAvailable === 'yes' ? `<a href="${stall.broucherlink}" target="_blank" id="broucher${index + 1}"><img src="./assets/logo/pdf.png"></a>` : '<a  target="_blank" onclick="alertbroucher()"><img src="./assets/logo/pdf.png" ></a>'}
                                   
                                        <a href="${stall.businesscard}" target="_blank"><img src="./assets/logo/contact.png"></a>
                                        <a href="mailto:${stall.vendorInfo.email}" target="_blank"><img src="./assets/logo/Mail.png"></a>
                                        <a href="tel:+91${stall.vendorInfo.contactNumber}" target="_blank"><img src="./assets/logo/call.png"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat" >
                     <img src="./assets/logo/mblChat.png" onclick="showindividualchat(${index}, ${stall.uno}, '${stall.vendorInfo.companyname}')">
                </div>
            </div>
            

            <div class="digitalPopUp" id="digitalPopUp_${index}">
            <div class="digitalPopUpContents">
                <img class="closeImg" src="assets/icons/blueCloseIcon.png" onclick="closepopup(${index})">
                <div class="productDetailsSection">
                    <img class="productImg" id="productImgid_${index}" src="">
                    <div class="productDetails">
                        <p class="productName" id="productnameid_${index}" >Discover Hidden Treasures:</p>
                        <p class="productPrice" id="productpriceid_${index}">Price : <span>₹2,795/kilogram(kg)</span> </p>
                        <div class="productButtons d-flex">
                            <a class="visitButton" id="visitButtonid_${index}">Visit Product</a>
                            <a class="shareButton" id="shareButtonid_${index}" >Share Product</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="popup-overlay_${index}" class="digitalcopyPopUp">
        <div id="popup-card">
          <h6 class="inviteText">Share Stall Link</h6>
          <div class="copySection">
            <p id="urlText">Stall Link</p>
            <div class="copyButtonSection">
              <input type="text" id="currentURL_${index}"  class="currentURL"readonly />
              <img class="global" src="assets/icons/global.png" />
              <button id="copyButton" onClick="copyToClipboard(${index})">Copy</button>
            </div>
            <p class="url-copied-alert" id="url-copied-alert-txt_${index}">URL copied to clipboard!</p>
          </div>
          <button class="whiteCloseIcon" onClick="closePopup1(${index})"><img src="assets/icons/blueCloseIcon.png" /></button>
        </div>
      </div>   
                <div class="footer">
                <div class="footerContents">
                    <img src="./assets/logo/leftArrow.png" onclick="showStalls(-1)">
                    <div class="hallNumbers">
                        <p class="hallHeading">Hall no:</p>
                        
                       <div class="numbersMain">
                        ${(() => {
                let numberitems = '';
                for (let i = 1; i <= stallsData.Hallcount.Total; i++) {
                    numberitems += `<p class="numbers"  data-index="${i}" onclick="changehall(${i})">${i}</p> `;
                }
                return numberitems;
            })()}
                        </div>
                    </div>
                    <img src="./assets/logo/rightArrow.png" onclick="showStalls(1)">
                </div>
            </div>
          

            <div id="chat-ui-room2_${index}" class="chat-ui-room2">
            <img class="toDClose" id="toDClose_${index}" onclick="closechat(${index})" src="assets/icons/blueCloseIcon.png">
            <iframe class="chatClass" id="chatui2_${index}" src="" width="800px" height="100%" allowfullscreen></iframe>
            <div class="indidualChatIcons">
              <img class="individualChatClose" src="assets/icons/blueCloseIcon.png" />
            </div>
          </div>
          
    <div id="iframe-container_${index}" class="iframe-containerr">
    <iframe id="iframe-url_${index}" src="" class="iframe-urll"></iframe>
  </div>

    <div id="chat-visitorpanel-room2_${index}" class="chat-ui-room2">
            <img class="toDClose" id="toDCloseone_${index}" onclick="closechatone(${index})" src="assets/icons/blueCloseIcon.png">
            <iframe class="chatClassone" id="chatui3_${index}" src="" width="800px" height="100%" allowfullscreen></iframe>
            <div class="indidualChatIcons">
              <img class="individualChatClose" src="assets/icons/blueCloseIcon.png" />
            </div>
    </div>

            `;

        document.body.appendChild(stallElement);

        const productSection = document.getElementById(`productSection_${index}`);
        if (productSection) {
            productSection.innerHTML = ''
            stall.products.slice(0, 5).forEach(product => {
                const productImage = document.createElement("img");
                productImage.src = product.producturl;
                productImage.alt = product.productname;
                productImage.addEventListener("click", function () {
                    showpopup(product.productname, product.price, product.producturl, product.productlink, index);
                    console.log(product.productname)
                });
                productSection.appendChild(productImage);
            });
        } else {
            console.error(`Product section not found for stall ${index}`);
        }
    });
   // const selectedHall = localStorage.getItem('selectedHall');
    if (selectedHallNumber !== null) {
        const hallElement = document.querySelector(`.hallNumbers .numbers[data-index="${selectedHallNumber}"]`);
        if (hallElement) {
            hallElement.classList.add('highlighted-button');
        }
    }
    // Show the first stall by default
    showStall(currentStallIndex);

}






// chatgpt new code


// function renderStalls() {
//     stallsData.stalls.forEach((stall, index) => {
//         const stallElement = document.createElement("div");
//         stallElement.classList.add("stall");

//         stallElement.innerHTML = `
//         <!-- Your existing stall HTML code here -->
//         `;

//         document.body.appendChild(stallElement);

//         // Your existing code for product section, etc.

//     });

//     // After rendering, apply the highlight to the previously selected hall number
//     const selectedHall = localStorage.getItem('selectedHall');
//     if (selectedHall) {
//         const hallElement = document.querySelector(`.hallNumbers .numbers[data-index="${selectedHall}"]`);
//         if (hallElement) {
//             hallElement.classList.add('highlighted-hall');
//         }
//     }

//     // Show the first stall by default
//     showStall(currentStallIndex);
// }

// Function to show a specific stall
// function showStall(index) {
//     const stalls = document.querySelectorAll('.stall');
//     stalls[currentStallIndex].classList.remove('active');
//     currentStallIndex = (currentStallIndex + index + stalls.length) % stalls.length;
//     stalls[currentStallIndex].classList.add('active');
// }

function showStall(index) {
    const stalls = document.querySelectorAll('.stall');

    // Remove 'active' class from all stalls
    stalls.forEach(stall => {
        stall.classList.remove('active');
    });
    stalls[currentStallIndex].classList.remove('active');

    // Add 'active' class to the clicked stall
    currentStallIndex = (index + stalls.length) % stalls.length;
    stalls[currentStallIndex].classList.add('active');
}



function showStalls(index) {
    //debugger
    document.querySelector('.digitalPopUp').style.display="none"
    document.querySelector('.digitalcopyPopUp').style.display="none"
    const stalls = document.querySelectorAll('.stall');
    stalls[currentStallIndex].classList.remove('active');
    currentStallIndex = (currentStallIndex + index + stalls.length) % stalls.length;
    stalls[currentStallIndex].classList.add('active');

}
// Call function to fetch data
fetchdata();


function showpopup(prdname, prdprice, prdlink, prdurl, index) {
    document.getElementById(`productnameid_${index}`).textContent = prdname;
    document.getElementById(`productpriceid_${index}`).textContent = `Price: ${prdprice}`;
    document.getElementById(`productImgid_${index}`).src = prdlink;
    document.getElementById(`visitButtonid_${index}`).addEventListener('click', function () {
        window.open(prdurl, "_blank");
    });
    document.getElementById(`shareButtonid_${index}`).addEventListener('click', function () {
        document.getElementById(`digitalPopUp_${index}`).style.display = "none"
        document.getElementById(`popup-overlay_${index}`).style.display = "flex"
        document.getElementById(`currentURL_${index}`).value = prdurl
        document.getElementById('urlText').textContent = "Product Link"
        document.body.classList.add('overlay');

    });
    document.querySelector(`#digitalPopUp_${index}`).style.display = 'flex';
}


// function changehall(indexvalue) {
//     document.body.innerHTML = '';

//     // Update requestBody for fetching new data
//     requestBody.start = (indexvalue - 1) * 10 + 1;
//     requestBody.end = indexvalue * 10;
//     //document.getElementById("stallcontent").innerHTML=""
//     // Fetch new data
//     currentStallIndex = 0
//     fetchdata();
// }
let selectedHallNumber = null;
function changehall(indexvalue) {
    // Store the selected hall number in a global variable
    selectedHallNumber = indexvalue;

    // Remove existing highlights
    const allHalls = document.querySelectorAll('.hallNumbers .numbers');
    allHalls.forEach(hall => hall.classList.remove('highlighted-hall'));

    // Highlight the clicked hall number
    const selectedHall = document.querySelector(`.hallNumbers .numbers[data-index="${indexvalue}"]`);
    if (selectedHall) {
        selectedHall.classList.add('highlighted-hall');
    }

    // Clear the body content to render new hall's stalls
    document.body.innerHTML = '';

    // Update requestBody for fetching new data
    requestBody.start = (indexvalue - 1) * 10 + 1;
    requestBody.end = indexvalue * 10;

    // Fetch new data and render stalls
    currentStallIndex = 0;
    fetchdata();
}
function checkurlparm(urlparameter) {
    //console.log("triggerd checkurlparam")
    if (!urlparameter) {
        if (!localStorage.getItem('UserName')) {
            window.location.replace("index.html")
        }
        else {
            window.location.replace("categorymapdynmic.html")
        }
    }
}
function shaerestall(uno, name, index) {
    var currentURL1 = window.location.href;
    var baseURL = currentURL1.substr(0, currentURL1.lastIndexOf('/') + 1); // Extracts the base URL
    //console.log(typeof uno)
    //console.log(uno)
    var newURL = `${baseURL}sharestall.html?uno=${encryptWithCasePreservation(uno.toString())}&stallno=${name}`;
    document.getElementById(`popup-overlay_${index}`).style.display = "flex"
    document.getElementById(`currentURL_${index}`).value = newURL
    document.getElementById('urlText').textContent = "Stall Link"
    document.body.classList.add('overlay');
    // document.getElementById(`sharestall_${index}`).addEventListener('click', function () {
    //     document.getElementById(`popup-overlay_${index}`).style.display="flex"
    //     document.getElementById(`currentURL_${index}`).value=prdurl

    //  });
}



//  console.log(filterdata)


//     <div class="footer">
//     <div class="footerContents">
//         <img src="./assets/logo/leftArrow.png" onclick="showStalls(-1)">
//         <div class="hallNumbers">
//             <p class="hallHeading">Hall no:</p>
//             <p class="numbers ">01</p>
//             <p class="numbers">02</p>
//             <p class="numbers">03</p>
//         </div>
//         <img src="./assets/logo/rightArrow.png" onclick="showStalls(1)">
//     </div>
// </div>
// </div>
function closepopup(index) {
    document.querySelector(`#digitalPopUp_${index}`).style.display = "none";
}
//     document.querySelector('.closeImg').addEventListener('click', function() {

//     });
// });

function openlink(value) {
    window.open(value, '_blank')
}
function closePopup1(index) {
    document.body.classList.remove('overlay');
    document.getElementById(`popup-overlay_${index}`).style.display = "none"
    document.querySelector(`.url-copied-alert`).style.display = "none"
    if (document.getElementById('urlText').textContent === "Product Link") {
        document.getElementById(`digitalPopUp_${index}`).style.display = "flex"
    }
   
}

function copyToClipboard(inex) {
    // Get the current URL
    var currentURL = document.getElementById(`currentURL_${inex}`).value;
    // Copy the URL to the clipboard
    navigator.clipboard.writeText(currentURL)
        .then(function () {
            // alert('URL copied to clipboard!');
            document.getElementById(`url-copied-alert-txt_${inex}`).style.display = 'block';
        })
        .catch(function (err) {
            console.error('Unable to copy to clipboard', err);
        });
}
// function showchat(index,uid,bname){
//     alert("chat trigger");
//     var usernamelocal = localStorage.getItem('UserName');
//   var guidd = localStorage.getItem('GUID')
//     document.getElementById(`chat-ui-room2_${index}`).style.display="flex"
//     document.getElementById(`chatui2_${index}`).setAttribute('src',`https://expo1.marketcentral.in/CHAT/cfmchat.cfm?stallid=${uid}&bname=${bname}testing&name=${usernamelocal}&uid=${guidd}`)
// }


function showchat(index, uid, bname) {
    // alert("chat trigger");
    var usernamelocal = localStorage.getItem('UserName');
    var guidd = localStorage.getItem('GUID');
    document.getElementById(`chat-ui-room2_${index}`).style.display = "flex";
    if (!isStallVisited(uid)) {
        document.getElementById(`iframe-url_${index}`).setAttribute('src', `https://expo1.marketcentral.in/CHAT/cfmchat.cfm?stallid=${uid}&bname=${bname}testing&name=${usernamelocal}&uid=${guidd}`);
        // trackinga(`visitor passed through - ${uid}`,'hall')
        markStallVisited(uid);
    }
    document.getElementById(`chatui2_${index}`).setAttribute('src', `https://expo1.marketcentral.in/CHAT/individualstall.cfm?stallid=${uid}&bname=${bname}&name=${usernamelocal}&uid=${guidd}`);
}


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

function closechat(index) {
    document.getElementById(`chat-ui-room2_${index}`).style.display = "none"
}


function closechatone(index) {
    document.getElementById(`chat-visitorpanel-room2_${index}`).style.display = "none"
}



function showindividualchat(index, uid, bname) {
    // alert("chat trigger");
    var usernamelocal = localStorage.getItem('UserName');
    var guidd = localStorage.getItem('GUID');
    document.getElementById(`chat-visitorpanel-room2_${index}`).style.display = "flex";
    document.getElementById(`chatui3_${index}`).setAttribute('src', `https://expo1.marketcentral.in/CHAT/visitorpannel.cfm?stallid=12&name=${usernamelocal}&bname=${localStorage.getItem('UserName')}&name=${localStorage.getItem('UserName')}&uid=${guidd}`);
}

function alertbroucher(){
    alert("No Broucher Available")
}

function navigatetolobby(){
   
        window.location.href="lobby.html"

}