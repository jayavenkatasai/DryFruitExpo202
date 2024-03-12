// Function to fetch data from the API and update the scene
let requestBody={
    start:'1',
    end:'20',
    category:"0",
    businesscategorylevel1:"Finishing Machines",
    uno:'0'
}
const fetchDataFromAPI = () => {
    let apiurl = 'https://dev.marketcentral.in/rest/virtualExpo/general/virtualExhibitionDetails';
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
             
            } else {
                apivariable = data;
                console.log(apivariable)
                
                data.stalls.forEach((stall, stallIndex) => {
                        const stallContainerId = `stall${stallIndex + 1}`;  
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
                        for (let imageIndex = 0; imageIndex < 6; imageIndex++) {
                            const imageUrl = stall.products[imageIndex].producturl;
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
                                // Update the text and image source of the popup
                                // document.getElementById(`popup${stallIndex + 1}`).setAttribute("visible", true);
                                // document.getElementById(`productName${stallIndex + 1}`).setAttribute("value", imageDescription);
                                // document.getElementById(`popupimage${stallIndex + 1}`).setAttribute("src", imageUrl);
                                // document.getElementById(`productPrice${stallIndex + 1}`).setAttribute("value", `Price: ${stall.products[imageIndex].price} / ${stall.products[imageIndex].unit}`);
                                // Make the popuplane1 visible
                                // document.getElementById(`visitiproduct${stallIndex + 1}`).setAttribute("cursor-listener",
                                //     `targetPage:${stall.products[imageIndex].productlink}; uno: ${stall.uno}; type: visiting-website-via-products; pdtname: ${imageDescription}`);
                                // document.getElementById(`shareproduct${stallIndex + 1}`).addEventListener('click',
                                //     function showPopup() {
                                //         // var currentURL1 = window.location.href;
                                //         // var baseURL = currentURL1.substr(0, currentURL1.lastIndexOf('/') + 1); // Extracts the base URL
                                //         var newURL = `${stall.products[imageIndex].productlink}`;
                                //         var popupOverlay = document.getElementById('popup-overlay');
                                //         var currentURLInput = document.getElementById('currentURL');
                                //         currentURLInput.value = newURL;
                                //         document.getElementById('urlText').textContent = "Product Link"
                                //         popupOverlay.style.display = 'flex';
                                //         trackExpo(stall.uno, "share-product", imageDescription, ipAddress);
                                //         gtag("event", "share-stall", { 'page_title': "Hall-Page" });
                                //     });


                                // trackExpo(stall.uno, "product", imageDescription, ipAddress);
                           });


                            // // Create popup element
                            // const popupElement = document.createElement("a-entity");

                            // popupElement.setAttribute("id", `popup-img${imageIndex + 1}_${stallContainerId}`);


                            // // Create the content inside the popup
                            // const popupContent = `
                            //                 <a-plane color="#333" width="5" height="2"></a-plane>
                            //                 <a-text value="${imageDescription}" align="center" color="white" width="5" height="5" wrap-count="20"></a-text>
                            //             `;

                            // popupElement.innerHTML = popupContent;
                            // Append image and popup to the container
                            containerEntity.appendChild(imageElement);
                            //containerEntity.appendChild(popupElement);
                            // popupElement.setAttribute("position", "0.8 -0.65 0");
                            // popupElement.setAttribute("rotation", "0 90 0");
                            // popupElement.setAttribute("scale", "0.2 0.2 0.2");
                            // // popupElement.setAttribute("width","0.1")
                            // // popupElement.setAttribute("height","0.1")
                            // popupElement.setAttribute("visible", "false");
                            // //popupElement.setAttribute("visible", "false");
                            // console.log("the popup is the following");
                            // console.log(popupElement); 8
                            // Append container entity to the 
                            document.getElementById(stallContainerId).appendChild(containerEntity);

                            // imageElement.addEventListener('mouseenter', function () {
                            //     document.getElementById(`popup-img${imageIndex + 1}_${stallContainerId}`).setAttribute('visible', 'true');
                            // })

                            // imageElement.addEventListener('mouseleave', function () {
                            //     document.getElementById(`popup-img${imageIndex + 1}_${stallContainerId}`).setAttribute('visible', 'false');
                            // })


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

