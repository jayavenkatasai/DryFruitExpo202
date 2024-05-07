

let stallsData;
var urlendpoint = '';
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
        exhibition_ID: '3',
        start: '1',
        end: '10',
        category: "0",
        businesscategorylevel1: "Diagnostic Supplies, Products & Equipment",
        uno: '0'
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
                renderStalls(); // Call renderStalls after successfully fetching data
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
        if (!Array.isArray(stallsData.stalls)) {
            console.error('stallsData.stalls is not an array:', stallsData.stalls);
            return;
        }
        stallsData.stalls.forEach(stall => {
            const stallElement = document.createElement("div");
            stallElement.classList.add("stall");
            stallElement.innerHTML = `
                <h2>${stall.name}</h2>
                <img src="${stall.vendorInfo.vendorimage}" alt="${stall.vendorInfo.vendorName}">
                <p><strong>Vendor Name:</strong> ${stall.vendorInfo.vendorName}</p>
                <p><strong>Company Name:</strong> ${stall.vendorInfo.companyname}</p>
                <p><strong>Contact:</strong> ${stall.vendorInfo.contactNumber}</p>
                <p><strong>Email:</strong> <a href="mailto:${stall.vendorInfo.email}">${stall.vendorInfo.email}</a></p>
                <h3>Products:</h3>
                <ul>
                    ${stall.products.map(product => `
                        <li>
                        <img  src="${product.producturl}" alt="${product.productname}" onclick="showpopup('${product.productname}', '${product.price}', '${product.producturl}')" >
                        </li>
                    `).join('')}
                </ul>
            `;
            expoContainer.appendChild(stallElement);
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