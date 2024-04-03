var urlendpoint = ' ';
if (window.location.href.includes('digiexpodev.marketcentral')) {
    urlendpoint = 'https://stage.marketcentral.in';
}
// Check if the URL contains "www" or "expodev"
else if (window.location.href.includes('www') || window.location.href.includes('expodev')) {
    urlendpoint = 'https://stage.marketcentral.in';
}
else if(window.location.href.includes('localhost')){
    urlendpoint = 'https://stage.marketcentral.in';
}
// Default to some other URL
else {
    urlendpoint = 'https://stage.marketcentral.in';
}
function trackExpo(uno,tracktype,productname){
    $.ajax({
        type: "POST",
        async:"true",
        url: `${urlendpoint}/expo/trackExpo.cfm`,
        data:'uno='+uno+'&tracktype='+tracktype+'&pdtname='+productname,
        success: function(){            
        }
    })
}
function trackExpoCategory(uno,tracktype,productname,links){
    // alert("triggerd")
    var tracktype = tracktype.replace("&", "|");
    $.ajax({
        type: "POST",
        async:"true",
        url: `${urlendpoint}/expo/trackExpo.cfm`,
        data:'uno='+uno+'&tracktype='+tracktype+'&pdtname='+productname,
        success: function(){  
            window.location.href = links;          
        }
    })
}
function trackExpoIntro(uno,tracktype,productname,links){
    // alert("triggerd")
    $.ajax({
        type: "POST",
        async:"true",
        url: `${urlendpoint}/expo/trackExpo.cfm`,
        data:'uno='+uno+'&tracktype='+tracktype+'&pdtname='+productname,
        success: function(){  
            window.location.href = links;          
        }
        
    })
    // window.location.href = links;  
}