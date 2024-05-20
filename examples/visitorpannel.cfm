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
        .owner,.chatsText{
            display:none;
        }
        .sendSection input:focus{
            border-color:#299941!important;
        }
        .customer{
            text-align:center;
        }
         .visibility{
            position:relative;
        }
        .mainNotifications{
           position:absolute;
           top:28%;
           right:10px;
           height:20px;
           width:20px;
           background:#299941;
           border-radius:50%;
           color:#fff;
           font-size:12px;
           font-weight:700;
           display:flex;
           justify-content:center;
           align-items:center;
        }
        .messageHeading{
            color: #007A54;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            text-align:center;
            padding:24px;
            border-bottom:1px solid #F1F1F1;
        }
        /* .visitorChatClose{
            cursor:pointer;
        }
        .visitorMsgIcons {
            position: absolute;
            top: 32px;
            right: 33px;
            display:flex;
            gap:10px;
            align-items:center;
        }
        .visitorMsgIcons a{
            display:none;
        } */
  #handle{
            display:none;
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
            height:96vh;
        }
        .minimizedChats a{
            color: #007A54;
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
        .visiblity{
            position:relative;
        }
        .minimizedChats span{
            color:#299941;
            border-radius: 79.167px;
            background: #FFF;
            height:30px;
            width:30px;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .chatDetails{
            color:#007A54;
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
            color: #299941;;
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
        .receiverChat p{
            color: #004C72;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            border-radius: 4px;
            background: #D8EFFA;
            padding: 8px 16px;
            margin-top: 3px;
        }
        /* .senderChat p {
            width:100%;
        } */
        .senderChat p{
            background: rgba(255, 135, 84, 0.34);
            border-radius: 4px;
            display: inline-block;
            padding: 8px 16px;
            overflow-wrap: anywhere;
        }
        /* .senderChat p span {
            display: inline-block;
            padding: 8px 16px;
            overflow-wrap: anywhere;
        } */
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
            background:#299941;
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
            padding: 12px 24px 24px 24px;
        }
        .rightChatSection::-webkit-scrollbar {
            display: none;
        }
        .rightChatSection{
            -ms-overflow-style: none;
             scrollbar-width: none; 
        }
        .minimizedChats .active {
            border: 1px solid #299941#; 
            background: #CDEBD0; 
        }
		.channelName a.active{
			 border: 1px solid #299941; 
            background: #CDEBD0; 
		}
        .backArrow {
            position: absolute;
            top: 30px;
            display: none;
            left: 35px;
            cursor: pointer;
        }
        @media only screen and (max-width:1470px){
            #chat-ui-room {
                height: 400px;
            }
        }
        @media only screen and (max-width:992px){
        .maximizedChat {
            height:65vh;
        }
        .visitorMsgIcons a{
            display:flex;
        }
        .leftChatSection {
            width: 100%;
        }
        #hallButtons{
            z-index:999!important;
        }
        .mblmaxChat{
                display:none;
            }
            .minimizedChats {
                height: 74vh;
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
                position: fixed;
                bottom: 10px;
                width: 93%;
                background-color:#fff;
            }
            .chatDetails {
                padding: 24px 60px;
            }
            .minimizedChats a.active:hover .mblmaxChat {
                display: block;
            }
        }
        /* @media only screen and (max-width:767px){
            .mblmaxChat{
                display:none;
            }
            .minimizedChats {
                height: 74vh;
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
        } */
        @media only screen and (max-width:767px){
            .maximizedChat,.sendSection{
                padding: 24px 12px;
                width:90%;
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
<!--- 	
		#chatLog {
			background-color: #FAFAFA ;

			border: 1px solid #D0D0D0 ;
			height: 200px ;
			margin-bottom: 10px ;
			overflow-x: hidden ;
			overflow-y: scroll ;
			padding: 10px 10px 10px 10px ;
			width: 480px ;
			}

		#handle {
			float: left ;
			margin-bottom: 5px ;
			}

		#handleLabel {
			font-weight: bold ;
			}

		#handleTools {
			font-size: 90% ;
			font-style: italic ;
			}

		#handleTools a {
			color: #333333 ;
			}

		#typeNote {
			color: #999999 ;
			display: none ;
			float: right ;
			font-style: italic ;
			}

		#message {
			clear: both ;
			font-size: 16px ;
			width: 420px ;
			}

		#submit {
			font-size: 16px ;
			width: 70px ;
			}

		div.chatItem {
			border-bottom: 1px solid #F0F0F0 ;
			margin: 0px 0px 3px 0px ;
			padding: 0px 0px 3px 0px ;
			}

		div.chatItem span.handle {
			color: blue ;
			font-weight: bold ;
			}

		div.myChatItem span.handle {
			color: red ;
			}
