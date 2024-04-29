<cfsetting showDebugOutput="No">
<!DOCTYPE HTML>
<html>
<head>
	<title>Pusher And ColdFusion Powered Chat</title>
	 <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	<style type="text/css">
 body{
            font-family: "Roboto", sans-serif;
            background: linear-gradient(180deg, rgba(161, 196, 253, 0.20) 0%, rgba(194, 233, 251, 0.60) 100%);
        }
        #handle{
            display:none;
        }
        .visibility{
            position:relative;
        }
        .offlineOnline{
            position:absolute;
            z-index:9;
            top:28%;
            right:10px;
        }
        .online span{
            width:10px!important;
            height:10px!important;
            background-color:green!important;
            border-radius:50%;
            font-size:14px;
            font-weight:600;
        }
        .offline{
            display:flex!important;
        }
        .online,.offline{
            display:flex;
            gap:5px;
            align-items:center;
        }
        .offline span{
            width:10px!important;
            height:10px!important;
            background-color:red!important;
            border-radius:50%;
            font-size:14px;
            font-weight:600;
        }
        .messageHeading{
            color: #000;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            text-align:center;
            padding:24px;
            border-bottom:1px solid #F1F1F1;
        }
        .minimizedChats {
            display: none;
            flex-direction: column;
            gap: 8px;
            padding: 12px 16px;
            height: 82vh;
            overflow-y: scroll;
        }
        .maximizedChat {
			display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 24px;
        }
        .chatSectionContents {
            background-color: #fff;
            display: flex;
            max-width: 1200px;
            margin: auto;
            height:97vh;
        }
        .minimizedChats a{
            color: #131313;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            text-decoration:none;
            display:flex;
            gap:15px;
            align-items:center;
            padding:10px;
            background-color: #F4F9FF;
            border-radius: 12px;
            border: 1px solid #F4F9FF; 
            max-width:100%;
            cursor: pointer;
        }
        .minimizedChats span{
            color:#1957B0;
            border-radius: 79.167px;
            border: 1px solid #1957B0;
            background: #FFF;
            height:30px;
            width:30px;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .chatDetails{
            color:#000;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            text-align:center;
            border-bottom:1px solid #F1F1F1;
            padding:24px;
        }
        p {
            margin: 0;
        }
        .senderName{
            color: #F65927;;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
        }
        .maximizedChat {
	padding: 24px;
	height: 55vh;
	overflow-y: scroll;
	scrollbar-width: none;
}
        .receiverName{
            color: #004C72;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
        }
        .receiverChat p, .senderChat p {
            color: #004C72;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            border-radius: 4px;
            background: #D8EFFA;
            padding: 8px 16px;
            margin-top: 3px;
        }
        .senderChat p{
            background: rgba(255, 135, 84, 0.34);
            border-radius: 4px;
            display: inline-block;
            padding: 8px 16px;
            overflow-wrap: anywhere;
        }
      .receiverChat {
            display: flex;
            flex-direction: column;
            align-items: start;
            padding-bottom:12px;
        }
        .senderChat {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding-bottom:12px;
        }
        .leftChatSection{
            width:30%;
        }
        .mblmaxChat{
            width: 70%;
        }
        .rightChatSection {
            display: none;
            flex-direction: column;
            justify-content: space-between;
            border-left: 1px solid #F1F1F1;
            height: 98vh;
            overflow-y: scroll;
        }
        .sendSection ::placeholder{
            color:#000;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            opacity:0.4;
        }
       
		.text-msg{
            border-radius: 7px;
            border: 2px solid #CACACA;
            background: #FFF;
            padding: 14px 20px;
            width: 100%;
		}
        .submit-btn{
            border-radius: 7px;
            background:#F65927;
            padding: 14px 21px;
            color: #fff;
            text-decoration: none;
            border:none;
        }
		
        .sendSection {
            display: flex;
            align-items: center;
            gap: 13px;
            width: 94%;
            padding: 24px;
        }
        .rightChatSection::-webkit-scrollbar {
            display: none;
        }
        .rightChatSection{
            -ms-overflow-style: none;
             scrollbar-width: none; 
        }
        .minimizedChats .active {
            border: 1px solid #1957B0; 
            background: #E1EDFF; 
        }
		.channelName a.active{
			 border: 1px solid #1957B0; 
            background: #E1EDFF; 
		}
        .backArrow {
            position: absolute;
            top: 30px;
            display: none;
            left: 35px;
            cursor: pointer;
        }
        @media only screen and (max-width:992px){
            .mblmaxChat{
                display:none;
            }
            .minimizedChats {
                height: 65vh;
                overflow-y: scroll;
            }
            .leftChatSection {
                width: 100%;
            }
            .mblmaxChat{
                width:100%;
            }
            .sendSection {
                width: unset;
            }
            .chatDetails {
                padding: 24px 60px;
            }
            .minimizedChats a.active:hover .mblmaxChat {
                display: block;
            }
        }
        @media only screen and (max-width:767px){
            .maximizedChat,.sendSection{
                padding: 24px 12px;
            }
            .sendSection input {
                padding: 12px 10px;
            }
        }
        @media only screen and (max-width:400px){
            .chatDetails {
                font-size: 18px;
            }
        }
#messagesoverlay{
    height:100%;
    width: 40%;
    background-color:"white";
}
#content-p{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
#messages-content{
    display: none;
    justify-content: center;
    align-items: center;
    height: 100%;
}
	</style>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://js.pusher.com/7.0/pusher.min.js"></script>
	<script type="text/javascript" src="./channel-subscribe.js"></script>
	<script type="text/javascript" src="./ua-parser.js"></script>
	<script type="text/javascript">

		WebSocket.__swfLocation = "./WebSocketMain.swf";

	<cfoutput>
				var stallId =#url.stallid#;
				
			</cfoutput>
			// Create a Pusher server object with your app's key and
			// the channel you want to listen on. Channels are unique
			// to your application.
			//Pusher.logToConsole=true;

			var server = new Pusher("1847dd0c5202f9b24097", {
  cluster: "ap2",
  encrypted:false,
  authEndpoint: "auth.cfm",
				auth: {
					params: {
						userID: stallId
					}
				}

});

		// When the DOM is ready, init the scripts.
		$(function(){

			// This is the user ID. This allows us to track the user
			// outside the context of the handle.
		

var channels=[];

$.ajax({
    url: "https://www.marketcentral.in/rest/virtualExpo/general/getChat/0/0/0/"+stallId+"/3",
    type: 'GET',
    dataType: 'json',
    success: function(response) {
	console.log(response);
    
        const channels = response.map(channel => channel.CHANNEL_NAME);
        listenChannels(server, stallId, channels);
        bindChannel(business, $("form"));
        let htmlcontent = "";
        var i=0;
        channels.forEach(d=>{
             const channelObj = response.find(channel => channel.CHANNEL_NAME === d); 
		    const channelParts = d.split('-');
            const customername = channelParts[channelParts.length - 1];
		    var titleCaseCustomer = toTitleCase(customername);
		    var firstTwoCharacters = customername.substring(0, 2).toUpperCase();
             var status = channelObj.IS_CLOSED ? "Offline" : "Online"; // Check the is_closed flag
            console.log(status)
           
   htmlcontent += "<div class=\"visibility\"><a onClick=\"init('" + d + "'," + i + ")\"><span>" + firstTwoCharacters + "</span>" + titleCaseCustomer + "</a><br><div class=\"offlineOnline\"><p class=\"" + (channelObj.IS_CLOSED ? "offline" : "online") + "\"><span></span>" + status + "</p></div></div>";
    i++;
             // Accessing elements with class '.online' and '.offline'
    // var onlineElement = document.querySelector('.online');
    // var offlineElement = document.querySelector('.offline');
    
    // // Checking if elements exist before setting their styles
    // if (onlineElement && offlineElement) {
    //     if (status === 'Offline') {
    //         onlineElement.style.display = 'block';
    //         offlineElement.style.display = 'none';
    //     } else {
    //         onlineElement.style.display = 'none';
    //         offlineElement.style.display = 'block';
    //     }
    // }
//htmlcontent = htmlcontent + "<div class=\"visibility\"><a onClick=\"init('" + d + "'," + i + ")\"><span>" + firstTwoCharacters + "</span>" + titleCaseCustomer + "</a><br><div class=\"offlineOnline\"><p class=\"online\"><span></span>Online</p><p class=\"offline\"><span></span>Offline</p></div></div>";i++;
         })
        $("#channels").html(htmlcontent);
		$(".minimizedChats").html(htmlcontent)
            $(".minimizedChats").css("display", "flex");
          $("#messages-content").css("display", "none");
            if (response.length === 0) {
            $("#messages-content").css("display", "flex");
        } else {
            $("#messages-content").css("display", "none");
        }
    },
    error: function(xhr, status, error) {
        console.error('Error fetching data:', error);
     //    $("#messages-content").css("display", "flex");
        // Handle errors
    }
});
 server.bind("error", function (err) {
  console.log(err)
});

			// Get references to our DOM elements.
			

		});

 function init(channaleName,index){
console.log(channaleName)
    var cname=channaleName
	console.log(cname)
	var channelParts = cname.split('-');
    var customername = channelParts[channelParts.length - 1];
	var titleCaseCustomer = toTitleCase(customername);
	console.log(titleCaseCustomer)
	document.getElementById("customer-head").textContent=titleCaseCustomer
    document.querySelector('.rightChatSection').style.display = "flex"
document.getElementById('content-p').style.display="none"

	clearscreen()
	//To do get history of messages from cf api
	var chatLog = $( ".maximizedChat" );
	$.ajax({
    url: "https://www.marketcentral.in/rest/virtualExpo/general/getChatHistory/0/"+channaleName,
    type: 'GET',
    dataType: 'json',
    success: function(response) {
     console.log(response);
	 response.forEach(function(chatData) {
		if(chatData.USER_ID === business){
			  var chatItem = $("<div class='senderChat' style='text-align: right;'>" +
							"<span class='senderName'>" +
						   chatData.USER_ID+
							"</span>" + 
							"<p>" +
							chatData.MESSAGE+
						"</p>" +
						"</div>")
		}else{
			 var chatItem = $("<div class='receiverChat' style='text-align: right;'>" +
							"<span class='receiverName'>" +
						   chatData.USER_ID+
							"</span>" + 
							"<p>" +
							chatData.MESSAGE+
						"</p>" +
						"</div>")
		}
        // Append the chat item to the chat log
        chatLog.append(chatItem);
    });

    // Scroll the chat log to the bottom
  
    },
    error: function(xhr, status, error) {
        console.error('Error fetching data:', error);
        // Handle errors
    }
});
	
  

	selectChannel(channaleName,index)
 }
 function toTitleCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
 function clearscreen(){
	document.getElementById("maximizedChatid").innerHTML = "";
	

 }
	</script>
