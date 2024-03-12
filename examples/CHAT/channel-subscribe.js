var selectedChannel;
var selectedChannelobj;
var allChannels;

function listenChannel(server,stallId,chnames){
	selectedChannelobj = server.subscribe(chnames);
	selectedChannel=chnames;
	bindChannels(stallId,selectedChannelobj)
}
	function listenChannels(server,stallId,chnames){

		allChannels = chnames.map(channelName => server.subscribe(channelName));
		allChannels.forEach(ch=> {
		bindChannels(stallId,ch)
	})

   
}

function bindChannels(stallId,channel){
    channel.bind("pusher:subscription_succeeded", (data) => {
        console.log('subscription_succeeded',data)
    });
	var chatLog = $( ".maximizedChat");
    // Now that we have the pusher connection for a given
			// channel, we want to listen for certain events to come
			// over that channel (chat messages).
			channel.bind(
				"client-sendmessage",
				function( chatData ) {
                    if(chatData.channel!==selectedChannel){
                        //to do for othe chats
                        return
                    }
					console.log("thedata")
					console.log(chatData.userID)
					var chatItem = $(
						"<div class='receiverChat'>" +
							"<span class='recieverName'>" +
								chatData.userID +
							"</span>"+
							"<p>" +
								chatData.message +
							"</p>" +
						"</div>"
					);
						// Append the chat item to the chat log.
						chatLog.append( chatItem );

						// Scroll the chat item to the bottom.
						chatLog.scrollTop( chatLog.outerHeight() );
					if (chatData.userID == stallId){

						// Add the "mine" item.
						chatItem.addClass( "myChatItem" );

					}
				}
			);

			// Let's also bind to the pusher connection for the the
			// type event so that we can see when given people start
			// and stop typing.
          
			channel.bind(
				"client-typing",
				function( typeData ){
                    if(typeData.channel!==selectedChannel){
						return;
                    }
					// First, check to see if this is an event for
					// THIS user. If so, we can ignore it.
					if (typeData.userID !== stallId){
						return;
					}

					// Now, check to see if the event is a start
					// event. This will take presendence over the
					// stop event for visual display.
					if (typeData.isTyping){

						// Set the typing label.
						typeLabel.text( typeData.handle );

						// Set the REL attribute.
						typeLabel.attr( "rel", typeData.userID );

						// Show the label.
						typeNote.show();

					// If it's a stop event, we only care if the stop
					// event is corresponding to the most current
					// start event (otherwise, we've already lost the
					// opportunity for that one).
					} else if (typeLabel.attr( "rel" ) == typeData.userID){

						// Hide the note.
                        typeNote.show();

					}
				}
			);
}


function selectChannel(channel,index){
    selectedChannel=channel;
	selectedChannelobj=allChannels[index]
}
function bindChannel(stallId,form){
			var chatLog = $( ".maximizedChat" );
			var handleLabel = $( "#handleLabel" );
			var handleToggle = $( "#handleTools a" );
			var typeNote = $( "#typeNote" );
			var typeLabel = $( "#typeLabel" );
			var message = $( "#message" );
			var name = $( "#name" );


			// Bind to the form submission to send the message to the
			// ColdFusion server (to be pushed to all clients).
			form.submit(
				function( event ){

					// Prevent the default events since we don't want
					// the page to refresh.
					event.preventDefault();

					// Check to see if we have a message. If there is
					// no message, don't hit the server.
					if (!message.val().length){
						return;
					}
					
					selectedChannelobj.trigger("client-sendmessage", {
                        userID:stallId,
                        message:message.val(),
                        channel:selectedChannel
                      });
					  console.log("the senders one")
					  console.log( handleLabel.text()) 
					  var chatItem = $(
						
						"<div class='senderChat' >" +
							"<span class='senderName'>" +
							handleLabel.text()+
							"</span>" + 
							"<p>" +
							message.val()+
						"</p>" +
						"</div>"
					);
					chatLog.append( chatItem );

					// Scroll the chat item to the bottom.
					chatLog.scrollTop( chatLog.outerHeight() );
                      message.val( "" ).focus();

					// Clear any "stop" timer for typing. If the
					// user has submitted the message then we can
					// assume they are done typing this message.
					clearTimeout( message.data( "timer" ) );

					// Flag that the user is no longer typing a
					// message.
					message.data( "isTyping", false );

                    selectedChannelobj.trigger("client-typing", {
                        userID: stallId,
						handle: handleLabel.text(),
                        channel:selectedChannel,
                        isTyping: false
                      });

				}
			);

			// Bind the message input so that we can see when the
			// user starts typing (and we can alert the server).
			message.keydown(
				function( event ){

					// Clear any "stop" timer for typing. This way,
					// the previous stop event doesn't get triggered
					// while the user has continued to type.
					clearTimeout( message.data( "timer" ) );

					// Check to see if the user is currently typing.
					// If they are, then we don't need to do any of
					// this stuff until they stop.
					if (message.data( "isTyping" )){
						return;
					}

					// At this point, we know the user was not
					// previously typing so we can send the request
					// to the server that the user has started.
					message.data( "isTyping", true );

					selectedChannelobj.trigger("client-typing", {
                        userID: stallId,
						handle: handleLabel.text(),
                        isTyping: true,
                        channel:selectedChannel
                      });

				}
			);

			// Bind to the message input so that we can see when the
			// users stops typing (and we can alert the server).
			message.keyup(
				function( event ){

					// Clear any "stop" timer for typing. We need to
					// clear here as well because it looks like the
					// browser has trouble trapping every single
					// individual key as a different typing event
					// (at least, that's what I think is going on).
					clearTimeout( message.data( "timer" ) );

					// The key up event doesn't mean that the user
					// has stopped typing. But, it does give us a
					// reason to start paying attention. Let's check
					// back shortly.
					message.data(
						"timer",
						setTimeout(
							function(){
								// Flag that the user is no longer
								// typing a message.
								message.data( "isTyping", false );

								// Tell the server that this user
								// has stopped typing.
								selectedChannelobj.trigger("client-typing", {
                                    userID: stallId,
                                    handle: handleLabel.text(),
                                    isTyping: true,
                                    channel:selectedChannel
                                  });
							},
							750
						)
					);

				}
			);
            // function clearChatLog() {
            //     $("#chatLog").empty();
            // }		
    }