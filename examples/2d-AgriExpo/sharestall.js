let stallsData;
var urlendpoint = '';
const queryString = window.location.search;
let c;
// Create a new URLSearchParams object from the query string
const urlParams = new URLSearchParams(queryString);

var hallnum = urlParams.get('hallnum');
var cid = urlParams.get("uno");

cid = decodeURIComponent(urlParams.get("uno"));
cid = decryptWithCasePreservation(cid)


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
    end: '1',
    category: "0",
    businesscategorylevel1: '',
    uno: cid
};

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
function shaerestall(uno, name, index) {
    var currentURL1 = window.location.href;
    var baseURL = currentURL1.substr(0, currentURL1.lastIndexOf('/') + 1); // Extracts the base URL
    //console.log(typeof uno)
    //console.log(uno)
    var newURL = `${baseURL}sharestall.html?uno=${encryptWithCasePreservation(uno.toString())}&stallno=${name}`;
    document.getElementById(`popup-overlay_${index}`).style.display = "flex"
    document.getElementById(`currentURL`).value = newURL
    document.getElementById('urlText').textContent = "Stall Link"

    // document.getElementById(`sharestall_${index}`).addEventListener('click', function () {
    //     document.getElementById(`popup-overlay_${index}`).style.display="flex"
    //     document.getElementById(`currentURL_${index}`).value=prdurl

    //  });
}

function shaerestallurl(uno, name, index) {
    var currentURL1 = window.location.href;
    var baseURL = currentURL1
    console.log(currentURL1)
    // alert(currentURL1)
    //console.log(uno)

    document.getElementById(`popup-overlay_${index}`).style.display = "flex"
    document.getElementById(`currentURL`).value = currentURL1
    document.getElementById('urlText').textContent = "Stall Link"
    document.body.classList.add('overlay');
    // document.getElementById(`sharestall_${index}`).addEventListener('click', function () {
    //     document.getElementById(`popup-overlay_${index}`).style.display="flex"
    //     document.getElementById(`currentURL_${index}`).value=prdurl

    //  });
}


function closepopup(index) {
    document.querySelector(`#digitalPopUp_${index}`).style.display = "none";
}
//     document.querySelector('.closeImg').addEventListener('click', function() {

//     });
// });

function openlink(value) {
    window.open(value, '_blank')
}
// function closePopup1(index) {
//     document.getElementById(`popup-overlay_${index}`).style.display = "none"
//     document.querySelector(`.url-copied-alert`).style.display = "none"
//     if (document.getElementById('urlText').textContent === "Product Link") {
//         document.getElementById(`digitalPopUp_${index}`).style.display = "flex"
//     }
//     document.body.classList.remove('overlay');
// }

function copyToClipboard(inex) {
    // Get the current URL
    var currentURL = document.getElementById(`currentURL`).value;
    // Copy the URL to the clipboard
    navigator.clipboard.writeText(currentURL)
        .then(function () {
            // alert('URL copied to clipboard!');
            document.getElementById(`url-copied-alert-txt`).style.display = 'block';
        })
        .catch(function (err) {
            console.error('Unable to copy to clipboard', err);
        });
}

const expoContainer = document.getElementById("expo-container");


let currentStallIndex = 0;
// Function to render stalls
function renderStalls() {


    stallsData.stalls.forEach((stall, index) => {
        const stallElement = document.createElement("div");
        stallElement.classList.add("stall");

        //     stallElement.classList.add("stallPage")
        stallElement.innerHTML = `
        <div class="stallHeader">
        
        <div class="expoHeading">
            <p class="expoHeadinng">Dry Fruits Mela</p>
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
                        <img class="mediaIcons"   id="sharestall_${index}" onClick="shaerestallurl(${stall.uno},${index + 1},${index})"  src="./assets/logo/share stall.png">
                       
                    </div>
                </div>
                        <div class="companyNameContents">
                            <img src="${stall.vendorInfo.vendorimage}" alt="${stall.vendorInfo.vendorName}">
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
                                        <a href="${stall.broucherlink}" target="_blank"><img src="./assets/logo/pdf.png"></a>
                                        <a href="${stall.businesscard}" target="_blank"><img src="./assets/logo/contact.png"></a>
                                        <a href="mailto:${stall.vendorInfo.email}" target="_blank"><img src="./assets/logo/Mail.png"></a>
                                        <a href="tel:+91${stall.vendorInfo.contactNumber}" target="_blank"><img src="./assets/logo/call.png"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div class="digitalPopUp" id="digitalPopUp_${index}">
            <div class="digitalPopUpContents">
                <img class="closeImg" src="images/digitalClose.png" onclick="closepopup(${index})">
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
              <input type="text" id="currentURL" readonly />
              <img class="global" src="assets/icons/global.png" />
              <button id="copyButton" onClick="copyToClipboard()">Copy</button>
            </div>
            <p class="url-copied-alert" id="url-copied-alert-txt">URL copied to clipboard!</p>
          </div>
          <button class="whiteCloseIcon" onClick="closePopup1(${index})"><img src="assets/icons/blueCloseIcon.png" /></button>
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


    // Show the first stall by default
    showStall(currentStallIndex);

}


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
        document.body.classList.toggle('overlay');
        document.getElementById(`currentURL`).value = prdurl
        document.getElementById('urlText').textContent = "Product Link"
        document.body.classList.add('overlay');
    });
    document.querySelector(`#digitalPopUp_${index}`).style.display = 'flex';
}


function changehall(indexvalue) {
    document.body.innerHTML = '';

    // Update requestBody for fetching new data
    requestBody.start = (indexvalue - 1) * 10 + 1;
    requestBody.end = indexvalue * 10;
    //document.getElementById("stallcontent").innerHTML=""
    // Fetch new data
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
    document.body.classList.remove('overlay');
}
//     document.querySelector('.closeImg').addEventListener('click', function() {

//     });
// });

function openlink(value) {
    window.open(value, '_blank')
}
function closePopup1(index) {
    document.body.classList.remove('overlay');
    if (document.getElementById('urlText').textContent === "Product Link") {
        document.getElementById(`digitalPopUp_${index}`).style.display = "flex"
    }
    // document.getElementById(`digitalPopUp_${index}`).style.display = "flex"
    document.getElementById(`url-copied-alert-txt`).style.display = "none"
    document.getElementById(`popup-overlay_${index}`).style.display = "none"
}

function navigatetolobby() {

    window.location.href = "lobby.html"

}