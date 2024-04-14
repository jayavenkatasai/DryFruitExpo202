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
            align-items: start;
        }
        .senderChat {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
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
       
		.text-msg{
 border-radius: 12px;
            border: 2px solid #CACACA;
            background: #FFF;
            padding: 14px 20px;
            width: 100%;
		}
        .submit-btn{
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
        @media only screen and (max-width:767px){
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
// var currentUserID= localStorage.getItem('CustomerID')
console.log("the customer ID is ", currentUserID)
// 		$.get(
// 						"./getchannels.cfm",
// 						{
// 							stallid: stallId,
// 						},
// //                         $.ajax({
// //                         url: 'https://dev.marketcentral.in/rest/virtualExpo/general/getChat//0/0/'+stallId,
// //                      type: 'GET',
// //                      dataType: 'json', 
// //                       success: function(response) {
// //                      var data = $.trim(data) ;
// //                      var obj = JSON.parse(data);
// //                      obj=Object.keys(obj.channels);
// //                      listenChannels()
// //                             let htmlcontent="";
// //                             channels.forEach(d=>{
// //                                 htmlcontent=htmlcontent+"<a onClick=\"init('"+d+"')\">"+d+"</a>"
// //                             })
// //                             $("#channels").html(htmlcontent)
// //                    },
// //   error: function(xhr, status, error) {
// //     console.error('Error fetching data:', error);
// //     // Handle errors
// //   }
// // });

// //-----------------------
// // $.ajax({
// //     url: "https://dev.marketcentral.in/rest/virtualExpo/general/getChat/0/0/0/1234",
// //     type: 'GET',
// //     dataType: 'json',
// //     success: function(response) {
// //         const channels = response.map(channel => channel.CHANNEL_NAME);
// //         listenChannels(server, stallId, channels);
// //         bindChannel(stallId, $("form"));
// //         let htmlcontent = "";
// //         channels.forEach((d, i) => {
// //         const channelParts = d.split('-');
// //         const lastWord = channelParts[channelParts.length - 1];
// //             htmlcontent += "<a onClick=\"init('" + d + "'," + i + ")\">" + d + "</a><br>";
// //         });
// //         $("#channels").html(htmlcontent);
// //     },
// //     error: function(xhr, status, error) {
// //         console.error('Error fetching data:', error);
// //         // Handle errors
// //     }
// // });
// //-------------
// 						function(resp){
//                             const content=JSON.parse(resp)
//                             channels=Object.keys(content.channels);
//                             listenChannels(server,stallId,channels)
// 							bindChannel(stallId,$("form"))
//                             let htmlcontent="";
// 							var i=0;
//                             channels.forEach(d=>{
// 								const channelParts = d.split('-');
//                                 const customername = channelParts[channelParts.length - 1];
// 								var titleCaseCustomer = toTitleCase(customername);
// 								var firstTwoCharacters = customername.substring(0, 2).toUpperCase();
//                                 htmlcontent=htmlcontent+"<a  onClick=\"init('"+d+"',"+i+")\"><span>"+firstTwoCharacters+"</span>"+titleCaseCustomer+"</a><br>";
// 								//htmlcontent += "<a data-d='" + d + "'data-i='" + i + "' onClick=\"init('" + d + "'," + i + ")\" ><span>" + firstTwoCharacters + "</span>" + titleCaseCustomer + "</a><br>";
// 								i++;
//                             })
//                         //    $("#channels").html(htmlcontent)
// 							$(".minimizedChats").html(htmlcontent)
// 						}
// 					);	

$.ajax({
    url: "https://dev.marketcentral.in/rest/virtualExpo/general/getChat/0/"+currentUserID+"/0/0",
    type: 'GET',
    dataType: 'json',
    success: function(response) {
        const channels = response.map(channel => channel.CHANNEL_NAME);
        listenChannels(server, stallId, channels);
		console.log(response);
        bindChannel(stallId, $("form"));
        let htmlcontent = "";
        var i=0;
        channels.forEach(d=>{
		    const channelParts = d.split('-');
            const customername = channelParts[channelParts.length - 1];
		    var titleCaseCustomer = toTitleCase(customername);
		    var firstTwoCharacters = customername.substring(0, 2).toUpperCase();
            htmlcontent=htmlcontent+"<a  onClick=\"init('"+d+"',"+i+")\"><span>"+firstTwoCharacters+"</span>"+titleCaseCustomer+"</a><br>";
		    //htmlcontent += "<a data-d='" + d + "'data-i='" + i + "' onClick=\"init('" + d + "'," + i + ")\" ><span>" + firstTwoCharacters + "</span>" + titleCaseCustomer + "</a><br>";
		    i++;
         })
        $("#channels").html(htmlcontent);
		$(".minimizedChats").html(htmlcontent)
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

 function init(channaleName,index){
console.log(channaleName)
    var cname=channaleName
	console.log(cname)
	var channelParts = cname.split('-');
    var customername = channelParts[channelParts.length - 1];
	var titleCaseCustomer = toTitleCase(customername);
	console.log(titleCaseCustomer)
	document.getElementById("customer-head").textContent=titleCaseCustomer

	clearscreen()
	//To do get history of messages from cf api
	var chatLog = $( ".maximizedChat" );
	$.ajax({
    url: "https://dev.marketcentral.in/rest/virtualExpo/general/getChatHistory/0/"+channaleName,
    type: 'GET',
    dataType: 'json',
    success: function(response) {
     console.log(response);
	 response.forEach(function(chatData) {
	//	var textAlignment = (chatData.USER_ID === business) ? 'right' : 'left';

// var chatItem = $("<div class='senderChat'>").css('text-align', textAlignment).append(
//     $("<span class='handle'>").text(chatData.USER_ID),
//     $("<span class='message'>").text(chatData.MESSAGE)
// );

        // Create a chat item HTML structure for each response item
        // var chatItem = $("<div class='chatItem' >").css('text-align', textAlignment).append(
        //     $("<span class='handle'>").text(chatData.USER_ID),
        //     $("<span class='message'>").text(chatData.MESSAGE)
        // );
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
//	document.getElementById("chatLog").innerHTML = "";
	document.getElementById("maximizedChatid").innerHTML = "";
	//     $('.maximizedChat').click(function() {
    //     // Remove content from inner classes
    //     $(this).find('.senderChat,.senderName, .receiverChat,.receiverName').remove();
    // });

 }
	</script>
</head>
<body>
<!---
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
	--->
	 <div class="chatSection">
        <div class="chatSectionContents">
            <div class="leftChatSection">
                <p class="messageHeading">Messages</p>
                <div class="minimizedChats">
                    <a ><span>AK</span>Akshay Kumar</a>
                    <a ><span>SK</span>Siddharth Kumar</a>
                    <a ><span>NC</span>Nidhi Choudary</a>
                </div>
            </div>
            <div class="mblmaxChat">
                <div class="rightChatSection">
                    <div class="rightClassContents">
                        <img class="backArrow" src="./arrow-left.svg">
                        <p class="chatDetails"><span class="owner" id="owner-head">Akshay</span> chats with <span class="customer" id="customer-head">Deepika</span></p>
                        <div class="maximizedChat" id="maximizedChatid">
                           <!--- <div class="senderChat">
                                <span class="senderName">Akshay</span>
                                <p>Hey Deepika, have you heard about the MTExpo online for machine tools?</p>
                            </div>
                            <div class="receiverChat">
                                <span class="receiverName">Deepika</span>
                                <p>Yeah, I got the invite. When is it?</p>
                            </div>
                            <div class="senderChat">
                                <span class="senderName">Akshay</span>
                                <p>Feb 26th to March 10th. You interested?</p>
                            </div>
                            <div class="receiverChat">
                                <span class="receiverName">Deepika</span>
                                <p>Maybe. What's on?</p>
                            </div>
                            <div class="senderChat">
                                <span class="senderName">Akshay</span>
                                <p>Keynote talks, workshops, and cool machinery displays.</p>
                            </div>
                            <div class="receiverChat">
                                <span class="receiverName">Deepika</span>
                                <p>Sounds good. I'll check my schedule.</p>
                            </div>
                            
                            <div class="senderChat">
                                <span class="senderName">Akshay</span>
                                <p>Cool, let me know if you decide to join!</p>
                            </div> --->
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
            // $('.leftChatSection').css('display','none');
            // $('.mblmaxChat').css('display','block');
            // $('.backArrow').css('display','block');
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
var currentUserID ="<cfoutput>#url.uid#</cfoutput>";
//    document.getElementById("handleLabel").textContent = business;
   	document.getElementById("owner-head").textContent=business
    document.getElementById("handleLabel").textContent=business
</script>
</body>
</html>