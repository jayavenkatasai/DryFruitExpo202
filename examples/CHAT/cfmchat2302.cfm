
<!DOCTYPE HTML>
<html>
<head>
	<title>Pusher And ColdFusion Powered Chat</title>
	  
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script
        src="https://code.jquery.com/jquery-2.2.4.min.js"
        integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<style type="text/css">

		

		#chatLog {
			background-color: #FAFAFA ;
			border: 1px solid #D0D0D0 ;
		    border-radius: 16px;
			height: 300px ;
			margin-bottom: 10px ;
			overflow-x: hidden ;
			overflow-y: scroll ;
			padding: 10px 10px 10px 10px ;
			width: 500px ;
			}
#chatLog::-webkit-scrollbar {
    display: none;
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
			width: 400px ;
			border-radius:5px;
			}

		#submit {
			font-size: 12px ;
			width: 80px;
			border-radius:8px

			}
			#submit:hover {
    background-color: rgb(19, 127, 215);
    color: white;
    font-weight: bold;
    font-size: 16px;
}

		div.chatItem {
			border-bottom: 5px solid #F0F0F0 ;
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
	<link rel="stylesheet" href="./customerchat.css">
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="http://js.pusher.com/7.0/pusher.min.js"></script>
	<script type="text/javascript" src="./channel-subscribe.js"></script>

</head>

<body>

<div id="chat" class="chat-room">
<div class="chat-bg">
<button id="startChatBtn">Start Chat</button>

<form id="chatForm" class="form-items" style="display: none;">
  <div id="handle" style="display:none"> 
        <span id="handleLabel">RandomDude</span>
    </div>
	
	 <div id="businesname">
        <span id="businesname1">RandomDude</span>
    </div>
    <div id="typeNote">
        <span id="typeLabel" rel="">Unknown</span> is typing.
    </div>
<br>
 <h5 id="channel" style=""></h5>
    <div id="chatLog">
        
    </div>
    <div id="messageTools">
        <input id="message" type="text" name="message" />
        <input id="submit" type="submit" value="SEND" />
    </div>
</form>
</div>
</div>
	
</body>
<script type="text/javascript" src="./custom.js"></script>

	
	<script type="text/javascript">

//WEB_SOCKET_DEBUG= true
		// This is for compatability with browsers that don't yet
		// support Web Sockets, but DO support Flash.
		//
		// NOTE: This SWF can be downloaded from the PusherApp
		// website. It is a Flash proxy to the standard Web
		// Sockets interface.
		WebSocket.__swfLocation = "./WebSocketMain.swf";

        
		// When the DOM is ready, init the scripts.
		$(function(){
		

			// This is the user ID. This allows us to track the user
			// outside the context of the handle.
			
				var stallId =1234;
				
			
			
		

			// Create a Pusher server object with your app's key and
			// the channel you want to listen on. Channels are unique
			// to your application.
			Pusher.logToConsole=true;
// Generate a unique ID for each user.
		var currentUserID ="F08DCD99-A55F-33EA-2A16D752CCEFA3C6";
		console.log(currentUserID)
			var server = new Pusher("002a3766537221bf7086", {
  cluster: "ap2",
  encrypted:false,
  authEndpoint: "auth.cfm",
				auth: {
					params: {
						userID: currentUserID
					}
				}

});
var cname;
document.getElementById("startChatBtn").addEventListener("click", function() {
    var name = prompt("Please enter your name:");
    cname=name
    if (name) {
        document.getElementById("handleLabel").textContent = name;
        document.getElementById("chatForm").style.display = "block";
        document.getElementById("startChatBtn").style.display="none";
        document.getElementById("businesname1").textContent= name+" "+"chats with"+" "+ business

    const channaleName="private-"+stallId+"-"+currentUserID+"-"+cname;
$("#channel").text("channel:"+channaleName)

bindChannel(server,currentUserID,channaleName,$("form"))
    } else {
        alert("Please enter your name to start the chat.");
    }
    
});

		});
 var business = "sai";

	
	</script>

</html> 