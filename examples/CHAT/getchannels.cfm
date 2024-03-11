<cfsetting showDebugOutput="No">
<!--- Param the url value. --->
<cfparam name="url.userID" type="string" default="" />
<cfparam name="url.handle" type="string" default="" />
<cfparam name="url.message" type="string" default="" />

<!---
    Pusher information used to tie this push notification
    to a given application and to a given client (listening
    for a given channel).

    NOTE: Your Pusher account can have multiple applications
    associated with it (each of which can have on-the-fly
    channel creation).
      app_id = "1761421"
key = "1847dd0c5202f9b24097"
secret = "1f4f75fc7fe4816576b7"
cluster = "ap2"
--->
<cfset pusherAppID = "1761421" />
<cfset pusherKey = "1847dd0c5202f9b24097" />
<cfset pusherSecret = "1f4f75fc7fe4816576b7" />
<!--- <cfset pusherChannel = "private-chatRoom" /> --->
<cfset filter="private-#url.stallid#"/>

<!--- Event we are triggering (this is what the client will "bind" to on the given channel). --->
<cfset pusherEvent = "messageEvent" />

<!---
    At this point, we have to assemble the data we are going to
    push using Pusher. We need to create a chat data struct with
    the passed-in data.

    NOTE: We are using the array-notation to ensure the case of
    the keys is maintained. This is because we have to pass this
    off to Javascript which is case-sensitive.
--->
<!---
<cfset chatData = {} /> 

<cfset chatMessage = {} />

<cfset chatMessage["message"] = htmlEditFormat(url.message)/>
<cfset chatMessage["userID"] = url.userID/>
<cfset chatData["userID"] = url.userID />
<cfset chatData["handle"] = htmlEditFormat(url.handle) /> 
<cfset chatData["message"] = htmlEditFormat(url.message) />
<cfset chatData["name"] = "sendmessage"/> 
<!--- 
 <cfset chatData["data"]= "{
                         \"message\":#htmlEditFormat(url.message)#\"\",
                         \"userID\":#htmlEditFormat(url.message)#\"\"
                         }"> 
                         --->
<!---   <cfset chatData["data"]["user"]= htmlEditFormat(url.userID)>  --->
<!--- <cfset chatData["data"] =  url.userID /> --->
<cfset chatData["channel"] ="private-chatRoom"/>
<!---
    Now that we have our chat data, we have to serialize it for
    our HTTP POST to the Pusher App. All values "pushed" must be
    in JSON format.
--->
<cfset pusherData = serializeJSON(chatData) /> 

--->

<cfset pusherData ="">

<!--- <cfdump var="#pusherData#"> --->
                  
<!--- <cfdump var="#pusherData#"/> --->
<!--- Authentication information. --->
<cfset authVersion = "1.0" />
<cfset authMD5Body = lcase(hash(pusherData, "md5")) />
<cfset authTimeStamp = fix(getTickCount() / 1000) />

<cfset authTimeStamp = #Replace(authTimeStamp,":","%3A","All")#>

<!--- Build the post resource (the RESTful resource). --->
<cfset pusherResource = "/apps/#pusherAppID#/events" />

<!---
    Create the raw signature data. This is the HTTP
    method, the resource, and the alpha-ordered query
    string (non-URL-encoded values).
--->
<cfset signatureData = (
    "GET\n" &
    "/apps/#pusherAppID#/channels\n" &
    "auth_key=#pusherKey#&" &
    "auth_timestamp=#authTimeStamp#&" &
    "auth_version=#authVersion#&" &
    "body_md5=#authMD5Body#&" &
    "filter_by_prefix=#filter#"
) />

<!---
    Create our secret key generator. This can create a secret
    key from a given byte array. Initialize it with the byte
    array version of our PushApp secret key and the algorithm
    we want to use to generate the secret key.
--->
<cfset secretKeySpec = createObject(
    "java",
    "javax.crypto.spec.SecretKeySpec"
).init(
    toBinary(toBase64(pusherSecret)),
    "HmacSHA256"
) />
<cfset crypto = new Crypto() />
<!--- <cfset inputString = "GET\n/apps/#pusherAppID#/channels\nauth_key=#pusherKey#&auth_timestamp=#authTimeStamp#&auth_version=1.0&body_md5=#authMD5Body#" /> --->

	<!---
		Replace with real new-line characters since ColdFusion doesn't recognize them 
		as embedded string character. 
	--->
 <cfset inputString = replace( #signatureData#, "\n", chr( 10 ), "all" ) /> 
 
 
	<!--- Our value. --->
	<cfset enckey=#crypto.hmacSha256( pusherSecret, inputString )# />

<cfset getSignhmacAsBinary = binaryDecode(enckey,'hex') />
<cfset getSignature = binaryEncode(getSignhmacAsBinary, 'base64') />
<!--- <cfdump var="#pusherData#" > --->
<!---
    Create our MAC (Message Authentication Code) generator
    to encrypt the message data using the PusherApp shared
    secret key.
--->
<!---
<cfset mac = createObject("java", "javax.crypto.Mac").getInstance("HmacSHA256") />

<!--- Initialize the MAC instance using our secret key. --->
<cfset mac.init(secretKeySpec) />--->

<!---
    Complete the MAC operation, encrypting the given secret
    key (that we created above).
--->
<!---
<cfset encryptedBytes = mac.doFinal(signatureData.getBytes()) />

<!--- Convert the encrypted bytes to the HEX string. --->
<cfset bigInt = createObject("java", "java.math.BigInteger").init(1, encryptedBytes) />
<cfset secureSignature = lJustify(bigInt.toString(16), 64) />
--->
<!---
    Now that we have all the values we want to post, including
    our encrypted signature, we can post to the PusherApp REST
    web service using CFHTTP.
--->

<cfhttp result="resp" method="GET" url="https://api-ap2.pusher.com/apps/1761421/channels">
    <!--- Alert the post resource that the value is coming through as JSON data. --->
    <cfhttpparam type="header" name="content-type" value="application/json" />

    <!--- Set the authorization parameters. --->
    <cfhttpparam type="url" name="filter_by_prefix" value="#filter#" />
    <cfhttpparam type="url" name="auth_version" value="#authVersion#" />
    <cfhttpparam type="url" name="auth_key" value="#pusherKey#" />
    <cfhttpparam type="url" name="auth_timestamp" value="#authTimeStamp#" />
    <cfhttpparam type="url" name="body_md5" value="#authMD5Body#" /> 
    <cfhttpparam type="url" name="auth_signature" value="#enckey#" />
 
    <!--- Send the actual message data (JSON data). --->

</cfhttp>

<!--- Output the response. --->
<cfoutput>
#resp.filecontent#
</cfoutput> 
