
<cfsetting showDebugOutput="No">
<cfset crypto = new Crypto() />

<cfset pusherAppID = "1761421" />
<cfset Digest = "OpenSSL::Digest::SHA256.new" />
<cfset pusherKey = "1847dd0c5202f9b24097" />
<cfset pusherSecret = "1f4f75fc7fe4816576b7" />
<cfset socketid="#form.socket_id#"/>
<cfset chatroom = "#form.channel_name#" />
<cfset string_to_sign = "#socketid#:#chatroom#" />

<cfset enckey=#crypto.hmacSha256(pusherSecret, string_to_sign)# />

<cfset auth="1847dd0c5202f9b24097:#enckey#"/ >
<!--- <cfdump  var=#auth#> --->
<cfset requestjson='{
  "auth": "#enckey#"
}'>
<!--- Building JavaScript response for JSONP --->
<cfset jsonpResponse = '{"auth": "1847dd0c5202f9b24097:#enckey#"}'>

<!--- Returning JSONP response --->
<cfcontent type="text/javascript" reset="true">
<cfoutput>#jsonpResponse#</cfoutput>

<!--- <cfhttpparam type="header" name="Content-Type" value="application/json"> --->
<!--- <cfhttpparam type="body" value="#requestjson#"> --->

<!--- <cfdump var="#resp#"> --->

<!---https://api-ap2.pusher.com/apps/1757385/events/pusher/user-auth  --->