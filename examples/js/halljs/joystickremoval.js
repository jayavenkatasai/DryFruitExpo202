
var parser = new UAParser();
var result = parser.getResult();
var useragent =result.device.type
var os =result.os.name
if(useragent=="mobile"){

}else{
  document.querySelector(".scenea").removeAttribute('joystick');
}
