<cfsetting showDebugOutput="No">
<!DOCTYPE HTML>
<html>
<head>
	<title>Pusher And ColdFusion Powered Chat</title>
	<style type="text/css">
 body{
            font-family: "Roboto", sans-serif;
            background: linear-gradient(180deg, rgba(161, 196, 253, 0.20) 0%, rgba(194, 233, 251, 0.60) 100%);
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
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 12px 16px;
        }
        .maximizedChat {
            padding: 24px;
        }
        .chatSectionContents {
            background-color: #fff;
            display: flex;
            max-width: 1200px;
            margin: auto;
            height:100vh;
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
        .senderName,.receiverName{
            color: #1957B0;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
        }
        .receiverChat p,.senderChat p{
            color: #000;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            border-radius: 12px;
            background: #F1F1F1; 
            padding: 8px 16px; 
        }
        .receiverChat {
            display: flex;
            flex-direction: column;
            align-items: end;
        }
        .senderChat {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .leftChatSection{
            width:30%;
        }
        .mblmaxChat{
            width: 70%;
        }
        .rightChatSection {
            display: flex;
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
        .sendSection input {
            border-radius: 12px;
            border: 2px solid #CACACA;
            background: #FFF;
            padding: 14px 20px;
            width: 100%;
        }
        .sendSection a{
            border-radius: 12px;
            background: #1957B0; 
            padding: 8px 21px; 
            color:#fff;
            text-decoration:none;
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
        .backArrow {
            position: absolute;
            top: 30px;
            display: none;
            left: 35px;
            cursor: pointer;
        }
        @media only screen and (max-width:767px){
            .mblmaxChat{
                display:none;
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
		form {
			width: 500px ;
			}

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

	</style>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="http://js.pusherapp.com/4.0/pusher.min.js"></script>
	<script type="text/javascript" src="./channel-subscribe.js"></script>
	<script type="text/javascript">

//WEB_SOCKET_DEBUG= true
		// This is for compatability with browsers that don't yet
		// support Web Sockets, but DO support Flash.
		///
		// NOTE: This SWF can be downloaded from the PusherApp
		// website. It is a Flash proxy to the standard Web
		// Sockets interface.
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
		$.get(
						"./getchannels.cfm",
						{
							stallid: stallId,
						},
//                         $.ajax({
//                         url: 'https://dev.marketcentral.in/rest/virtualExpo/general/getChat//0/0/'+stallId,
//                      type: 'GET',
//                      dataType: 'json', 
//                       success: function(response) {
//                      var data = $.trim(data) ;
//                      var obj = JSON.parse(data);
//                      obj=Object.keys(obj.channels);
//                      listenChannels()
//                             let htmlcontent="";
//                             channels.forEach(d=>{
//                                 htmlcontent=htmlcontent+"<a onClick=\"init('"+d+"')\">"+d+"</a>"
//                             })
//                             $("#channels").html(htmlcontent)
//                    },
//   error: function(xhr, status, error) {
//     console.error('Error fetching data:', error);
//     // Handle errors
//   }
// });
						function(resp){
                            const content=JSON.parse(resp)
                            channels=Object.keys(content.channels);
                            listenChannels(server,stallId,channels)
							bindChannel(stallId,$("form"))
                            let htmlcontent="";
							var i=0;
                            channels.forEach(d=>{
								const channelParts = d.split('-');
                                const customername = channelParts[channelParts.length - 1];
								var titleCaseCustomer = toTitleCase(customername);
								var firstTwoCharacters = customername.substring(0, 2);
                                htmlcontent=htmlcontent+"<a onClick=\"init('"+d+"',"+i+")\">"+titleCaseCustomer+"</a><br>";
								i++;
                            })
                            $("#channels").html(htmlcontent)
						}
					);	

 server.bind("error", function (err) {
  console.log(err)
});

			// Get references to our DOM elements.
			

		});

 function init(channaleName,index){
	 clearscreen()
	//To do get history of messages from cf api
	var chatLog = $( "#chatLog" );
	$.ajax({
    url: "https://dev.marketcentral.in/rest/virtualExpo/general/getChatHistory/0/"+channaleName,
    type: 'GET',
    dataType: 'json',
    success: function(response) {
     console.log(response);
	 response.forEach(function(chatData) {
        // Create a chat item HTML structure for each response item
        var chatItem = $("<div class='chatItem' style='text-align: left;'>").append(
            $("<span class='handle'>").text(chatData.USER_ID),
            $("<span class='message'>").text(chatData.MESSAGE)
        );

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
	document.getElementById("chatLog").innerHTML = "";
 }
	</script>
</head>
<body>

	<h1>
		Pusher And ColdFusion Powered Chat
	</h1>
    <h1>Channels Lis</h1>
    <h2 id="channels">
    </h2>

	<form>

		<div id="chatLog">
			<!--- To be populated dynamically. --->
		</div>

		<div id="handle">
			<span id="handleLabel">sai</span>
			<span id="handleTools">( <a>Change Handle</a> )</span>
		</div>

		<div id="typeNote">
			<span id="typeLabel" rel="">Unknown</span> is typing.
		</div>

		<div id="messageTools">
		<input id="name" type="text" name="Name" />
			<input id="message" type="text" name="message" />
			<input id="submit" type="submit" value="SEND" />
		</div>

	</form>
<script>
var business = "<cfoutput>#url.bname#</cfoutput>";
   document.getElementById("handleLabel").textContent = business;
</script>
</body>
</html>