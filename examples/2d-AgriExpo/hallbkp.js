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
else if(window.location.href.includes('localhost')){
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
        businesscategorylevel1:categoryparam,
        uno: '0'
    };
if(startValue&&endValue&&hallnum){
    requestBody.start=startValue;
    requestBody.end=endValue
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
                hallbuttonsui() // Call renderStalls after successfully fetching data
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

        let hallbtndata;
        let filterdata
        let hallbtnurl="https://www.marketcentral.in/rest/virtualExpo/general/getBusinesses/4"
       
        fetch(hallbtnurl)
        .then(response => response.json())
        .then(hallbtndata => {
            // Use hallbtndata only for generating footer hall numbers
            const hallNumbersContainer = document.querySelector('.hallNumbers');
            const filterdata = hallbtndata.filter(item => item.CATEGORY === categoryparam);
            
            if (filterdata.length > 0) {
                let numberitems = '';
                for (let i = 1; i <= filterdata[0].HALL_COUNT; i++) {
                    numberitems += `<p class="numbers" data-index="${i}" onclick="changehall(${i})">${i}</p>`;
                }
                hallNumbersContainer.innerHTML = numberitems;
            }
        })
        .catch(error => console.error('Error fetching hall button data:', error));
    
         //     .catch(error => console.error('Error fetching data:', error))
              console.log(categoryparam)
              console.log(hallbtndata)
              console.log(filterdata)
      
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
                        dropdownItems += `<a class="dropdown-item"  data-index="${i}" onclick="showStall(${i-1})">Stall ${i}</a>`;
                    }
                    return dropdownItems;
                })()}
                </div>
              </div>
        </div>
        <div class="expoHeading">
            <p class="expoHeadinng">AGRI EXPO</p>
        </div>
        <div class="lobbyClass">
            <p class="lobbyName">Lobby</p>
        </div>
    </div>
                <div class="stallPageBg">
                    <!-- <img src="./assets/background_images/bgImg.png"> -->
                </div>
                <div class="stallContent" id="stallcontent">
                    <div class="stallContentInner">
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
                <div class="footer">
                <div class="footerContents">
                    <img src="./assets/logo/leftArrow.png" onclick="showStalls(-1)">
                    <div class="hallNumbers">
                        <p class="hallHeading">Hall no:</p>
                      
                    </div>
                    <img src="./assets/logo/rightArrow.png" onclick="showStalls(1)">
                </div>
            </div>
        
            `;
    
            document.body.appendChild(stallElement);
    
            const productSection = document.getElementById(`productSection_${index}`);
            if (productSection) {
                stall.products.slice(0, 5).forEach(product => {
                    const productImage = document.createElement("img");
                    productImage.src = product.producturl;
                    productImage.alt = product.productname;
                    productImage.addEventListener("click", function() {
                        showpopup(product.productname, product.price, product.producturl);
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
    debugger
        const stalls = document.querySelectorAll('.stall');
        stalls[currentStallIndex].classList.remove('active');
        currentStallIndex = (currentStallIndex + index + stalls.length) % stalls.length;
        stalls[currentStallIndex].classList.add('active');
        
    }
    // Call function to fetch data
    fetchdata();


function showpopup(prdname,prdprice,prdlink){
    document.getElementById('prd-name').textContent  =prdname
  document.getElementById('prd-price').textContent  =prdprice
  document.getElementById('prd-link').textContent  =prdlink
  document.getElementById('popup').style.display='block'
}

function changehall(indexvalue){ 
     document.body.innerHTML = '';

    // Update requestBody for fetching new data
    requestBody.start = (indexvalue - 1) * 10 + 1;
    requestBody.end = indexvalue * 10;
//document.getElementById("stallcontent").innerHTML=""
    // Fetch new data
    fetchdata();
}
function checkurlparm(urlparameter){
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