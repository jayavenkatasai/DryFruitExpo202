

<!DOCTYPE HTML>
<html>
<head>
	<title>Pusher And ColdFusion Powered Chat</title>
	<style type="text/css">

		
.parent-bg{
    display: flex;
    flex-direction: row;
    width:100%;
    height:100vh
}
.prnt{
    width:100%;
}
.from-prnt{
    width:100%;
    margin-top:3%;
}
		#chatLog {
			background-color: #FAFAFA ;
			border: 1px solid #D0D0D0 ;
			height: 400px ;
			margin-bottom: 10px ;
			overflow-x: hidden ;
			overflow-y: scroll ;
			padding: 20px;
			width: 80% ;
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
            .selected {
  background-color: #ccc; /* Change background color for selected items */
}

		div.myChatItem span.handle {
			color: red ;
			}
            ul {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
  width:80%
}

ul li {
  border: 1px solid #ddd; /* Add a thin border to each list item */
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6; /* Add a grey background color */
  padding: 12px; /* Add some padding */
}

ul li:active {
  background-color: #ccc; /* Change background color on selection */
}
	</style>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://js.pusher.com/7.0/pusher.min.js"></script>
	<script type="text/javascript" src="./channel-subscribe.js"></script>
	
</head>
<body>
<div class="parent-bg">
<div class="prnt">
    <h2>Your Chats</h2>
    
    <h2 id="channels" class="channels">
    </h2>
</div>
<div class="from-prnt">
	<form>

		<div id="chatLog">
			
		</div>

		<div id="messageTools">
			<input id="message" type="text" name="message" />
			<input id="submit" type="submit" value="SEND" />
		</div>

	</form>
    </div>
</div>
<script type="text/javascript">

//WEB_SOCKET_DEBUG= true
		// This is for compatability with browsers that don't yet
		// support Web Sockets, but DO support Flash.
		///
		// NOTE: This SWF can be downloaded from the PusherApp
		// website. It is a Flash proxy to the standard Web
		// Sockets interface.
		WebSocket.__swfLocation = "./WebSocketMain.swf";

	
			var stallId =1234;
			

			// Create a Pusher server object with your app's key and
			// the channel you want to listen on. Channels are unique
			// to your application.
			//Pusher.logToConsole=true;

			var server = new Pusher("002a3766537221bf7086", {
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
						function(resp){
                            const content=JSON.parse(resp)
                            console.log(content);
                            channels=Object.keys(content.channels);
                            let htmlcontent="";
                            // channels.forEach(d=>{
                            //     htmlcontent=htmlcontent+"<a onClick=\"init('"+d+"')\">"+d+"</a><br>"
                            // })

                               channels.forEach(d => {
        // Split the channel name by '-' and get the last element
        const channelParts = d.split('-');
        const lastWord = channelParts[channelParts.length - 1];
        htmlcontent = htmlcontent + "<ul><li  onclick=\"changeColor(this)\"><a onClick=\"init('"+d+"')\">" + "Message From"+" "+lastWord+" "+ "</a></li></ul>";
    });
                            $("#channels").html(htmlcontent)
						}
					);	

 server.bind("error", function (err) {
  console.log(err)
});

			// Get references to our DOM elements.
			

		});

function changeColor(element) {
  var listItems = document.querySelectorAll('ul li');
  listItems.forEach(function(item) {
    item.classList.remove('selected');
  });
  element.classList.add('selected');
}

 function init(channaleName){

    bindChannel(server,stallId,channaleName,$("form"))

 }
	</script>
</body>
</html> 