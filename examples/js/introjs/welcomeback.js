document.getElementById("submit-link").addEventListener('click',function(){

    window.location.replace("categorymapdynmic.html")
})
document.getElementById("nametext").textContent= `Welcome Back ${localStorage.getItem('UserName')}`