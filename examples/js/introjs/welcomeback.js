document.getElementById("submit-link").addEventListener('click',function(){

    window.location.replace("categorymapdynmic.html")
})
document.getElementById("namevalue").textContent= `${localStorage.getItem('UserName')}`