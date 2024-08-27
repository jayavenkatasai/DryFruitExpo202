
    // ---------------------New Code----------------------------------


    // Function to render stalls
    function renderStalls() {
        expoContainer.innerHTML = "";
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
                    ${stall.products.slice(0, 5).map(product => `
                        <li>
                        <img  src="${product.producturl}" alt="${product.productname}" onclick="showpopup('${product.productname}', '${product.price}', '${product.producturl}')" >
                        </li>
                    `).join('')}
                </ul>
            `;
            expoContainer.appendChild(stallElement);
        });
    
        const stallButtonsContainer = document.getElementById("stall-buttons");
        stallButtonsContainer.innerHTML = "";
    
        for (let i = 1; i <= stallsData.stalls.length; i++) {
            const buttonDiv = document.createElement("div");
            buttonDiv.classList.add("stall-button");
    
            buttonDiv.textContent = `Stall ${i}`;
            buttonDiv.addEventListener("click", function() {
                highlightButton(buttonDiv);
                showStall(i - 1);
            });
    
            stallButtonsContainer.appendChild(buttonDiv);
        }
    
        const HallButtonsContainer = document.getElementById("hall-buttons");
    }
    
    function highlightButton(button) {
        // Remove the highlighted class from all buttons
        document.querySelectorAll('.stall-button').forEach(btn => {
            btn.classList.remove('highlighted-button');
        });
    
        // Add the highlighted class to the clicked button
        button.classList.add('highlighted-button');
    }
    
    function showStall(index) {
        const stalls = document.querySelectorAll('.stall');
        
        stalls.forEach(stall => {
            stall.classList.remove('active');
        });
        stalls[currentStallIndex].classList.remove('active');
    
        currentStallIndex = (index + stalls.length) % stalls.length;
        stalls[currentStallIndex].classList.add('active');
    }