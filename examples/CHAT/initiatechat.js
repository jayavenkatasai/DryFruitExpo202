var cname;
function initiatechat(){
    var name =  localStorage.getItem('name')
	cname = name.trim(); // Removes leading and trailing whitespace from the name and assigns it to cname
    cname = cname.replace(/\s+/g, "_"); // Replaces all spaces with underscores in cname
	console.log(name)
	console.log(cname)
   // cname=name
	var nameRegex = /^[a-zA-Z ]+$/;
    if (name.length >= 3 && nameRegex.test(name)) {
        document.getElementById("handleLabel").textContent = name;
		console.log(document.getElementById("handleLabel").textContent )
        // document.getElementById("chatForm").style.display = "block";
       // document.getElementById("startChatBtn").style.display="none";
      //  document.getElementById("businesname1").textContent= name+" "+"chats with"+" "+ business
        //debugger
		document.getElementById("end-name").textContent = name;	
		 $('.welcomeScreen').css('display','none');
            $('.mblmaxChat').css('display','block');
        const channaleName="private-"+stallId+"-"+currentUserID+"-"+cname;
		$("#channel").text("channel:"+channaleName)
		listenChannel(server,stallId,channaleName)
		bindChannel(currentUserID,$("form"))
			 var data = {
					   user_id:currentUserID,
					   stall_Id:stallId,
					   channel_Name:channaleName,
					   anonymous_Id:currentUserID,
					   anonymous_Name:cname,
					   isclosed:0
					   }
				 $.ajax({
					 type: "POST",
					 url: "https://dev.marketcentral.in/rest/virtualExpo/general/insertChat",
					// dataType: 'json',
					 contentType: 'application/json',
					 data: JSON.stringify(data),// now data come in this function
					 success: function (data, status, jqXHR) {
						 console.log(data);
					 },
					 error: function (jqXHR, status) {
						 // error handler
						 console.log(jqXHR);
						 //alert('fail' + status);
					 }
				  });
			} else {
				// alert("Please enter your name to start the chat.");
				 alert("Name should contain at least 3 alphabetical characters and no special characters.");
    // Optionally, you can focus back on the name field
                // $("name-field").focus();
			}
	
        }