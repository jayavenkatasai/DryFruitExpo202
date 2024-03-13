function generateGUID() {
    // Generate random hexadecimal digits
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    
    // Concatenate random hexadecimal digits to form a GUID
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

// Example usage
if (!sessionStorage.getItem('anotherPageLoaded')) {
document.getElementById("submit-link").addEventListener('click',function(){
    var names = document.getElementById("name-value").value;
    names=names.trim();
    alert(names.length)
    if(/^[a-zA-Z0-9\s]{3,}$/.test(names)){
        localStorage.setItem('UserName',names)
      
        sessionStorage.setItem('anotherPageLoaded', true);
        var guid = generateGUID();
        alert(guid);
        localStorage.setItem('GUID',guid)
        // Load another page
        window.location.replace("categorymapdynmic.html")
        
    }else{
        alert("conditions not satisfied")
    }
    alert(names)
    console.log(`the local storage name is${localStorage.getItem('UserName')}`)
})
}
else{
    console.log("Already loaded another_page.html");
}