</head>
<body>

	 <div class="chatSection">
        <div class="chatSectionContents">
            <div class="leftChatSection">
                <p class="messageHeading">Messages</p>
                 <div id="messages-content">
                <p >You do not have any visitors. Stay tuned.</p>
                </div>
                <div class="minimizedChats">
                    <a ><span>AK</span>Akshay Kumar</a>
                    <a ><span>SK</span>Siddharth Kumar</a>
                    <a ><span>NC</span>Nidhi Choudary</a>
                </div>
            </div>
            <div class="mblmaxChat">
             <div id="content-p">
            <p>Please Select any person to Chat</p>
            </div>
                <div class="rightChatSection">
                    <div class="rightClassContents">
                        <img class="backArrow" src="./arrow-left.svg">
                        <p class="chatDetails"><span class="owner" id="owner-head">Akshay</span> chats with <span class="customer" id="customer-head">Deepika</span></p>
                        <div class="maximizedChat" id="maximizedChatid">
                           
                        </div>
                    </div>
					<form>
                    <div class="sendSection">
                    <div id="handle">
			<span id="handleLabel">sai</span>
		</div>
                        <input id="message" type="text" name="message" class="text-msg"placeholder="Type a message">
                        
						<input id="submit" type="submit" value="SEND" class="submit-btn" />
                    </div>
					</form>
                </div>
            </div>
        </div>
    </div>
