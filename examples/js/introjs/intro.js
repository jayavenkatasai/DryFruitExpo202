if (!sessionStorage.getItem('anotherPageLoaded')) {
document.getElementById("submit-link").addEventListener('click',function(){
    var names = document.getElementById("name-value").value;
    names=names.trim();
    alert(names.length)
    if(/^[a-zA-Z0-9\s]{3,}$/.test(names)){
        localStorage.setItem('UserName',names)
      
        sessionStorage.setItem('anotherPageLoaded', true);
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
