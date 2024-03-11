<cfset datavar = serializeJSON( {
                         "message":"#htmlEditFormat(url.message)#",
                         "userID":"#htmlEditFormat(url.message)#"
                         })/> 
<cfset pusherData = '{"message":"#htmlEditFormat(url.message)#",
                   "channel":"private-chatRoom",
                    "data":"#datavar#",
                  "userID":"#url.userID#",
                  "handle":"#htmlEditFormat(url.handle)#",
                  "name":"sendmessage"
                  }'>