<script>

$(document).on('click', '.minimizedChats a', function() {
            $('.minimizedChats a.active').removeClass('active');
            $(this).addClass('active');
		
         })
         function handleScreenSizeChange(mql) {
    if (mql.matches) {
$(document).on('click', '.minimizedChats a', function() {
            $('.minimizedChats a.active').removeClass('active');
            $(this).addClass('active');
			//alert("before")
            $('.leftChatSection').css('display','none');
			//alert("after")
            $('.mblmaxChat').css('display','block');
            $('.backArrow').css('display','block');

         })
         $('.backArrow').click(function(){
            $('.leftChatSection').css('display','block');
            $('.mblmaxChat').css('display','none');
            $('.backArrow').css('display','none');
         })
    } else {
        // Screen width is greater than 767 pixels
        // You can add additional logic here if needed
    }
}

// Create a MediaQueryList object
var mql = window.matchMedia('(max-width: 767px)');
console.log(mql)
// Initial check of the screen size
handleScreenSizeChange(mql);

// Add a listener for screen size changes
mql.addListener(handleScreenSizeChange);
</script>
<script>
var business = "<cfoutput>#url.bname#</cfoutput>";
//    document.getElementById("handleLabel").textContent = business;
   	document.getElementById("owner-head").textContent=business
    document.getElementById("handleLabel").textContent=business
</script>
</body>
</html>