--->
	</style>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://js.pusher.com/7.0/pusher.min.js"></script>
	<script type="text/javascript" src="./channel-subscribe.js"></script>
	<script type="text/javascript" src="./ua-parser.js"></script>
	<script type="text/javascript">

//WEB_SOCKET_DEBUG= true
		// This is for compatability with browsers that don't yet
		// support Web Sockets, but DO support Flash.
		///
		// NOTE: This SWF can be downloaded from the PusherApp
		// website. It is a Flash proxy to the standard Web
		// Sockets interface.
		WebSocket.__swfLocation = "./WebSocketMain.swf";
var business = "<cfoutput>#url.bname#</cfoutput>";
var currentUserID ="<cfoutput>#url.uid#</cfoutput>";

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
						userID:currentUserID
					}
				}

});

		// When the DOM is ready, init the scripts.
		$(function(){

			// This is the user ID. This allows us to track the user
			// outside the context of the handle.
		

var channels=[];
// var currentUserID= localStorage.getItem('CustomerID')
console.log("the customer ID is ", currentUserID)

$.ajax({
    url: "https://www.marketcentral.in/rest/virtualExpo/general/getChat/0/"+currentUserID+"/0/0/3",
    type: 'GET',
    dataType: 'json',
    success: function(response) {
        const channels = response.map(channel => channel.CHANNEL_NAME);
        listenChannels(server, stallId, channels);
		console.log(response);
        bindChannel(business, $("form"));
        let htmlcontent = "";
        var i=0;
        channels.forEach(d=>{
		    const channelParts = d.split('-');
            // const customername = channelParts[channelParts.length - 1];
		    // var titleCaseCustomer = toTitleCase(customername);
            const businessName = response[i].BUSINESS_NAME; // Get the BUSINESS_NAME from the response
             var titleCaseCustomer = toTitleCase(businessName);
            var firstTwoCharacters = businessName.substring(0, 2).toUpperCase();
		   // var firstTwoCharacters = customername.substring(0, 2).toUpperCase();
           if(response[i].UNREAD_MESSAGE_COUNT > 0){
                 htmlcontent = htmlcontent + "<div class=\"visibility\"><a onClick=\"init('" + d + "'," + i + ",'" + businessName + "')\"><span>" + firstTwoCharacters + "</span>" + titleCaseCustomer + "</a><br><div  id="+response[i].CHANNEL_NAME+" class=\"mainNotifications\">"+response[i].UNREAD_MESSAGE_COUNT+"</div></div>"; i++;
           }else{
                 htmlcontent = htmlcontent + "<div class=\"visibility\"><a onClick=\"init('" + d + "'," + i + ",'" + businessName + "')\"><span>" + firstTwoCharacters + "</span>" + titleCaseCustomer + "</a><br></div>"; i++;
           }
           

         })
        $("#channels").html(htmlcontent);
		$(".minimizedChats").html(htmlcontent)
        $(".minimizedChats").css("display", "flex");
          $("#messages-content").css("display", "none");
        
    },
    error: function(xhr, status, error) {
        console.error('Error fetching data:', error);
        // Handle errors
    }
});
 server.bind("error", function (err) {
  console.log(err)
});
		});

 function init(channaleName,index,businessname){
console.log(channaleName)
    var cname=channaleName
	console.log(cname)
	var channelParts = cname.split('-');
    var customername = channelParts[channelParts.length - 1];
	var titleCaseCustomer = toTitleCase(customername);
	console.log(titleCaseCustomer)
	document.getElementById("customer-head").textContent=businessname
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

const ReqBody = {"channel_name": channaleName};

console.log(JSON.stringify(ReqBody));

const xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.marketcentral.in/rest/virtualExpo/general/updateReadStatus", true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
        } else {
            console.error("Error:", xhr.status);
        }
    }
};
xhr.send(JSON.stringify(ReqBody));

if (document.getElementById(channaleName)) {
    document.getElementById(channaleName).style.display = "none";
}

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
                <p >You have not visited any stalls yet!</p>
                </div>
<!---    changes   start           --->
<!---   <div id="messagesoverlay">
<P id="content"> NO Messages appear</p>
</div>
 --->
<!--- changes end  --->
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
                        <p class="chatDetails"><span class="owner" id="owner-head">Akshay</span> <span class="chatsText">chats with</span> <span class="customer" id="customer-head">Deepika</span></p>
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
		//alert("heyyy")
            $('.leftChatSection').css('display','none');
            $('.mblmaxChat').css('display','block');
            $('.backArrow').css('display','block');
         })
          $('.backArrow').click(function(){
            $('.leftChatSection').css('display','block');
            $('.mblmaxChat').css('display','none');
            $('.backArrow').css('display','none');
         })
        
</script>
<script>

   	document.getElementById("owner-head").textContent=business
    document.getElementById("handleLabel").textContent=business
</script>
</body>
</html>